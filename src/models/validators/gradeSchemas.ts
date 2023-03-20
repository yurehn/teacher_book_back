import Joi from "joi"
import { CreateGradeDTO, UpdateGradeDTO } from "../dto/GradeDTO"


export const createGradeSchema: Joi.ObjectSchema<CreateGradeDTO> = Joi.object().keys({
  grade: Joi.string().required(),
  head_teacherId: Joi.number().required()
})

export const updateGradeSchema: Joi.ObjectSchema<UpdateGradeDTO> = Joi.object().keys({
  grade: Joi.string().required(),
  head_teacherId: Joi.number().required()
})
