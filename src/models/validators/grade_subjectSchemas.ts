import Joi from "joi"
import { CreateGrade_subjectDTO, UpdateGrade_subjectDTO } from "../dto/Grade_subjectDTO"


export const createGrade_subjectSchema: Joi.ObjectSchema<CreateGrade_subjectDTO> = Joi.object().keys({
  gradeId: Joi.number().required(),
  subjectId: Joi.number().required()
})

export const updateGrade_subjectSchema: Joi.ObjectSchema<UpdateGrade_subjectDTO> = Joi.object().keys({
  gradeId: Joi.number(),
  subjectId: Joi.number()
})
