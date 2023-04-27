interface BaseWeek_DayDTO {
  id?: number;
  week_day: string;
}

export interface Week_DayDTO extends BaseWeek_DayDTO {
  id: number;
}

export interface CreateWeek_DayDTO extends BaseWeek_DayDTO { }

export interface UpdateWeek_DayDTO extends Partial<BaseWeek_DayDTO> { }
