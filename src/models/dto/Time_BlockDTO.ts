interface BaseTime_BlockDTO {
  id?: number;
  start_time: Date;
  end_time: Date;
}

export interface Time_BlockDTO extends BaseTime_BlockDTO {
  id: number;
}

export interface CreateTime_BlockDTO extends BaseTime_BlockDTO { }

export interface UpdateTime_BlockDTO extends Partial<BaseTime_BlockDTO> { }
