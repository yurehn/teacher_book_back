interface BaseScore_ValueDTO {
  id?: number;
  note: string;
}

export interface Score_ValueDTO extends BaseScore_ValueDTO {
  id: number;
}

export interface CreateScore_ValueDTO extends BaseScore_ValueDTO { }

export interface UpdateScore_ValueDTO extends Partial<BaseScore_ValueDTO> { }
