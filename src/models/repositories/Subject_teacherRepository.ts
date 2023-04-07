import { PrismaClient } from "@prisma/client"
import { CreateSubject_teacherDTO, Subject_teacherDTO, UpdateSubject_teacherDTO } from "../dto/Subject_teacherDTO"


const prisma = new PrismaClient()

export default class Subject_teacherRepository {
  public readonly findAll = async (): Promise<Subject_teacherDTO[]> => {
    const subject_teacher = await prisma.subject_Teacher.findMany()
    return subject_teacher
  }

  public readonly findById = async (id: number): Promise<Subject_teacherDTO | undefined> => {
    const subject_teacher = await prisma.subject_Teacher.findUnique({
      where: {
        id
      }
    })

    if (!subject_teacher) return

    return subject_teacher
  }

  public readonly create = async (subject_teacher: CreateSubject_teacherDTO): Promise<Subject_teacherDTO> => {
    const newSubject_teacher = await prisma.subject_Teacher.create({
      data: subject_teacher
    })

    return newSubject_teacher
  }

  public readonly update = async (id: number, subject_teacher: UpdateSubject_teacherDTO): Promise<void> => {
    await prisma.subject_Teacher.update({
      where: {
        id
      },
      data: subject_teacher
    })
  }

  public readonly delete = async (id: number) => {
    await prisma.subject_Teacher.delete({
      where: {
        id
      }
    })
  }
}
