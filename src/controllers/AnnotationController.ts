import { Request, Response } from "express";
import {
  ObservationDTO,
  CreateObservationDTO,
  UpdateObservationDTO,
} from "../models/dto/ObservationDTO";
import {
  createAnnotationSchema,
  updateAnnotationSchema,
} from "../models/validators/annotationSchemas";
import ObservationRepository from "../models/repositories/ObervationRepository";
import { tryCatch } from "../../utils/tryCatch";
import { appError } from "../../middleware/errorHandler";

export default class AnnotationController {
  public readonly getAll = tryCatch(async (_req: Request, res: Response) => {
    const repository = new ObservationRepository();
    const annotation: ObservationDTO[] = await repository.findAll();
    res.json(annotation);
  });

  public readonly getById = tryCatch(async (req: Request, res: Response) => {
    const { id } = req.params;
    const repository = new ObservationRepository();
    const annotation = await repository.findById(parseInt(id));

    if (!annotation) {
      throw new appError(404, "Annotation not found");
    }

    res.json(annotation);
  });

  public readonly create = tryCatch(async (req: Request, res: Response) => {
    const annotation = req.body as CreateObservationDTO;

    await createAnnotationSchema.validateAsync(annotation);

    const repository = new ObservationRepository();
    const newAnnotation = await repository.create(annotation);
    res.json(newAnnotation);
  });

  public readonly update = tryCatch(async (req: Request, res: Response) => {
    const { id } = req.params;
    const annotation = req.body as UpdateObservationDTO;

    await updateAnnotationSchema.validateAsync(annotation);

    const repository = new ObservationRepository();
    await repository.update(parseInt(id), annotation);
    res.sendStatus(204);
  });

  public readonly delete = tryCatch(async (req: Request, res: Response) => {
    const { id } = req.params;

    const repository = new ObservationRepository();
    await repository.delete(parseInt(id));
    res.sendStatus(204);
  });
}
