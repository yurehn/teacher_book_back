import Joi from "joi"
import { CreateGradeDTO, UpdateGradeDTO } from "../dto/GradeDTO"


export const createGradeSchema: Joi.ObjectSchema<CreateGradeDTO> = Joi.object().keys({
  grade: Joi.string().max(25).required()
})

export const updateGradeSchema: Joi.ObjectSchema<UpdateGradeDTO> = Joi.object().keys({
  grade: Joi.string().max(25)
})
