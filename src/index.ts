import './styles/styles.css';
import { chestPull, chestPush, leg, resultEl } from './dom-utils.ts';
import  { Exercise } from './Interface.ts';
import {exerciseList} from './data/exercises.ts';

chestPull.addEventListener('click', function (){
    const result = shuffleArray(exerciseList.chest_pull)
    createDivResult(result);
});

chestPush.addEventListener('click', function (){
    const result = shuffleArray(exerciseList.chest_push)
    createDivResult(result);
});

leg.addEventListener('click', function (){
    const result = shuffleArray(exerciseList.leg)
    createDivResult(result);
});

function shuffleArray(arr: Exercise[]) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr.slice(0,6);
}

function createDivResult(results: Exercise[]) {
    resultEl.innerHTML = "";

    results.forEach((result: Exercise) => {
        const div = document.createElement('div');
        div.innerHTML = `
                    <img src="${result.image}" alt="${result.name}" />
                    <h1>${result.name}</h1><br>
                    <p>${result.description}</p>
                `;
        div.classList.add("card");
        resultEl.appendChild(div);
    });
}