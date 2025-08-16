console.log("main.js loaded");
import { fnOne } from './database.js';
console.log(fnOne);
document.getElementById('nav').addEventListener('click', () => {
  fnOne();
});