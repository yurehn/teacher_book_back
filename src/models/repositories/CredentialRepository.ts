import { PrismaClient } from "@prisma/client"
import { CreateCredentialDTO, CredentialDTO, UpdateCredentialDTO } from "../dto/CredentialDTO"


const prisma = new PrismaClient()

export default class CredentialRepository {
    public readonly findAll = async (): Promise<CredentialDTO[]> => {
        const credential = await prisma.credential.findMany()
        return credential
    }

    public readonly findById = async (id: number): Promise<CredentialDTO | undefined> => {
        const credential = await prisma.credential.findUnique({
            where: {
                id
            }
        })

        if (!credential) return

        return credential
    }

    public readonly create = async (credential: CreateCredentialDTO): Promise<CredentialDTO> => {
        const newCredential = await prisma.credential.create({
            data: credential
        })

        return newCredential
    }

    public readonly update = async (id: number, credential: UpdateCredentialDTO): Promise<void> => {
        await prisma.credential.update({
            where: {
                id
            },
            data: credential
        })
    }

    public readonly delete = async (id: number) => {
        await prisma.credential.delete({
            where: {
                id
            }
        })
    }
}
