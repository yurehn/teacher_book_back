import Joi from "joi"
import { CreateStudentDTO, UpdateStudentDTO } from "../dto/StudentDTO"


"// TODO:  agregar regex, a name y last_name, para que solo acepte letras."
export const createStudentSchema: Joi.ObjectSchema<CreateStudentDTO> = Joi.object().keys({
  name: Joi.string().max(20).required(),
  last_name: Joi.string().max(20).required(),
  date_of_bird: Joi.date().required(),
  gradeId: Joi.number().required(),
  gender: Joi.string().valid('male', 'female').required()
})

export const updateStudentSchema: Joi.ObjectSchema<UpdateStudentDTO> = Joi.object().keys({
  name: Joi.string().max(20),
  last_name: Joi.string().max(20),
  date_of_bird: Joi.date(),
  gradeId: Joi.number(),
  gender: Joi.string().valid('male', 'female')
})
