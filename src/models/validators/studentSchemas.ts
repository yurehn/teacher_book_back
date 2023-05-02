import Joi from "joi"
import { CreateStudentDTO, UpdateStudentDTO } from "../dto/StudentDTO"
import { Gender } from "../../../enums/types"
import { rutRegex } from "../../../utils/rutValidation"


"// TODO:  agregar regex, a name y last_name, para que solo acepte letras."

export const createStudentSchema: Joi.ObjectSchema<CreateStudentDTO> = Joi.object().keys({
  rut: Joi.string().regex(rutRegex, { name: 'rut' }).required(),
  name: Joi.string().max(20).required(),
  last_name: Joi.string().max(20).required(),
  date_of_bird: Joi.date().required(),
  gender: Joi.string().valid(Gender.Male, Gender.Female).required(),
  id_grade: Joi.number().required()
})

export const updateStudentSchema: Joi.ObjectSchema<UpdateStudentDTO> = Joi.object().keys({
  rut: Joi.string().regex(rutRegex, { name: 'rut' }),
  name: Joi.string().max(20),
  last_name: Joi.string().max(20),
  date_of_bird: Joi.date(),
  gender: Joi.string().valid(Gender.Male, Gender.Female),
  id_grade: Joi.number(),
})
