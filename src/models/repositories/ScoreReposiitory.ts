import { PrismaClient } from "@prisma/client"
import { CreateScoreDTO, ScoreDTO, UpdateScoreDTO } from "../dto/ScoreDTO"


const prisma = new PrismaClient()

export default class ScoreRepository {
    public readonly findAll = async (): Promise<ScoreDTO[]> => {
        const score = await prisma.score.findMany()
        return score
    }

    public readonly findById = async (id: number): Promise<ScoreDTO | undefined> => {
        const score = await prisma.score.findUnique({
            where: {
                id
            }
        })

        if (!score) return

        return score
    }

    public readonly create = async (score: CreateScoreDTO): Promise<ScoreDTO> => {
        const newScore = await prisma.score.create({
            data: score
        })

        return newScore
    }

    public readonly update = async (id: number, credential: UpdateScoreDTO): Promise<void> => {
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