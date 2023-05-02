import Joi from "joi"
import { CreateScore_ValueDTO, UpdateScore_ValueDTO } from "../dto/Score_ValueDTO"


export const createScore_ValueSchema: Joi.ObjectSchema<CreateScore_ValueDTO> = Joi.object().keys({
  note: Joi.string().max(3).required()
})

export const updateScore_ValueSchema: Joi.ObjectSchema<UpdateScore_ValueDTO> = Joi.object().keys({
  note: Joi.string().max(3)
})
