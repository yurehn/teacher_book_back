import Joi from "joi"
import { CreateSubject_TeacherDTO, UpdateSubject_TeacherDTO } from "../dto/Subject_TeacherDTO"


export const createSubject_TeacherSchema: Joi.ObjectSchema<CreateSubject_TeacherDTO> = Joi.object().keys({
  id_subject: Joi.number().required(),
  id_teacher: Joi.number().required()
})

export const updateSubject_TeacherSchema: Joi.ObjectSchema<UpdateSubject_TeacherDTO> = Joi.object().keys({
  id_subject: Joi.number(),
  id_teacher: Joi.number()
})
