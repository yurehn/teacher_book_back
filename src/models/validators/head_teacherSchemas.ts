import Joi from "joi"
import { CreateHead_TeacherDTO, UpdateHead_TeacherDTO } from "../dto/Head_TeacherDTO"


export const createHead_TeacherSchema: Joi.ObjectSchema<CreateHead_TeacherDTO> = Joi.object().keys({
  id_teacher: Joi.number().required(),
  id_grade: Joi.number().required()
})

export const updateHead_TeacherSchema: Joi.ObjectSchema<UpdateHead_TeacherDTO> = Joi.object().keys({
  id_teacher: Joi.number(),
  id_grade: Joi.number()
})
