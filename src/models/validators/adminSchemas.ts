import Joi from "joi"
import { CreateAdminDTO, UpdateAdminDTO } from "../dto/AdminDTO"


"// TODO: definir minimo, maximo y caracteres (numeros, letras, mayusculas, caracteress especiales) que deben ir en password."
export const createAdminSchema: Joi.ObjectSchema<CreateAdminDTO> = Joi.object().keys({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com'] } }).required(),
  password: Joi.string().min(15).max(30).required()
})

export const updateAdminSchema: Joi.ObjectSchema<UpdateAdminDTO> = Joi.object().keys({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com'] } }),
  password: Joi.string().min(15).max(30)
})
