import { Request, Response } from "express"
import { TeacherDTO, CreateTeacherDTO, UpdateTeacherDTO } from "../models/dto/TeacherDTO"
import { createTeacherSchema, updateTeacherSchema } from "../models/validators/teacherSchemas"
import TeacherRepository from "../models/repositories/TeacherRepository"


export default class TeacherController {
  public readonly getAll = async (_req: Request, res: Response) => {
    const repository = new TeacherRepository()
    const teacher: TeacherDTO[] = await repository.findAll()
    res.json(teacher)
  }

  public readonly getById = async (req: Request, res: Response) => {
    const { id } = req.params
    const repository = new TeacherRepository()
    const teacher = await repository.findById(parseInt(id))

    if (!teacher) {
      res.status(404).json({
        message: "Teacher not found"
      })
      return
    }
    
    res.json(teacher)
  }

  public readonly create = async (req: Request, res: Response) => {
    const teacher = req.body as CreateTeacherDTO

    "// TODO:  definir el formato de error."
    try {
      await createTeacherSchema.validateAsync(teacher)
    } catch (error) {
      res.status(400).json({
        message: error.message
      })
      return
    }

    const repository = new TeacherRepository()
    const newTeacher = await repository.create(teacher)

    res.json(newTeacher)
  }

  public readonly update = async (req: Request, res: Response) => {
    const { id } = req.params
    const teacher = req.body as UpdateTeacherDTO

    "// TODO:  definir el formato de error."
    try {
      await updateTeacherSchema.validateAsync(teacher)
    } catch (error) {
      res.status(400).json({
        message: error.message
      })
      return
    }

    const repository = new TeacherRepository()
    await repository.update(parseInt(id), teacher)
    res.sendStatus(204)
  }
  
  public readonly delete = async (req: Request, res: Response) => {
    const { id } = req.params
    
    const repository = new TeacherRepository()
    await repository.delete(parseInt(id))
    res.sendStatus(204)

  }
}
