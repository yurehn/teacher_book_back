import { Request, Response } from "express"
import { Subject_teacherDTO, CreateSubject_teacherDTO, UpdateSubject_teacherDTO } from "../models/dto/Subject_teacherDTO"
import { createSubject_teacherSchema, updateSubject_teacherSchema } from "../models/validators/subject_teacherSchemas"


export default class Subject_teacherController {

  public readonly getAll = async (_req: Request, res: Response) => {
    const subject_teacher: Subject_teacherDTO[] = [
      {
        id: 1,
        subjectId: 1,
        teacherId: 1
      },
      {
        id: 2,
        subjectId: 2,
        teacherId: 2
      },
      {
        id: 3,
        subjectId: 3,
        teacherId: 3
      },
      {
        id: 4,
        subjectId: 4,
        teacherId: 4
      },
      {
        id: 5,
        subjectId: 5,
        teacherId: 5
      }
    ]

    res.json(subject_teacher)
  }

  public readonly getById = async (req: Request, res: Response) => {

    const { id } = req.params

    const subject_teacher: Subject_teacherDTO = {
      id: parseInt(id),
      subjectId: 3,
      teacherId: 3
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

    res.json({
      id: 8,
      ...subject_teacher
    })
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

    console.log('Editar', id, subject_teacher)
    res.sendStatus(204)
  }

  public readonly delete = async (req: Request, res: Response) => {
    const { id } = req.params

    console.log('Eliminar', id)
    res.sendStatus(204)
  }
}
