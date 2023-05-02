import Joi from "joi"
import { CreateTime_BlockDTO, UpdateTime_BlockDTO } from "../dto/Time_BlockDTO"
import { timeRegex } from "../../../utils/regex";


export const createTime_BlockSchema: Joi.ObjectSchema<CreateTime_BlockDTO> = Joi.object().keys({
  start_time: Joi.string().regex(timeRegex, { name: "start_time" }).required(),
  end_time: Joi.string().regex(timeRegex, { name: "end_time" }).required()
})

export const updateTime_BlockSchema: Joi.ObjectSchema<UpdateTime_BlockDTO> = Joi.object().keys({
  start_time: Joi.string().regex(timeRegex, { name: "start_time" }),
  end_time: Joi.string().regex(timeRegex, { name: "end_time" }),
})
