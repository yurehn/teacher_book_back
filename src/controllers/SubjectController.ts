import { Request, Response } from "express"
import { SubjectDTO, CreateSubjectDTO, UpdateSubjectDTO } from "../models/dto/SubjectDTO"
import { createSubjectSchema, updateSubjectSchema } from "../models/validators/subjectSchemas"
import SubjectRepository from "../models/repositories/SubjectRepository"


export default class AnnotationController {

  public readonly getAll = async (_req: Request, res: Response) => {
    const repository = new SubjectRepository()
    const subject: SubjectDTO[] = await repository.findAll()
    res.json(subject)
  }

  public readonly getById = async (req: Request, res: Response) => {
    const { id } = req.params
    const repository = new SubjectRepository()
    const subject = await repository.findById(parseInt(id))

    if (!subject) {
      res.status(404).json({
        message: "Subject not found"
      })
      return
    }

    res.json(subject)
  }

  public readonly create = async (req: Request, res: Response) => {
    const subject = req.body as CreateSubjectDTO

    "// TODO:  definir el formato de error."
    try {
      await createSubjectSchema.validateAsync(subject)
    } catch (error) {
      res.status(400).json({
        message: error.message
      })
      return
    }

    const repository = new SubjectRepository()
    const newSubject = await repository.create(subject)

    res.json(newSubject)
  }

  public readonly update = async (req: Request, res: Response) => {
    const { id } = req.params

    const subject = req.body as UpdateSubjectDTO

    "// TODO:  definir el formato de error."
    try {
      await updateSubjectSchema.validateAsync(subject)
    } catch (error) {
      res.status(400).json({
        message: error.message
      })

      return
    }

    const repository = new SubjectRepository()
    await repository.update(parseInt(id), subject)
    res.sendStatus(204)
  }

  public readonly delete = async (req: Request, res: Response) => {
    const { id } = req.params

    const repository = new SubjectRepository()
    await repository.delete(parseInt(id))
    res.sendStatus(204)
  }
}
