import './scss/main.scss';
import './navbar';
import './on-scroll-animations';
import EncounterData from './EncounterData';
import numberWithCommas from './numberWithCommas';

const playersInput = document.querySelector('#players');
const levelInput = document.querySelector('#level');
const enemiesInput = document.querySelector('#enemies');
const outputs = {
  easy: document.querySelector('#easy'),
  medium: document.querySelector('#medium'),
  hard: document.querySelector('#hard'),
  deadly: document.querySelector('#deadly')
};
const budgets = {}

function updateOutput() {
  let players = parseInt(playersInput.value);
  let level = parseInt(levelInput.value);
  let enemies = parseInt(enemiesInput.value);
  if (level >= 1 && level <= 20) {
    EncounterData.difficulties.forEach(diff => {
      let threshold = EncounterData.thresholds[level - 1][diff];
      let multiplier = EncounterData.multiplier(enemies);
      let budget = threshold * players / multiplier;
      outputs[diff].innerHTML = numberWithCommas(budget);
    });
  }
}

updateOutput();

playersInput.addEventListener('input', updateOutput);
levelInput.addEventListener('input', updateOutput);
enemiesInput.addEventListener('input', updateOutput);
