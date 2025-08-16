console.log("main.js loaded");
import { fnOne } from './src/database.js';
console.log(fnOne);
document.getElementById('nav').addEventListener('click', () => {
  fnOne();
});