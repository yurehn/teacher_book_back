import { Request, Response } from "express"
import { Grade_subjectDTO, CreateGrade_subjectDTO, UpdateGrade_subjectDTO } from "../models/dto/Grade_subjectDTO"
import { createGrade_subjectSchema, updateGrade_subjectSchema } from "../models/validators/grade_subjectSchemas"
import Grade_subjectRepository from "../models/repositories/Grade_subjectRepository"


export default class Grade_subjectController {

  public readonly getAll = async (_req: Request, res: Response) => {
    const repository = new Grade_subjectRepository()
    const grade_subject: Grade_subjectDTO[] = await repository.findAll()
    res.json(grade_subject)
  }

  public readonly getById = async (req: Request, res: Response) => {
    const { id } = req.params
    const repository = new Grade_subjectRepository()
    const grade_subject = await repository.findById(parseInt(id))

    if (!grade_subject) {
      res.status(404).json({
        message: "Grade_subject not found"
      })
      return
    }

    res.json(grade_subject)
  }

  public readonly create = async (req: Request, res: Response) => {
    const grade_subject = req.body as CreateGrade_subjectDTO

    "// TODO: definir el formato de error."
    try {
      await createGrade_subjectSchema.validateAsync(grade_subject)
    } catch (error) {
      res.status(400).json({
        message: error.message
      })
      return
    }

    const repository = new Grade_subjectRepository()
    const newGrade_subject = await repository.create(grade_subject)

    res.json(newGrade_subject)
  }

  public readonly update = async (req: Request, res: Response) => {
    const { id } = req.params

    const grade_subject = req.body as UpdateGrade_subjectDTO

    "// TODO:  definir el formato de error."
    try {
      await updateGrade_subjectSchema.validateAsync(grade_subject)
    } catch (error) {
      res.status(400).json({
        message: error.message
      })

      return
    }

    const repository = new Grade_subjectRepository()
    await repository.update(parseInt(id), grade_subject)
    res.sendStatus(204)
  }

  public readonly delete = async (req: Request, res: Response) => {
    const { id } = req.params

    const repository = new Grade_subjectRepository()
    await repository.delete(parseInt(id))
    res.sendStatus(204)
  }
}
