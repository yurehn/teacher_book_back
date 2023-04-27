import Joi from "joi"
import { CreateAnnotationDTO, UpdateAnnotationDTO } from "../dto/AnnotationDTO"
import { TypeAnnotation } from "../../../enums/types"


export const createAnnotationSchema: Joi.ObjectSchema<CreateAnnotationDTO> = Joi.object().keys({
  teacherId: Joi.number().required(),
  studentId: Joi.number().required(),
  type_annotation: Joi.string().valid(TypeAnnotation.Positive, TypeAnnotation.Negative).required(),
  description: Joi.string().max(200).required()
})

export const updateAnnotationSchema: Joi.ObjectSchema<UpdateAnnotationDTO> = Joi.object().keys({
  teacherId: Joi.number(),
  studentId: Joi.number(),
  type_annotation: Joi.string().valid(TypeAnnotation.Positive, TypeAnnotation.Negative),
  description: Joi.string().max(200)
})
