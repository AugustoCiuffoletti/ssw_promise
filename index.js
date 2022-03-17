import "./style.css";

const appDiv = document.getElementById("app");
const outDiv = document.getElementById("output");
appDiv.innerHTML = `<h1>Un esempio di <i>promise<i></h1>`;
function sleep(ms, txt) {
  return new Promise( resolve => {
    setTimeout(() => resolve(txt), ms);
  });
}
function resolve1(txt) {
  outDiv.innerHTML += txt;
}
function resolve2(txt) {
  console.log(txt);
}

sleep(3000, "Fine attesa <br>").then((txt) => resolve1(txt));
sleep(3000, "Fine attesa <br>").then((txt) => resolve2(txt));
