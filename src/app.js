/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = ()  =>  {

let sym = Math.floor(Math.random() *4) ;
let symbol = ['spade','heart','club','diamond']
document.querySelector('.card').classList.add(symbol[sym]);



  let numb = Math.floor(Math.random() *12) ;
  let number = ["A","2","3","4","5","6","7","8","9","10","J","K","Q"];
 
  document.querySelector('.card').innerHTML = (number[numb]);

}

