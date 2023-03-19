import Joi from "joi"
import { CreateAnnotationDTO, UpdateAnnotationDTO } from "../dto/AnnotationDTO"


export const createAnnotationSchema: Joi.ObjectSchema<CreateAnnotationDTO> = Joi.object().keys({
  teacherId: Joi.number().required(),
  type: Joi.string().valid('positive', 'negative').required(),
  description: Joi.string().max(200).required()
})

export const updateAnnotationSchema: Joi.ObjectSchema<UpdateAnnotationDTO> = Joi.object().keys({
  teacherId: Joi.number().required(),
  type: Joi.string().valid('positive', 'negative').required(),
  description: Joi.string().max(200).required()
})
