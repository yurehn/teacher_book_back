import Joi from "joi"
import { CreateBlock_GradeDTO, UpdateBlock_GradeDTO } from "../dto/Block_GradeDTO"


export const createBlock_GradeSchema: Joi.ObjectSchema<CreateBlock_GradeDTO> = Joi.object().keys({
  id_block: Joi.number().required(),
  id_grade: Joi.number().required()
})

export const updateBlock_GradeSchema: Joi.ObjectSchema<UpdateBlock_GradeDTO> = Joi.object().keys({
  id_block: Joi.number(),
  id_grade: Joi.number()
})
