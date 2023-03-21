interface BaseSubjectDTO {
  id?: number;
  subject: string;
}
  
export interface SubjectDTO extends BaseSubjectDTO {
  id: number;
}

export interface CreateSubjectDTO extends BaseSubjectDTO { }

export interface UpdateSubjectDTO extends Partial<BaseSubjectDTO> { }
  