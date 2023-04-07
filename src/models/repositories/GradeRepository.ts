import { PrismaClient } from "@prisma/client"
import { CreateGradeDTO, GradeDTO, UpdateGradeDTO } from "../dto/GradeDTO"


const prisma = new PrismaClient()

export default class GradeRepository {
  public readonly findAll = async (): Promise<GradeDTO[]> => {
    const grade = await prisma.grade.findMany()
    return grade
  }

  public readonly findById = async (id: number): Promise<GradeDTO | undefined> => {
    const grade = await prisma.grade.findUnique({
      where: {
        id
      }
    })

    if (!grade) return

    return grade
  }

  public readonly create = async (grade: CreateGradeDTO): Promise<GradeDTO> => {
    const newGrade = await prisma.grade.create({
      data: grade
    })

    return newGrade
  }

  public readonly update = async (id: number, grade: UpdateGradeDTO): Promise<void> => {
    await prisma.grade.update({
      where: {
        id
      },
      data: grade
    })
  }

  public readonly delete = async (id: number) => {
    await prisma.grade.delete({
      where: {
        id
      }
    })
  }
}
