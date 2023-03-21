import { Request, Response } from "express"
import { Grade_subjectDTO, CreateGrade_subjectDTO, UpdateGrade_subjectDTO } from "../models/dto/Grade_subjectDTO"
import { createGrade_subjectSchema, updateGrade_subjectSchema } from "../models/validators/grade_subjectSchemas"


export default class Grade_subjectController {

  public readonly getAll = async (_req: Request, res: Response) => {
    const grade_subject: Grade_subjectDTO[] = [
      {
        id: 1,
        gradeId: 1,
        subjectId: 1
      },
      {
        id: 2,
        gradeId: 2,
        subjectId: 2
      },
      {
        id: 3,
        gradeId: 3,
        subjectId: 3
      },
      {
        id: 4,
        gradeId: 4,
        subjectId: 4
      },
      {
        id: 5,
        gradeId: 5,
        subjectId: 5
      }
    ]

    res.json(grade_subject)
  }

  public readonly getById = async (req: Request, res: Response) => {

    const { id } = req.params

    const subject_teacher: Grade_subjectDTO = {
      id: parseInt(id),
      gradeId: 5,
      subjectId: 5
    }

    res.json(subject_teacher)
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

    res.json({
      id: 8,
      ...grade_subject
    })
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

    console.log('Editar', id, grade_subject)
    res.sendStatus(204)
  }

  public readonly delete = async (req: Request, res: Response) => {
    const { id } = req.params

    console.log('Eliminar', id)
    res.sendStatus(204)
  }
}
