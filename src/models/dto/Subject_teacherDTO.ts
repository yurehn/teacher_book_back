interface BaseSubject_TeacherDTO {
  id?: number;
  id_subject: number;
  id_teacher: number;
}

export interface Subject_TeacherDTO extends BaseSubject_TeacherDTO {
  id: number;
}

export interface CreateSubject_TeacherDTO extends BaseSubject_TeacherDTO { }

export interface UpdateSubject_TeacherDTO extends Partial<BaseSubject_TeacherDTO> { }
