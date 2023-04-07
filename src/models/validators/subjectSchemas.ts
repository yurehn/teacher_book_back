import Joi from "joi"
import { CreateSubjectDTO, UpdateSubjectDTO } from "../dto/SubjectDTO"


export const createSubjectSchema: Joi.ObjectSchema<CreateSubjectDTO> = Joi.object().keys({
  subject: Joi.string().max(60).required()
})

export const updateSubjectSchema: Joi.ObjectSchema<UpdateSubjectDTO> = Joi.object().keys({
  subject: Joi.string().max(60)
})
