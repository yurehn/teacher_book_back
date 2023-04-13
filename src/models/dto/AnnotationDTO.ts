interface BaseAnnotationDTO {
  id?: number;
  teacherId: number;
  studentId: number;
  description: string;
  type_annotation: string;
  // date_creation?: Date;
}

export interface AnnotationDTO extends BaseAnnotationDTO {
  id: number;
  // date_creation: Date;
}

export interface CreateAnnotationDTO extends BaseAnnotationDTO { }

export interface UpdateAnnotationDTO extends Partial<BaseAnnotationDTO> { }
