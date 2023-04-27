interface BaseBlock_GradeDTO {
  id?: number;
  id_time_block: number;
  id_grade: number;
}

export interface Block_GradeDTO extends BaseBlock_GradeDTO {
  id: number;
}

export interface CreateBlock_GradeDTO extends BaseBlock_GradeDTO { }

export interface UpdateBlock_GradeDTO extends Partial<BaseBlock_GradeDTO> { }
