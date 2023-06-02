import { Gender, PrismaClient } from "@prisma/client"
import { CreateTeacherDTO, TeacherDTO, UpdateTeacherDTO } from "../dto/TeacherDTO"


const prisma = new PrismaClient()

export default class TeacherRepository {
  public readonly findAll = async (): Promise<TeacherDTO[]> => {
    const teachers = await prisma.teacher.findMany()

    const teachersWithoutPassword = teachers.map((teacher) => {
      const { credential_id, ...teacherWithoutPassword } = teacher
      return teacherWithoutPassword
    })

    return teachersWithoutPassword
  }

  public readonly findById = async (id: number): Promise<TeacherDTO | undefined> => {
    const teacher = await prisma.teacher.findUnique({
      where: {
        id
      }
    })

    if (!teacher) return

    const { credential_id, ...teacherWithoutPassword } = teacher
    return teacherWithoutPassword
  }

  public readonly create = async (teacher: CreateTeacherDTO): Promise<TeacherDTO> => {
    const newTeacher = await prisma.teacher.create({
      data: {
        ...teacher,
        gender: teacher.gender as Gender,
        date_of_birth: new Date(teacher.date_of_birth).toISOString()
      }
    })

    const { credential_id, ...teacherWithoutPassword } = newTeacher
    return teacherWithoutPassword
  }

  public readonly update = async (id: number, teacher: UpdateTeacherDTO): Promise<void> => {
    await prisma.teacher.update({
      where: {
        id
      },
      data: {
        ...teacher,
        gender: teacher.gender ? teacher.gender as Gender : undefined,
        date_of_birth: teacher.date_of_birth ? new Date(teacher.date_of_birth).toISOString() : undefined
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
