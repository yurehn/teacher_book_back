import { Request, Response } from "express"
import { tryCatch } from "../../utils/tryCatch"
import { loginSchema, registerSchema } from "../models/validators/authSchema"
import AuthRepository from "../models/repositories/AuthRepository"
import { CreateAuthDTO } from "../models/dto/AuthDTO"


export default class AuthController {

  public readonly login = tryCatch( async (req: Request, res: Response) => {
    const credentials = req.body

    // TODO: ver si la persona que hace login es un admin o un profesor.

    await loginSchema.validateAsync(credentials)
    
    const repository = new AuthRepository()
    const credentialsFromDb = await repository.findByEmail(credentials.email)
    
    if (!credentialsFromDb || credentialsFromDb.password !== credentials.password) {
      res.status(401).json({ message: "Invalid credentials" })
      return
    }

    res.sendStatus(200)
  })

  public readonly register = tryCatch( async (req: Request, res: Response) => {
    
    const credentials = req.body as CreateAuthDTO

    // TODO: ver si la persona que hace login es un admin o un profesor.

    await registerSchema.validateAsync(credentials)
    
    const repository = new AuthRepository()
    const newCredential = await repository.create(credentials)
    
    res.status(201).json(newCredential)
  })
}
