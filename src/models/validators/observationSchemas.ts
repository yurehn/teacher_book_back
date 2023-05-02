import Joi from "joi"
import { CreateObservationDTO, UpdateObservationDTO } from "../dto/ObservationDTO"
import { TypeObservation } from "../../../enums/types"


export const createAnnotationSchema: Joi.ObjectSchema<CreateObservationDTO> = Joi.object().keys({
  id_teacher: Joi.number().required(),
  id_student: Joi.number().required(),
  type_annotation: Joi.string().valid(TypeObservation.Positive, TypeObservation.Negative).required(),
  description: Joi.string().max(200).required(),
  date_creation: Joi.date().required()
})

export const updateAnnotationSchema: Joi.ObjectSchema<UpdateObservationDTO> = Joi.object().keys({
  id_teacher: Joi.number(),
  id_student: Joi.number(),
  type_annotation: Joi.string().valid(TypeObservation.Positive, TypeObservation.Negative),
  description: Joi.string().max(200),
  date_creation: Joi.date()
})
