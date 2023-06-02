import { PrismaClient } from "@prisma/client"
import { AuthDTO } from "../dto/AuthDTO"
const prisma = new PrismaClient()


export default class AuthRepository {
  public readonly findByEmail = async (email: string): Promise<AuthDTO | undefined> => {
    const crededntials = await prisma.credential.findUnique({
      where: {
        email
      }
    })

    if (!crededntials) return 

    return crededntials
  }

  public readonly userAssociatedToCredential = async (credentialId: number): Promise<number | undefined> => {
    const teacher = await prisma.teacher.findUnique({
      where: {
        credential_id: credentialId
      }
    })

    if (teacher && teacher.credential_id) {
      return teacher.credential_id
    } 

    return
  }

  // TODO: for future versions
  // public readonly create = async (credential: CreateAuthDTO): Promise<AuthDTO> => {
  //   const newCredential = await prisma.credential.create({
  //     data: credential
  //   })

  //   const { id, password, ...credentialWithoutPasswordAndId } = newCredential
  //   return credentialWithoutPasswordAndId
  // }
}
