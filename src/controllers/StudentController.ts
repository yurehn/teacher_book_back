import { Request, Response } from "express"
import { StudentDTO, CreateStudentDTO, UpdateStudentDTO } from "../models/dto/StudentDTO"
import { createStudentSchema, updateStudentSchema } from "../models/validators/studentSchemas"
import StudentRepository from "../models/repositories/StudentRepository"
import { tryCatch } from "../../utils/tryCatch"


export default class StudentController {

  public readonly getAll = tryCatch( async (_req: Request, res: Response) => {
    const repository = new StudentRepository()
    const student: StudentDTO[] = await repository.findAll()
    res.json(student)
  })

  public readonly getById = tryCatch( async (req: Request, res: Response) => {
    const { id } = req.params
    const repository = new StudentRepository()
    const student = await repository.findById(parseInt(id))
    
    if (!student) {
      res.status(404).json({ message: "Student not found" })
      return
    }

    res.json(student)
  })

  public readonly create = tryCatch( async (req: Request, res: Response) => {
    const student = req.body as CreateStudentDTO
    
    await createStudentSchema.validateAsync(student)

    const repository = new StudentRepository()
    const newStudent = await repository.create(student)
    res.json(newStudent)
  })

  public readonly update = tryCatch( async (req: Request, res: Response) => {
    const { id } = req.params
    const student = req.body as UpdateStudentDTO

    await updateStudentSchema.validateAsync(student)
    
    const repository = new StudentRepository()
    await repository.update(parseInt(id), student)
    res.sendStatus(204)
  })

  public readonly delete = tryCatch( async (req: Request, res: Response) => {
    const { id } = req.params

    const repository = new StudentRepository()
    await repository.delete(parseInt(id))
    res.sendStatus(204)
  })
}
