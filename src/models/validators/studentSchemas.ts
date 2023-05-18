import Joi from "joi";
import { CreateStudentDTO, UpdateStudentDTO } from "../dto/StudentDTO";
import { Gender } from "../../../enums/types";
import { rutRegex } from "../../../utils/rutValidation";
import { name_LastNameRegex } from "../../../utils/regex";


export const createStudentSchema: Joi.ObjectSchema<CreateStudentDTO> = Joi.object().keys({
  rut: Joi.string().regex(rutRegex, { name: 'rut' }).required(),
  name: Joi.string().regex(name_LastNameRegex, { name: "name" }).min(2).max(20).required(),
  last_name: Joi.string().regex(name_LastNameRegex, { name: "last_name" }).min(2).max(20).required(),
  gender: Joi.string().valid(Gender.Male, Gender.Female).required(),
  date_of_bird: Joi.date().required()
})

export const updateStudentSchema: Joi.ObjectSchema<UpdateStudentDTO> = Joi.object().keys({
  rut: Joi.string().regex(rutRegex, { name: 'rut' }),
  name: Joi.string().regex(name_LastNameRegex, { name: "name" }).min(2).max(20),
  last_name: Joi.string().regex(name_LastNameRegex, { name: "last_name" }).min(2).max(20),
  gender: Joi.string().valid(Gender.Male, Gender.Female),
  date_of_bird: Joi.date()
})
