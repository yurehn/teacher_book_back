import { PrismaClient } from "@prisma/client"
import { CreateGrade_subjectDTO, Grade_subjectDTO, UpdateGrade_subjectDTO } from "../dto/AdminDTO"


const prisma = new PrismaClient()

export default class Grade_subjectRepository {
  public readonly findAll = async (): Promise<Grade_subjectDTO[]> => {
    const grade_subject = await prisma.grade_Subject.findMany()
    return grade_subject
  }

  public readonly findById = async (id: number): Promise<Grade_subjectDTO | undefined> => {
    const grade_subject = await prisma.grade_Subject.findUnique({
      where: {
        id
      }
    })

    if (!grade_subject) return

    return grade_subject
  }

  public readonly create = async (grade_subject: CreateGrade_subjectDTO): Promise<Grade_subjectDTO> => {
    const newGrade_subject = await prisma.grade_Subject.create({
      data: grade_subject
    })

    return newGrade_subject
  }

  public readonly update = async (id: number, grade_subject: UpdateGrade_subjectDTO): Promise<void> => {
    await prisma.grade_Subject.update({
      where: {
        id
      },
      data: grade_subject
    })
  }

  public readonly delete = async (id: number) => {
    await prisma.grade_Subject.delete({
      where: {
        id
      }
    })
  }
}
