import { Request, Response } from "express"
import { StudentDTO, CreateStudentDTO, UpdateStudentDTO } from "../models/dto/StudentDTO"
import { createStudentSchema, updateStudentSchema } from "../models/validators/studentSchemas"


export default class AnnotationController {

  public readonly getAll = async (_req: Request, res: Response) => {
    const student: StudentDTO[] = [
      {
        id: 1,
        name: "Ricardo",
        last_name: "Pérez",
        date_of_bird: new Date("1995-06-12"),
        gradeId: 1,
        gender: "male",
      },
      {
        id: 2,
        name: "Ana",
        last_name: "González",
        date_of_bird: new Date("1993-09-27"),
        gradeId: 2,
        gender: "female",
      },
      {
        id: 3,
        name: "Mario",
        last_name: "Hernández",
        date_of_bird: new Date("1992-03-21"),
        gradeId: 1,
        gender: "male",
      },
      {
        id: 4,
        name: "Sofía",
        last_name: "Martínez",
        date_of_bird: new Date("1996-11-08"),
        gradeId: 3,
        gender: "female",
      },
      {
        id: 5,
        name: "Carlos",
        last_name: "Gómez",
        date_of_bird: new Date("1994-07-03"),
        gradeId: 2,
        gender: "male",
      }
    ]

    res.json(student)
  }

  public readonly getById = async (req: Request, res: Response) => {

    const { id } = req.params

    const student: StudentDTO = {
      id: parseInt(id),
      name: "Carlos",
      last_name: "Gómez",
      date_of_bird: new Date("1994-07-03"),
      gradeId: 2,
      gender: "male",
    }

    res.json(student)
  }

  public readonly create = async (req: Request, res: Response) => {
    console.log('2');
    const student = req.body as CreateStudentDTO
    console.log('1');
    

    "// TODO: definir el formato de error."
    try {
      await createStudentSchema.validateAsync(student)
    } catch (error) {
      res.status(400).json({
        message: error.message
      })
      return
    }

    res.json({
      id: 8,
      ...student
    })
  }

  public readonly update = async (req: Request, res: Response) => {
    const { id } = req.params

    const student = req.body as UpdateStudentDTO

    "// TODO:  definir el formato de error."
    try {
      await updateStudentSchema.validateAsync(student)
    } catch (error) {
      res.status(400).json({
        message: error.message
      })

      return
    }

    console.log('Editar', id, student)
    res.sendStatus(204)
  }

  public readonly delete = async (req: Request, res: Response) => {
    const { id } = req.params

    console.log('Eliminar', id)
    res.sendStatus(204)
  }
}
