import { Request, Response } from "express"
import { ScoreDTO, CreateScoreDTO, UpdateScoreDTO } from "../models/dto/ScoreDTO"
import { createScoreSchema, updateScoreSchema } from "../models/validators/scoreSchemas"
import ScoreRepository from "../models/repositories/ScoreRepository"
import { tryCatch } from "../../utils/tryCatch"
import { appError } from '../../middleware/errorHandler'


export default class ScoreController {

  public readonly getAll = tryCatch( async (_req: Request, res: Response) => {
    const repository = new ScoreRepository()
    const score: ScoreDTO[] = await repository.findAll()
    res.json(score)
  })

  public readonly getById = tryCatch( async (req: Request, res: Response) => {
    const { id } = req.params
    const repository = new ScoreRepository()
    const score = await repository.findById(parseInt(id))

    if (!score) {
      throw new appError(404, "Score not found")
    }

    res.json(score)
  })

  public readonly create = tryCatch( async (req: Request, res: Response) => {
    const score = req.body as CreateScoreDTO

  
    await createScoreSchema.validateAsync(score)
    
    const repository = new ScoreRepository()
    const newScore = await repository.create(score)
    res.json(newScore)
  })

  public readonly update = tryCatch( async (req: Request, res: Response) => {
    const { id } = req.params
    const score = req.body as UpdateScoreDTO

    await updateScoreSchema.validateAsync(score)

    const repository = new ScoreRepository()
    await repository.update(parseInt(id), score)
    res.sendStatus(204)
  })

  public readonly delete = tryCatch( async (req: Request, res: Response) => {
    const { id } = req.params

    const repository = new ScoreRepository()
    await repository.delete(parseInt(id))
    res.sendStatus(204)
  })
}
