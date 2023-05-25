import Joi from "joi";

// TODO: hacer que devuelva el mensaje "The credentials provided are not valid."

export const loginSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().min(15).required()
})

export const registerSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().min(15).required()
})
