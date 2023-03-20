import { Request, Response } from "express"
import { GradeDTO, CreateGradeDTO, UpdateGradeDTO } from "../models/dto/GradeDTO"
import { createGradeSchema, updateGradeSchema } from "../models/validators/gradeSchemas"


export default class AnnotationController {

  public readonly getAll = async (_req: Request, res: Response) => {
    const grade: GradeDTO[] = [
      {
        id: 1,
        grade: "1A",
        head_teacherId: 1,
        subjectId: 1
      },
      {
        id: 2,
        grade: "2B",
        head_teacherId: 1,
        subjectId: 1
      },
      {
        id: 3,
        grade: "3C",
        head_teacherId: 1,
        subjectId: 2
      },
      {
        id: 4,
        grade: "4A",
        head_teacherId: 1,
        subjectId: 3
      },
      {
        id: 5,
        grade: "5B",
        head_teacherId: 1,
        subjectId: 4
      },
    ]

    res.json(grade)
  }

  public readonly getById = async (req: Request, res: Response) => {

    const { id } = req.params

    const grade: GradeDTO = {
      id: parseInt(id),
      grade: "5B",
      head_teacherId: 1,
      subjectId: 4
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

    res.json({
      id: 7,
      ...grade
    })
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

    console.log('Editar', id, grade)
    res.sendStatus(204)
  }

  public readonly delete = async (req: Request, res: Response) => {
    const { id } = req.params

    console.log('Eliminar', id)
    res.sendStatus(204)
  }
}
