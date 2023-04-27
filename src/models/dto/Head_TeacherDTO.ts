interface BaseHead_TeacherDTO {
	id?: number;
	id_teacher: number;
	id_garde: number;
}

export interface Head_TeacherDTO extends BaseHead_TeacherDTO {
	id: number;
}

export interface CreateHead_TeacherDTO extends BaseHead_TeacherDTO { }

export interface UpdateHead_TeacherDTO extends Partial<BaseHead_TeacherDTO> { }
