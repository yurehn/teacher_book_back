import { Request, Response } from "express"
import { SubjectDTO, CreateSubjectDTO, UpdateSubjectDTO } from "../models/dto/SubjectDTO"
import { createSubjectSchema, updateSubjectSchema } from "../models/validators/subjectSchemas"


export default class AnnotationController {

  public readonly getAll = async (_req: Request, res: Response) => {
    const subject: SubjectDTO[] = [
      {
        id: 1,
        subject: "Mathematics"
      },
      {
        id: 2,
        subject: "Science"
      },
      {
        id: 3,
        subject: "Music"
      },
      {
        id: 4,
        subject: "Spanish"
      },
      {
        id: 5,
        subject: "Arts & Design"
      }
    ]

    res.json(subject)
  }

  public readonly getById = async (req: Request, res: Response) => {
    const { id } = req.params

    const subject: SubjectDTO = {
      id: parseInt(id),
      subject: "Sports"
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

    res.json({
      id: 6,
      ...subject
    })
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

    console.log('Editar', id, subject)
    res.sendStatus(204)
  }

  public readonly delete = async (req: Request, res: Response) => {
    const { id } = req.params

    console.log('Eliminar', id)
    res.sendStatus(204)
  }
}
