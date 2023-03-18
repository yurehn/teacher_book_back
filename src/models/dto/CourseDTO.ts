interface BaseCourseDTO {
    id?: number
    name: string
}

export interface CourseDTO extends BaseCourseDTO {
    id: number
}

export interface CreateCourseDTO extends BaseCourseDTO {}

export interface UpdateCourseDTO extends Partial<BaseCourseDTO> {}
