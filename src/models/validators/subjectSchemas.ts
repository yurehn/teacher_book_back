import Joi from "joi"
import { CreateSubjectDTO, UpdateSubjectDTO } from "../dto/SubjectDTO"


"// TODO:  Corregir cuantos caracteres estan permitidos en subject (max())"
export const createSubjectSchema: Joi.ObjectSchema<CreateSubjectDTO> = Joi.object().keys({
  subject: Joi.string().max(50).required(),
  teacherId: Joi.number().required()
})

export const updateSubjectSchema: Joi.ObjectSchema<UpdateSubjectDTO> = Joi.object().keys({
  subject: Joi.string().max(50).required(),
  teacherId: Joi.number().required()
})
