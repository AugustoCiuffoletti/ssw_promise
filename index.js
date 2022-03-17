import "./style.css";

const appDiv = document.getElementById("app");
const outDiv = document.getElementById("output");
appDiv.innerHTML = `<h1>Un esempio di <i>promise<i></h1>`;
function sleep(ms, txt) {
  return new Promise( resolve => { setTimeout(() => resolve(txt), ms)); } ;
}
function resolve1(txt) {
  outDiv.innerHTML += txt;
}

sleep(3000, "Fine attesa <br>").then(resolve1);
sleep(3000, "Fine attesa <br>").then((txt) => console.log(txt));
new Promise(resolve =>)
