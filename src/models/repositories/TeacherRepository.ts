import { Gender, PrismaClient } from "@prisma/client"
import { CreateTeacherDTO, TeacherDTO, UpdateTeacherDTO } from "../dto/TeacherDTO"


const prisma = new PrismaClient()

export default class TeacherRepository {
  public readonly findAll = async (): Promise<TeacherDTO[]> => {
    const teacher = await prisma.teacher.findMany()
    return teacher
  }

  public readonly findById = async (id: number): Promise<TeacherDTO | undefined> => {
    const teacher = await prisma.teacher.findUnique({
      where: {
        id
      }
    })

    if (!teacher) return

    return teacher
  }

  public readonly create = async (teacher: CreateTeacherDTO): Promise<TeacherDTO> => {
    const newTeacher = await prisma.teacher.create({
      data: {
        ...teacher,
        gender: teacher.gender as Gender,
        date_of_bird: new Date(teacher.date_of_bird).toISOString()
      }
    })

    return newTeacher
  }

  public readonly update = async (id: number, teacher: UpdateTeacherDTO): Promise<void> => {
    await prisma.teacher.update({
      where: {
        id
      },
      data: {
        ...teacher,
        gender: teacher.gender ? teacher.gender as Gender : undefined,
        date_of_bird: teacher.date_of_bird ? new Date(teacher.date_of_bird).toISOString() : undefined
      }
    })
  }

  public readonly delete = async (id: number) => {
    await prisma.teacher.delete({
      where: {
        id
      }
    })
  }
}
