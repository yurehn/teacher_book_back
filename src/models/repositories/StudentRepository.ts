import { Gender, PrismaClient } from "@prisma/client"
import { CreateStudentDTO, StudentDTO, UpdateStudentDTO } from "../dto/StudentDTO"


const prisma = new PrismaClient()

export default class StudentRepository {
  public readonly findAll = async (): Promise<StudentDTO[]> => {
    const students = await prisma.student.findMany()
    return students
  }

  public readonly findById = async (id: number): Promise<StudentDTO | undefined> => {
    const student = await prisma.student.findUnique({
      where: {
        id
      }
    })

    if (!student) return

    return student
  }

  public readonly create = async (student: CreateStudentDTO): Promise<StudentDTO> => {
    const newStudent = await prisma.student.create({
      data: {
        ...student,
        gender: student.gender as Gender,
        date_of_birth: new Date(student.date_of_birth).toISOString(),
      }
    })

    return newStudent
  }

  public readonly update = async (id: number, student: UpdateStudentDTO): Promise<void> => {
    await prisma.student.update({
      where: {
        id
      },
      data: {
        ...student,
        gender: student.gender ? student.gender as Gender : undefined,
        date_of_birth: student.date_of_birth ? new Date(student.date_of_birth).toISOString() : undefined
      }
    })
  }

  public readonly delete = async (id: number) => {
    await prisma.student.delete({
      where: {
        id
      }
    })
  }
}
