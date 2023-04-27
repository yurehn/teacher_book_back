interface BaseGradeDTO {
  id?: number;
  grade: string;
}

export interface GradeDTO extends BaseGradeDTO {
  id: number;
}

export interface CreateGradeDTO extends BaseGradeDTO { }

export interface UpdateGradeDTO extends Partial<BaseGradeDTO> { }
