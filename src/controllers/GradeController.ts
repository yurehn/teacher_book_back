import { Request, Response } from "express"
import { GradeDTO, CreateGradeDTO, UpdateGradeDTO } from "../models/dto/GradeDTO"
import { createGradeSchema, updateGradeSchema } from "../models/validators/gradeSchemas"
import GradeRepository from "../models/repositories/GradeRepository"


export default class GradeController {

  public readonly getAll = async (_req: Request, res: Response) => {
    const repository = new GradeRepository()
    const grade: GradeDTO[] = await repository.findAll()
    res.json(grade)
  }

  public readonly getById = async (req: Request, res: Response) => {
    const { id } = req.params
    const repository = new GradeRepository()
    const grade = await repository.findById(parseInt(id))

    if (!grade) {
      res.status(404).json({
        message: "Grade not found"
      })
      return
    }

    res.json(grade)
  }

  public readonly create = async (req: Request, res: Response) => {
    const grade = req.body as CreateGradeDTO

    "// TODO: definir el formato de error."
    try {
      await createGradeSchema.validateAsync(grade)
    } catch (error) {
      res.status(400).json({
        message: error.message
      })
      return
    }
    
    const repository = new GradeRepository()
    const newGrade = await repository.create(grade)

    res.json(newGrade)
  }

  public readonly update = async (req: Request, res: Response) => {
    const { id } = req.params
    const grade = req.body as UpdateGradeDTO

    "// TODO:  definir el formato de error."
    try {
      await updateGradeSchema.validateAsync(grade)
    } catch (error) {
      res.status(400).json({
        message: error.message
      })

      return
    }

    const repository = new GradeRepository()
    await repository.update(parseInt(id), grade)
    res.sendStatus(204)
  }

  public readonly delete = async (req: Request, res: Response) => {
    const { id } = req.params

    const repository = new GradeRepository()
    await repository.delete(parseInt(id))
    res.sendStatus(204)
  }
}
