export interface Exercise {
  name: string;
  image: string;
  description: string;
}

export interface ExerciseList {
  leg: Exercise[];
  chest_push: Exercise[];
  chest_pull: Exercise[];
}