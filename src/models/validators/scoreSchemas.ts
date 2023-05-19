import Joi from "joi";
import { CreateScoreDTO, UpdateScoreDTO } from "../dto/ScoreDTO";


export const createScoreSchema: Joi.ObjectSchema<CreateScoreDTO> = Joi.object().keys({
  student_id: Joi.number().required(),
  teacher_id: Joi.number().required(),
  subject_id: Joi.number().required(),
  scoreValue_id: Joi.number().required(),
  title_mark: Joi.string().max(80).required(),
  date_creation: Joi.date().required()
})

export const updateScoreSchema: Joi.ObjectSchema<UpdateScoreDTO> = Joi.object().keys({
  student_id: Joi.number(),
  teacher_id: Joi.number(),
  subject_id: Joi.number(),
  scoreValue_id: Joi.number(),
  title_mark: Joi.string().max(80),
  date_creation: Joi.date()
})
