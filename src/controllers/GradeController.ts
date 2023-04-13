import { Request, Response } from "express"
import { GradeDTO, CreateGradeDTO, UpdateGradeDTO } from "../models/dto/GradeDTO"
import { createGradeSchema, updateGradeSchema } from "../models/validators/gradeSchemas"
import GradeRepository from "../models/repositories/GradeRepository"
import { tryCatch } from "../../utils/tryCatch"
import { appError } from '../../middleware/errorHandler'


export default class GradeController {

  public readonly getAll = tryCatch( async (_req: Request, res: Response) => {
    const repository = new GradeRepository()
    const grade: GradeDTO[] = await repository.findAll()
    res.json(grade)
  })

  public readonly getById = tryCatch( async (req: Request, res: Response) => {
    const { id } = req.params
    const repository = new GradeRepository()
    const grade = await repository.findById(parseInt(id))

    if (!grade) {
      throw new appError(404, "Grade not found")
    }

    res.json(grade)
  })

  public readonly create = tryCatch( async (req: Request, res: Response) => {
    const grade = req.body as CreateGradeDTO

  
    await createGradeSchema.validateAsync(grade)
    
    const repository = new GradeRepository()
    const newGrade = await repository.create(grade)
    res.json(newGrade)
  })

  public readonly update = tryCatch( async (req: Request, res: Response) => {
    const { id } = req.params
    const grade = req.body as UpdateGradeDTO

    await updateGradeSchema.validateAsync(grade)

    const repository = new GradeRepository()
    await repository.update(parseInt(id), grade)
    res.sendStatus(204)
  })

  public readonly delete = tryCatch( async (req: Request, res: Response) => {
    const { id } = req.params

    const repository = new GradeRepository()
    await repository.delete(parseInt(id))
    res.sendStatus(204)
  })
}
