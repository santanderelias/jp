console.log("main.js loaded");
import { fnOne, japaneseCharacters } from './database.js';
//console.log(fnOne);
//console.log(japaneseCharacters);
document.getElementById('toolbar').addEventListener('click', () => {
  console.log(japaneseCharacters);
});