import { Request, Response } from "express"
import { ObservationDTO, CreateObservationDTO, UpdateObservationDTO } from "../models/dto/ObservationDTO"
import { createObservationSchema, updateObservationSchema } from "../models/validators/observationSchemas"
import ObservationRepository from "../models/repositories/ObservationRepository"
import { tryCatch } from "../../utils/tryCatch"
import { appError } from '../../middleware/errorHandler'


export default class ObservationController {

  public readonly getAll = tryCatch( async (_req: Request, res: Response) => {
    const repository = new ObservationRepository()
    const observation: ObservationDTO[] = await repository.findAll()
    res.json(observation)
  })

  public readonly getById = tryCatch( async (req: Request, res: Response) => {
    const { id } = req.params
    const repository = new ObservationRepository()
    const observation = await repository.findById(parseInt(id))

    if (!observation) {
      throw new appError(404, "Observation not found")
    }

    res.json(observation)
  })

  public readonly create = tryCatch( async (req: Request, res: Response) => {
    const observation = req.body as CreateObservationDTO

    await createObservationSchema.validateAsync(observation)
    
    const repository = new ObservationRepository()
    const newObservation = await repository.create(observation)
    res.json(newObservation)
  })

  public readonly update = tryCatch( async (req: Request, res: Response) => {
    const { id } = req.params
    const observation = req.body as UpdateObservationDTO

    await updateObservationSchema.validateAsync(observation)
    
    const repository = new ObservationRepository()
    await repository.update(parseInt(id), observation)
    res.sendStatus(204)
  })

  public readonly delete = tryCatch( async (req: Request, res: Response) => {
    const { id } = req.params

    const repository = new ObservationRepository()
    await repository.delete(parseInt(id))
    res.sendStatus(204)
  })
}
