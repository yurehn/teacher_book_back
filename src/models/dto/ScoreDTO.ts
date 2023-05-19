interface BaseScoreDTO {
  id?: number;
  student_id: number;
  teacher_id: number;
  subject_id: number;
  scoreValue_id: number;
  title_mark: string;
  date_creation: Date;
}

export interface ScoreDTO extends BaseScoreDTO {
  id: number;
}

export interface CreateScoreDTO extends BaseScoreDTO { }

export interface UpdateScoreDTO extends Partial<BaseScoreDTO> { }
