import { Request, Response } from "express"
import { Subject_teacherDTO, CreateSubject_teacherDTO, UpdateSubject_teacherDTO } from "../models/dto/Subject_teacherDTO"
import { createSubject_teacherSchema, updateSubject_teacherSchema } from "../models/validators/subject_teacherSchemas"
import Subject_teacherRepository from "../models/repositories/Subject_teacherRepository"
import { tryCatch } from "../../utils/tryCatch"
import { appError } from '../../middleware/errorHandler'


export default class Subject_teacherController {

  public readonly getAll = tryCatch( async (_req: Request, res: Response) => {
    const repository = new Subject_teacherRepository()
    const subject_teacher: Subject_teacherDTO[] = await repository.findAll()
    res.json(subject_teacher)
  })

  public readonly getById = tryCatch( async (req: Request, res: Response) => {
    const { id } = req.params
    const repository = new Subject_teacherRepository()
    const subject_teacher = await repository.findById(parseInt(id))

    if (!subject_teacher) {
      throw new appError(404, "Subject_teacher not found")
    }

    res.json(subject_teacher)
  })

  public readonly create = tryCatch( async (req: Request, res: Response) => {
    const subject_teacher = req.body as CreateSubject_teacherDTO
 
    await createSubject_teacherSchema.validateAsync(subject_teacher)
    
    const repository = new Subject_teacherRepository()
    const newSubject_teacher = await repository.create(subject_teacher)
    res.json(newSubject_teacher)
  })

  public readonly update = tryCatch( async (req: Request, res: Response) => {
    const { id } = req.params
    const subject_teacher = req.body as UpdateSubject_teacherDTO

    await updateSubject_teacherSchema.validateAsync(subject_teacher)
    
    const repository = new Subject_teacherRepository()
    await repository.update(parseInt(id), subject_teacher)
    res.sendStatus(204)
  })

  public readonly delete = tryCatch( async (req: Request, res: Response) => {
    const { id } = req.params

    const repository = new Subject_teacherRepository()
    await repository.delete(parseInt(id))
    res.sendStatus(204)
  })
}
