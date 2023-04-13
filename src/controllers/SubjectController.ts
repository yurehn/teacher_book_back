import { Request, Response } from "express"
import { SubjectDTO, CreateSubjectDTO, UpdateSubjectDTO } from "../models/dto/SubjectDTO"
import { createSubjectSchema, updateSubjectSchema } from "../models/validators/subjectSchemas"
import SubjectRepository from "../models/repositories/SubjectRepository"
import { tryCatch } from "../../utils/tryCatch"
import { appError } from '../../middleware/errorHandler'


export default class AnnotationController {

  public readonly getAll = tryCatch( async (_req: Request, res: Response) => {
    const repository = new SubjectRepository()
    const subject: SubjectDTO[] = await repository.findAll()
    res.json(subject)
  })

  public readonly getById = tryCatch( async (req: Request, res: Response) => {
    const { id } = req.params
    const repository = new SubjectRepository()
    const subject = await repository.findById(parseInt(id))

    if (!subject) {
      throw new appError(404, "Subject not found")
    }

    res.json(subject)
  })

  public readonly create = tryCatch( async (req: Request, res: Response) => {
    const subject = req.body as CreateSubjectDTO

    await createSubjectSchema.validateAsync(subject)
  
    const repository = new SubjectRepository()
    const newSubject = await repository.create(subject)
    res.json(newSubject)
  })

  public readonly update = tryCatch( async (req: Request, res: Response) => {
    const { id } = req.params
    const subject = req.body as UpdateSubjectDTO

    await updateSubjectSchema.validateAsync(subject)
    
    const repository = new SubjectRepository()
    await repository.update(parseInt(id), subject)
    res.sendStatus(204)
  })

  public readonly delete = tryCatch( async (req: Request, res: Response) => {
    const { id } = req.params

    const repository = new SubjectRepository()
    await repository.delete(parseInt(id))
    res.sendStatus(204)
  })
}
