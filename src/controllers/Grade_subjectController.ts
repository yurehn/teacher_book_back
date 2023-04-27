import { Request, Response } from "express"
import { Grade_subjectDTO, CreateGrade_subjectDTO, UpdateGrade_subjectDTO } from "../models/dto/AdminDTO"
import { createGrade_subjectSchema, updateGrade_subjectSchema } from "../models/validators/grade_subjectSchemas"
import Grade_subjectRepository from "../models/repositories/Grade_subjectRepository"
import { tryCatch } from "../../utils/tryCatch"
import { appError } from '../../middleware/errorHandler'


export default class Grade_subjectController {

  public readonly getAll = tryCatch( async (_req: Request, res: Response) => {
    const repository = new Grade_subjectRepository()
    const grade_subject: Grade_subjectDTO[] = await repository.findAll()
    res.json(grade_subject)
  })

  public readonly getById = tryCatch( async (req: Request, res: Response) => {
    const { id } = req.params
    const repository = new Grade_subjectRepository()
    const grade_subject = await repository.findById(parseInt(id))

    if (!grade_subject) {
      throw new appError(404, "Grade_subject not found")
    }

    res.json(grade_subject)
  })

  public readonly create = tryCatch( async (req: Request, res: Response) => {
    const grade_subject = req.body as CreateGrade_subjectDTO

    await createGrade_subjectSchema.validateAsync(grade_subject)
    
    const repository = new Grade_subjectRepository()
    const newGrade_subject = await repository.create(grade_subject)
    res.json(newGrade_subject)
  })

  public readonly update = tryCatch( async (req: Request, res: Response) => {
    const { id } = req.params
    const grade_subject = req.body as UpdateGrade_subjectDTO

    await updateGrade_subjectSchema.validateAsync(grade_subject)
    
    const repository = new Grade_subjectRepository()
    await repository.update(parseInt(id), grade_subject)
    res.sendStatus(204)
  })

  public readonly delete = tryCatch ( async (req: Request, res: Response) => {
    const { id } = req.params

    const repository = new Grade_subjectRepository()
    await repository.delete(parseInt(id))
    res.sendStatus(204)
  })
}
