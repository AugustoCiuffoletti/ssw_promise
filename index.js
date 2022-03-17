import "./style.css";
const appDiv = document.getElementById("app");
const outDiv = document.getElementById("output");
appDiv.innerHTML = `<h1>Un esempio di <i>promise<i></h1>`;
// Una funzione che restituisce una promise che si risolve dopo
// un intervallo di tempo definito
function sleep(ms) {
  return new Promise( resolve => setTimeout(() => resolve(), ms) ) ;
}
// Prima variazione: funzione resolve esplicita
function resolve1() {
  outDiv.innerHTML += "Resolve esplicita";
}
sleep(3000).then(resolve1);
// Seconda variazione: funzione resolve anonima (definita arrow)
sleep(3000)
  .then(() => console.log("Resolve anonima"));
// Terza variazione: promise e resolve entrambe anonime
new Promise(resolve => setTimeout(() => resolve(), 3000))
  .then(() => console.log("Promise anonima")); 
