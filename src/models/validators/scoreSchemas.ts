import Joi from "joi"
import { CreateScoreDTO, UpdateScoreDTO } from "../dto/ScoreDTO"


export const createScoreSchema: Joi.ObjectSchema<CreateScoreDTO> = Joi.object().keys({
  id_student: Joi.number().required(),
  id_teacher: Joi.number().required(),
  id_subject: Joi.number().required(),
  id_score_value: Joi.number().required(),
  title_mark: Joi.string().required(),
  date_creation: Joi.date().required()
})

export const updateScoreSchema: Joi.ObjectSchema<UpdateScoreDTO> = Joi.object().keys({
  id_student: Joi.number(),
  id_teacher: Joi.number(),
  id_subject: Joi.number(),
  id_score_value: Joi.number(),
  title_mark: Joi.string(),
  date_creation: Joi.date()
})
