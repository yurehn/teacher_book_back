import Joi from "joi";
import { CreateObservationDTO, UpdateObservationDTO } from "../dto/ObservationDTO";
import { TypeObservation } from "../../../enums/types";


export const createObservationSchema: Joi.ObjectSchema<CreateObservationDTO> = Joi.object().keys({
  teacher_id: Joi.number().required(),
  student_id: Joi.number().required(),
  type_observation: Joi.string().valid(TypeObservation.Positive, TypeObservation.Negative, TypeObservation.Observation).required(),
  description: Joi.string().max(200).required(),
  date_creation: Joi.date().required()
})

export const updateObservationSchema: Joi.ObjectSchema<UpdateObservationDTO> = Joi.object().keys({
  teacher_id: Joi.number(),
  student_id: Joi.number(),
  type_observation: Joi.string().valid(TypeObservation.Positive, TypeObservation.Negative, TypeObservation.Observation),
  description: Joi.string().max(200),
  date_creation: Joi.date()
})
