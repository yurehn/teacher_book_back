import { Request, Response } from "express"
import { TeacherDTO, CreateTeacherDTO, UpdateTeacherDTO } from "../models/dto/TeacherDTO"
import { createTeacherSchema, updateTeacherSchema } from "../models/validators/teacherSchemas"


export default class TeacherController {
  public readonly getAll = async (_req: Request, res: Response) => {
    const teacher: TeacherDTO[] = [
      {
        id: 1,
        name: "John",
        last_name: "Doe",
        date_of_bird: new Date("1990-01-01")
      },
      {
        id: 2,
        name: "Jane",
        last_name: "Bae",
        date_of_bird: new Date("1992-05-14")
      },
      {
        id: 3,
        name: "Bob",
        last_name: "Smith",
        date_of_bird: new Date("1985-07-23")
      },
      {
        id: 4,
        name: "Alice",
        last_name: "Johnson",
        date_of_bird: new Date("1998-11-30")
      },
      {
        id: 5,
        name: "Mike",
        last_name: "Davis",
        date_of_bird: new Date("1995-03-20")
      }
    ]
    res.json(teacher)
  }

  public readonly getById = async (req: Request, res: Response) => {
    const { id } = req.params
    const teacher: TeacherDTO = {
      id: parseInt(id),
      name: "John",
      last_name: "Doe",
      date_of_bird: new Date()
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

    res.json({
      id: 6,
      ...teacher
    })
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

    console.log('Editar', id, teacher)
    res.sendStatus(204)
  }
  
  public readonly delete = async (req: Request, res: Response) => {
    const { id } = req.params
    
    console.log('Eliminar', id)
    res.sendStatus(204)

  }
}
