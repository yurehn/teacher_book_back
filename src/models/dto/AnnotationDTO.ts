interface BaseAnnotationDTO {
  id?: number;
  teacherId: number;
  type: string;
  description: string;
}

export interface AnnotationDTO extends BaseAnnotationDTO {
  id: number;
}

export interface CreateAnnotationDTO extends BaseAnnotationDTO { }

export interface UpdateAnnotationDTO extends Partial<BaseAnnotationDTO> { }
