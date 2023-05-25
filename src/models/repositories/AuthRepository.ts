import { PrismaClient } from "@prisma/client"
import { AuthDTO, CreateAuthDTO, LoginUserDTO } from "../dto/AuthDTO"
const prisma = new PrismaClient()


export default class AuthRepository {
  public readonly findByEmail = async (email: string): Promise<LoginUserDTO | undefined> => {
    const user = await prisma.credential.findUnique({
      where: {
        email
      }
    })

    if (!user) return 

    return user
  }

  public readonly create = async (credential: CreateAuthDTO): Promise<AuthDTO> => {
    const newCredential = await prisma.credential.create({
      data: credential
    })

    const { id, password, ...credentialWithoutPasswordAndId } = newCredential
    return credentialWithoutPasswordAndId
  }
}
