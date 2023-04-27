interface BaseBlockDTO {
  id?: number;
  id_teacher: number;
  id_subject: number;
  id_time_block: number;
  id_week_day: number;
}

export interface BlockDTO extends BaseBlockDTO {
  id: number;
}

export interface CreateBlockDTO extends BaseBlockDTO { }

export interface UpdateBlockDTO extends Partial<BaseBlockDTO> { }
