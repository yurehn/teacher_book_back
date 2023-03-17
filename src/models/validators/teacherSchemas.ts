import Joi from "joi"
import { CreateTeacherDTO, UpdateTeacherDTO } from "../dto/TeacherDTO"


"// TODO:  agregar regex, a name y last_name, para que solo acepte letras."
export const createTeacherSchema: Joi.ObjectSchema<CreateTeacherDTO> = Joi.object().keys({
  name: Joi.string().max(20).required(),
  last_name: Joi.string().max(20).required(),
  date_of_bird: Joi.date().required()
})

export const updateTeacherSchema: Joi.ObjectSchema<UpdateTeacherDTO> = Joi.object().keys({
  name: Joi.string().max(20, 'utf8'),
  last_name: Joi.string().max(20),
  date_of_bird: Joi.date()
})
