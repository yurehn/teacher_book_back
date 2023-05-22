import Joi from "joi";
import { CreateStudentDTO, UpdateStudentDTO } from "../dto/StudentDTO";
import { Gender } from "../../../enums/types";
import { rutRegex } from "../../../utils/rutValidation";
import { firstName_LastNameRegex } from "../../../utils/regex";


export const createStudentSchema: Joi.ObjectSchema<CreateStudentDTO> = Joi.object().keys({
  rut: Joi.string().regex(rutRegex, { name: 'rut' }).required(),
  first_name: Joi.string().regex(firstName_LastNameRegex, { name: "first_name" }).min(2).max(20).required(),
  last_name: Joi.string().regex(firstName_LastNameRegex, { name: "last_name" }).min(2).max(20).required(),
  gender: Joi.string().valid(Gender.Male, Gender.Female).required(),
  date_of_birth: Joi.date().required(),
  grade_id: Joi.number().required()
})

export const updateStudentSchema: Joi.ObjectSchema<UpdateStudentDTO> = Joi.object().keys({
  rut: Joi.string().regex(rutRegex, { name: 'rut' }),
  first_name: Joi.string().regex(firstName_LastNameRegex, { name: "first_name" }).min(2).max(20),
  last_name: Joi.string().regex(firstName_LastNameRegex, { name: "last_name" }).min(2).max(20),
  gender: Joi.string().valid(Gender.Male, Gender.Female),
  date_of_birth: Joi.date(),
  grade_id: Joi.number()
})
