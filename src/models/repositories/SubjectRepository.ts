import { PrismaClient } from "@prisma/client"
import { CreateSubjectDTO, SubjectDTO, UpdateSubjectDTO } from "../dto/SubjectDTO"


const prisma = new PrismaClient()

export default class SubjectRepository {
  public readonly findAll = async (): Promise<SubjectDTO[]> => {
    const subject = await prisma.subject.findMany()
    return subject
  }

  public readonly findById = async (id: number): Promise<SubjectDTO | undefined> => {
    const subject = await prisma.subject.findUnique({
      where: {
        id
      }
    })

    if (!subject) return

    return subject
  }

  public readonly create = async (subject: CreateSubjectDTO): Promise<SubjectDTO> => {
    const newSubject = await prisma.subject.create({
      data: subject
    })

    return newSubject
  }

  public readonly update = async (id: number, subject: UpdateSubjectDTO): Promise<void> => {
    await prisma.subject.update({
      where: {
        id
      },
      data: subject
    })
  }

  public readonly delete = async (id: number) => {
    await prisma.subject.delete({
      where: {
        id
      }
    })
  }
}
