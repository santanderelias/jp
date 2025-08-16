console.log("main.js loaded");
import { fnOne, japaneseCharacters } from './database.js';
console.log(fnOne);
console.log(japaneseCharacters);
document.getElementById('navbar').addEventListener('click', () => {
  console.log(japaneseCharacters);
});