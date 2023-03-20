import Joi from "joi"
import { CreateSubject_teacherDTO, UpdateSubject_teacherDTO } from "../dto/Subject_teacherDTO"


export const createSubject_teacherSchema: Joi.ObjectSchema<CreateSubject_teacherDTO> = Joi.object().keys({
  subjectId: Joi.number().required(),
  teacherId: Joi.number().required()
})

export const updateSubject_teacherSchema: Joi.ObjectSchema<UpdateSubject_teacherDTO> = Joi.object().keys({
  subjectId: Joi.number().required(),
  teacherId: Joi.number().required()
})
