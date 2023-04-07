import { Request, Response } from "express"
import { Subject_teacherDTO, CreateSubject_teacherDTO, UpdateSubject_teacherDTO } from "../models/dto/Subject_teacherDTO"
import { createSubject_teacherSchema, updateSubject_teacherSchema } from "../models/validators/subject_teacherSchemas"
import Subject_teacherRepository from "../models/repositories/Subject_teacherRepository"


export default class Subject_teacherController {

  public readonly getAll = async (_req: Request, res: Response) => {
    const repository = new Subject_teacherRepository()
    const subject_teacher: Subject_teacherDTO[] = await repository.findAll()
    res.json(subject_teacher)
  }

  public readonly getById = async (req: Request, res: Response) => {
    const { id } = req.params
    const repository = new Subject_teacherRepository()
    const subject_teacher = await repository.findById(parseInt(id))

    if (!subject_teacher) {
      res.status(404).json({
        message: "Subject_teacher not found"
      })
      return
    }

    res.json(subject_teacher)
  }

  public readonly create = async (req: Request, res: Response) => {
    const subject_teacher = req.body as CreateSubject_teacherDTO

    "// TODO: definir el formato de error."
    try {
      await createSubject_teacherSchema.validateAsync(subject_teacher)
    } catch (error) {
      res.status(400).json({
        message: error.message
      })
      return
    }

    const repository = new Subject_teacherRepository()
    const newSubject_teacher = await repository.create(subject_teacher)
    res.json(newSubject_teacher)
  }

  public readonly update = async (req: Request, res: Response) => {
    const { id } = req.params

    const subject_teacher = req.body as UpdateSubject_teacherDTO

    "// TODO:  definir el formato de error."
    try {
      await updateSubject_teacherSchema.validateAsync(subject_teacher)
    } catch (error) {
      res.status(400).json({
        message: error.message
      })

      return
    }

    const repository = new Subject_teacherRepository()
    await repository.update(parseInt(id), subject_teacher)
    res.sendStatus(204)
  }

  public readonly delete = async (req: Request, res: Response) => {
    const { id } = req.params

    const repository = new Subject_teacherRepository()
    await repository.delete(parseInt(id))
    res.sendStatus(204)
  }
}
