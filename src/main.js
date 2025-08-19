console.log("main.js 0.1");
import { japaneseCharacters, kanjiCharacters } from './database.js';
//console.log(fnOne);
//console.log(japaneseCharacters);
const homeSection = document.getElementById('home');
const sectionOne = document.getElementById('sectionOne');
homeSection.addEventListener('click', () => {
  console.log('homeSection clicked');
});
sectionOne.addEventListener('click', () => {
  console.log('sectionOne clicked');
});