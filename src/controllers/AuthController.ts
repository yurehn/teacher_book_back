import { Request, Response } from "express"
import { tryCatch } from "../../utils/tryCatch"
import { loginSchema } from "../models/validators/authSchema"
import AuthRepository from "../models/repositories/AuthRepository"
import { LoginUserDTO } from "../models/dto/AuthDTO"
import { generateToken } from "../lib/jwt"


export default class AuthController {

  public readonly login = tryCatch( async (req: Request, res: Response) => {
    const credentials = req.body as LoginUserDTO
  
    // TODO: ver si la persona que hace login es un admin o un profesor. // Actualmente solo es para profesor

    await loginSchema.validateAsync(credentials)
    
    const repository = new AuthRepository()
    const credentialsFromDb = await repository.findByEmail(credentials.email)
    
    
    if (!credentialsFromDb || credentialsFromDb.password !== credentials.password) {
      res.status(401).json({ message: "Invalid credentials" })
      return
    }
    
    const userId = await repository.userAssociatedToCredential(credentialsFromDb.id)

    if (!userId) {
      res.status(401).json({ message: "An error has occurred try later" })
      return
    }

    const token = generateToken(userId, credentialsFromDb)

    if (!credentialsFromDb || credentialsFromDb.password !== credentials.password) {
      res.status(401).json({ message: "Invalid credentials" })
      return
    }

    res.json({ token })
  })

  // public readonly register = tryCatch( async (req: Request, res: Response) => {
  //   const credentials = req.body as CreateAuthDTO

  //   // TODO: ver si la persona que hace login es un admin o un profesor. // Actualmente solo es para profesor

  //   await registerSchema.validateAsync(credentials)
    
  //   const repository = new AuthRepository()
  //   const newCredential = await repository.create(credentials)
    
  //   res.status(201).json(newCredential)
  // })
}
