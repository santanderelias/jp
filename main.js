console.log("main.js loaded");
import { fnOne } from './database';
document.getElementById('nav').addEventListener('click', () => {
  fnOne();
});