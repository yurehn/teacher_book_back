import Joi from "joi";


export const loginSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().min(15).required()
})

export const registerSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().min(15).required()
})
