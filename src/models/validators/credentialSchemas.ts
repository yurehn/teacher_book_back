import Joi from "joi"
import { CreateCredentialDTO, UpdateCredentialDTO } from "../dto/CredentialDTO"


"// TODO: definir minimo, maximo y caracteres (numeros, letras, mayusculas, caracteress especiales) que deben ir en password."
export const createCredentialSchema: Joi.ObjectSchema<CreateCredentialDTO> = Joi.object().keys({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com'] } }).required(),
  password: Joi.string().min(15).max(30).required()
})

export const updateCredentialSchema: Joi.ObjectSchema<UpdateCredentialDTO> = Joi.object().keys({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com'] } }),
  password: Joi.string().min(15).max(30)
})
