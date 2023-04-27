import Joi from "joi";
import { CreateTeacherDTO, UpdateTeacherDTO } from "../dto/TeacherDTO";
import { Gender } from "../../../enums/types";
import { rutRegex } from "../../../utils/rutValidation";


("// TODO:  agregar regex, a name y last_name, para que solo acepte letras.");
export const createTeacherSchema: Joi.ObjectSchema<CreateTeacherDTO> = Joi.object().keys({
  name: Joi.string().max(20).required(),
  last_name: Joi.string().max(20).required(),
  date_of_bird: Joi.date().required(),
  gender: Joi.string().valid(Gender.Male, Gender.Female).required(),
  rut: Joi.string().regex(rutRegex, { name: "rut" }).required(),
});

export const updateTeacherSchema: Joi.ObjectSchema<UpdateTeacherDTO> = Joi.object().keys({
  name: Joi.string().max(20),
  last_name: Joi.string().max(20),
  date_of_bird: Joi.date(),
  gender: Joi.string().valid(Gender.Male, Gender.Female).required(),
  rut: Joi.string().regex(rutRegex, { name: "rut" }),
});
