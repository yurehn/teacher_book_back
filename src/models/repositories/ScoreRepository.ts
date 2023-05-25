import { PrismaClient } from "@prisma/client"
import { CreateScoreDTO, ScoreDTO, UpdateScoreDTO } from "../dto/ScoreDTO"


const prisma = new PrismaClient()

export default class ScoreRepository {
  public readonly findAll = async (): Promise<ScoreDTO[]> => {
    const scores = await prisma.score.findMany()
    return scores
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
      data: {
        ...score,
        date_creation: new Date(score.date_creation).toISOString()
      }
    })

    return newScore
  }

  public readonly update = async (id: number, score: UpdateScoreDTO): Promise<void> => {
    await prisma.score.update({
      where: {
        id
      },
      data: {
        ...score,
        date_creation: score.date_creation ? new Date(score.date_creation).toISOString() : undefined
      }
    })
  }

  public readonly delete = async (id: number) => {
    await prisma.score.delete({
      where: {
        id
      }
    })
  }
}
