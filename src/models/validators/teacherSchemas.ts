import Joi from "joi";
import { CreateTeacherDTO, UpdateTeacherDTO } from "../dto/TeacherDTO";
import { Gender } from "../../../enums/types";
import { rutRegex } from "../../../utils/rutValidation";
import { firstName_LastNameRegex } from "../../../utils/regex";


export const createTeacherSchema: Joi.ObjectSchema<CreateTeacherDTO> = Joi.object().keys({
  rut: Joi.string().regex(rutRegex, { name: "rut" }).required(),
  first_name: Joi.string().regex(firstName_LastNameRegex, { name: "first_name" }).min(2).max(20).required(),
  last_name: Joi.string().regex(firstName_LastNameRegex, { name: "last_name" }).min(2).max(20).required(),
  gender: Joi.string().valid(Gender.Male, Gender.Female).required(),
  date_of_birth: Joi.date().required(),
  profile_image: Joi.string().uri(),
  credential_id: Joi.number().required()
});

export const updateTeacherSchema: Joi.ObjectSchema<UpdateTeacherDTO> = Joi.object().keys({
  rut: Joi.string().regex(rutRegex, { name: "rut" }),
  first_name: Joi.string().regex(firstName_LastNameRegex, { name: "first_name" }).min(2).max(20),
  last_name: Joi.string().regex(firstName_LastNameRegex, { name: "last_name" }).min(2).max(20),
  gender: Joi.string().valid(Gender.Male, Gender.Female),
  date_of_birth: Joi.date(),
  profile_image: Joi.string().uri()
});
