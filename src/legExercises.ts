import exercisesList from "./data/exercises.ts";
import "./styles/exercises.css";

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

const typedExercisesList: ExerciseList = exercisesList;

const getRandomExercises = (exercise: "leg" | "chest_pull" | "chest_push") => {
  if (typedExercisesList[exercise].length < 6) {
    return typedExercisesList[exercise];
  }
  const randomObjects = [];
  const shuffledArray = typedExercisesList[exercise].slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  for (let i = 0; i < 6; i++) {
    randomObjects.push(shuffledArray[i]);
  }

  return randomObjects;
};

let div = document.getElementById("exercises");

if (div) {
  div.innerHTML = getRandomExercises("leg")
    .map((exercise) => {
      return `<div class="card"><img src="${exercise.image}" alt="${exercise.name}" />
      <h1>${exercise.name}</h1><p>${exercise.description}</p></div>`;
    })
    .join("<br>");
}