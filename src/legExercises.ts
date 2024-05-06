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

const getRandomExercises = (exercise: "leg" | "chest_pull" | "chest_push") => shuffleArray(typedExercisesList[exercise]);

function shuffleArray(arr: Exercise[]) {
    for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    }
    return arr.slice(0,6);
    }

let div = document.getElementById("exercises");

if (div) {
  div.innerHTML = getRandomExercises("leg")
    .map((exercise) => {
      return `<div class="card"><img src="${exercise.image}" alt="${exercise.name}" />
      <h1>${exercise.name}</h1><p>${exercise.description}</p></div>`;
    })
    .join("<br>");
}