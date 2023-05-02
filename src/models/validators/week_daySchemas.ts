import Joi from "joi"
import { CreateWeek_DayDTO, UpdateWeek_DayDTO } from "../dto/Week_DayDTO"


export const createWeek_DaySchema: Joi.ObjectSchema<CreateWeek_DayDTO> = Joi.object().keys({
    week_day: Joi.string().max(9).required()
})

export const updateWeek_DaySchema: Joi.ObjectSchema<UpdateWeek_DayDTO> = Joi.object().keys({
    week_day: Joi.string().max(9)
})
