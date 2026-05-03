export interface CurriculumLecture {
  id: number;
  name?: string;
  media_duration: number;
}

export interface CurriculumSection {
  id: number;
  name: string;
  lectures: CurriculumLecture[];
}
