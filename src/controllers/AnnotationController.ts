import { Request, Response } from "express"
import { AnnotationDTO, CreateAnnotationDTO, UpdateAnnotationDTO } from "../models/dto/AnnotationDTO"
import { createAnnotationSchema, updateAnnotationSchema } from "../models/validators/annotationSchemas"


export default class AnnotationController {

  public readonly getAll = async (_req: Request, res: Response) => {
    const annotation: AnnotationDTO[] = [
      {
        id: 1,
        teacherId: 1,
        type: "positive",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non dolor sit amet massa iaculis maximus nec in turpis. Morbi tempus arcu id urna bibendum elementum. Vestibulum eget orci a nibh blandit feugiat a in libero. Sed feugiat risus eu dolor hendrerit tincidunt. Suspendisse vel mi eu arcu mollis tristique. Nam rutrum velit turpis, vel feugiat mi tincidunt eget. Pellentesque sit amet leo at nisi vestibulum blandit."
      },
      {
        id: 2,
        teacherId: 1,
        type: "negative",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non dolor sit amet massa iaculis maximus nec in turpis. Morbi tempus arcu id urna bibendum elementum. Vestibulum eget orci a nibh blandit feugiat a in libero. Sed feugiat risus eu dolor hendrerit tincidunt. Suspendisse vel mi eu arcu mollis tristique. Nam rutrum velit turpis, vel feugiat mi tincidunt eget. Pellentesque sit amet leo at nisi vestibulum blandit."
      },
      {
        id: 3,
        teacherId: 2,
        type: "positive",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non dolor sit amet massa iaculis maximus nec in turpis. Morbi tempus arcu id urna bibendum elementum. Vestibulum eget orci a nibh blandit feugiat a in libero. Sed feugiat risus eu dolor hendrerit tincidunt. Suspendisse vel mi eu arcu mollis tristique. Nam rutrum velit turpis, vel feugiat mi tincidunt eget. Pellentesque sit amet leo at nisi vestibulum blandit."
      }
    ]

    res.json(annotation)
  }

  public readonly getById = async (req: Request, res: Response) => {
    "// TODO:  Validar que id pertenece a un teacher."
    const { id } = req.params

    const annotation: AnnotationDTO = {
      id: parseInt(id),
      teacherId: 2,
      type: "positive",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non dolor sit amet massa iaculis maximus nec in turpis. Morbi tempus arcu id urna bibendum elementum. Vestibulum eget orci a nibh blandit feugiat a in libero. Sed feugiat risus eu dolor hendrerit tincidunt. Suspendisse vel mi eu arcu mollis tristique. Nam rutrum velit turpis, vel feugiat mi tincidunt eget. Pellentesque sit amet leo at nisi vestibulum blandit."
    }

    res.json(annotation)
  }

  public readonly create = async (req: Request, res: Response) => {
    const annotation = req.body as CreateAnnotationDTO

    "// TODO:  definir el formato de error."
    try {
      await createAnnotationSchema.validateAsync(annotation)
    } catch (error) {
      res.status(400).json({
        message: error.message
      })
      return
    }

    res.json({
      id: 6,
      ...annotation
    })
  }

  public readonly update = async (req: Request, res: Response) => {
    "// TODO:  Validar que id pertenece a un teacher."
    const { id } = req.params

    const annotation = req.body as UpdateAnnotationDTO

    "// TODO:  definir el formato de error."
    try {
      await updateAnnotationSchema.validateAsync(annotation)
    } catch (error) {
      res.status(400).json({
        message: error.message
      })

      return
    }

    console.log('Editar', id, annotation)
    res.sendStatus(204)
  }

  public readonly delete = async (req: Request, res: Response) => {
    "// TODO:  Validar que id pertenece a un teacher."
    const { id } = req.params

    console.log('Eliminar', id)
    res.sendStatus(204)
  }
}
