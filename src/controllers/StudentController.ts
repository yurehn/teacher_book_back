import { Request, Response } from "express"
import { StudentDTO, CreateStudentDTO, UpdateStudentDTO } from "../models/dto/StudentDTO"
import { createStudentSchema, updateStudentSchema } from "../models/validators/studentSchemas"
import StudentRepository from "../models/repositories/StudentRepository"


export default class StudentController {

  public readonly getAll = async (_req: Request, res: Response) => {
    const repository = new StudentRepository()
    const student: StudentDTO[] = await repository.findAll()

    res.json(student)
  }

  public readonly getById = async (req: Request, res: Response) => {

    const { id } = req.params
    const repository = new StudentRepository()
    const student = await repository.findById(parseInt(id))

    if (!student) {
      res.status(404).json({
        message: "Student not found"
      })
      return
    }

    res.json(student)
  }

  public readonly create = async (req: Request, res: Response) => {
    const student = req.body as CreateStudentDTO
    

    "// TODO: definir el formato de error."
    try {
      await createStudentSchema.validateAsync(student)
    } catch (error) {
      res.status(400).json({
        message: error.message
      })
      return
    }

    const repository = new StudentRepository()
    const newStudent = await repository.create(student)

    res.json(newStudent)
  }

  public readonly update = async (req: Request, res: Response) => {
    const { id } = req.params
    const student = req.body as UpdateStudentDTO

    "// TODO:  definir el formato de error."
    try {
      await updateStudentSchema.validateAsync(student)
    } catch (error) {
      res.status(400).json({
        message: error.message
      })

      return
    }

    const repository = new StudentRepository()
    await repository.update(parseInt(id), student)
    res.sendStatus(204)
  }

  public readonly delete = async (req: Request, res: Response) => {
    const { id } = req.params

    const repository = new StudentRepository()
    await repository.delete(parseInt(id))
    res.sendStatus(204)
  }
}
