interface BaseSubject_teacherDTO {
  id?: number;
  subjectId: number;
  teacherId: number;
}

export interface Subject_teacherDTO extends BaseSubject_teacherDTO {
  id: number;
}

export interface CreateSubject_teacherDTO extends BaseSubject_teacherDTO { }

export interface UpdateSubject_teacherDTO extends Partial<BaseSubject_teacherDTO> { }
