import Joi from "joi"
import { CreateBlockDTO, UpdateBlockDTO } from "../dto/BlockDTO"


export const createBlockSchema: Joi.ObjectSchema<CreateBlockDTO> = Joi.object().keys({
  id_teacher: Joi.number().required(),
  id_subject: Joi.number().required(),
  id_time_block: Joi.number().required(),
  id_week_day: Joi.number().required()
})

export const updateBlockSchema: Joi.ObjectSchema<UpdateBlockDTO> = Joi.object().keys({
  id_teacher: Joi.number(),
  id_subject: Joi.number(),
  id_time_block: Joi.number(),
  id_week_day: Joi.number()
})
