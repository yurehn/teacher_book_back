interface BaseGrade_subjectDTO {
  id?: number;
  gradeId: number;
  subjectId: number;
}

export interface Grade_subjectDTO extends BaseGrade_subjectDTO {
  id: number;
}

export interface CreateGrade_subjectDTO extends BaseGrade_subjectDTO { }

export interface UpdateGrade_subjectDTO extends Partial<BaseGrade_subjectDTO> {}
