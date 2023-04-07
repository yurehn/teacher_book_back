import { Request, Response } from "express"
import { AnnotationDTO, CreateAnnotationDTO, UpdateAnnotationDTO } from "../models/dto/AnnotationDTO"
import { createAnnotationSchema, updateAnnotationSchema } from "../models/validators/annotationSchemas"
import AnnotationRepository from "../models/repositories/AnnotationRepository"


export default class AnnotationController {

  public readonly getAll = async (_req: Request, res: Response) => {
    const repository = new AnnotationRepository()
    const annotation: AnnotationDTO[] = await repository.findAll()
    res.json(annotation)
  }

  public readonly getById = async (req: Request, res: Response) => {
    const { id } = req.params
    const repository = new AnnotationRepository()
    const annotation = await repository.findById(parseInt(id))

    if (!annotation) {
      res.status(404).json({
        message: "Annotation not found"
      })
      return
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

    const repository = new AnnotationRepository()
    const newAnnotation = await repository.create(annotation)

    res.json(newAnnotation)
  }

  public readonly update = async (req: Request, res: Response) => {
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

    const repository = new AnnotationRepository()
    await repository.update(parseInt(id), annotation)
    res.sendStatus(204)
  }

  public readonly delete = async (req: Request, res: Response) => {
    const { id } = req.params

    const repository = new AnnotationRepository()
    await repository.delete(parseInt(id))
    res.sendStatus(204)
  }
}
