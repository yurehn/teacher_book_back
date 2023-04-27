import { Request, Response } from "express"
import { TeacherDTO, CreateTeacherDTO, UpdateTeacherDTO } from "../models/dto/TeacherDTO"
import { createTeacherSchema, updateTeacherSchema } from "../models/validators/teacherSchemas"
import TeacherRepository from "../models/repositories/TeacherRepository"
import { tryCatch } from "../../utils/tryCatch"
import { appError } from '../../middleware/errorHandler'


export default class TeacherController {
  public readonly getAll = tryCatch( async (_req: Request, res: Response) => {
    const repository = new TeacherRepository()
    const teacher: TeacherDTO[] = await repository.findAll()
    res.json(teacher)
  })

  public readonly getById = tryCatch( async (req: Request, res: Response) => {
    const { id } = req.params
    const repository = new TeacherRepository()
    const teacher = await repository.findById(parseInt(id))

    if (!teacher) {
      throw new appError(404, "Teacher not found")
    }
    
    res.json(teacher)
  })

  public readonly create = tryCatch( async (req: Request, res: Response) => {
    const teacher = req.body as CreateTeacherDTO

    await createTeacherSchema.validateAsync(teacher)
    
    const repository = new TeacherRepository()
    const newTeacher = await repository.create(teacher)
    res.json(newTeacher)
  })

  public readonly update = tryCatch( async (req: Request, res: Response) => {
    const { id } = req.params
    const teacher = req.body as UpdateTeacherDTO

    await updateTeacherSchema.validateAsync(teacher)

    const repository = new TeacherRepository()
    await repository.update(parseInt(id), teacher)
    res.sendStatus(204)
  })
  
  public readonly delete = tryCatch( async (req: Request, res: Response) => {
    const { id } = req.params
    
    const repository = new TeacherRepository()
    await repository.delete(parseInt(id))
    res.sendStatus(204)

  })
}
