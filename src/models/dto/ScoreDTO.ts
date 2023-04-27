interface BaseScoreDTO {
  id?: number;
  id_student: number;
  id_teacher: number;
  id_subject: number;
  id_score_values: number;
  title_mark: string;
  date_creation: Date;
}

export interface ScoreDTO extends BaseScoreDTO {
  id: number;
}

export interface CreateScoreDTO extends BaseScoreDTO { }

export interface UpdateScoreDTO extends Partial<BaseScoreDTO> { }
