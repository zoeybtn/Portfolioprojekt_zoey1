export interface Exercise {
  name: string;
  image: string;
  description: string;
}

interface ExerciseList {
  leg: Exercise[];
  chest_push: Exercise[];
  chest_pull: Exercise[];
}