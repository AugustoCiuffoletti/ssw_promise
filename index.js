import "./style.css";

const appDiv = document.getElementById("app");
const outDiv = document.getElementById("output");
appDiv.innerHTML = `<h1>Un esempio di <i>promise<i></h1>`;
function sleep(ms) {
  return new Promise( resolve => setTimeout(() => resolve(), ms) ) ;
}
function resolve1() {
  outDiv.innerHTML += "Resolve esplicita";
}

sleep(3000, "Fine attesa <br>").then(resolve1);
sleep(3000, "Fine attesa <br>").then(() => console.log("Resolve anonima"));
new Promise(resolve => setTimeout(() => resolve(), 3000)).then(() => console.log("Promise anonima")); 
