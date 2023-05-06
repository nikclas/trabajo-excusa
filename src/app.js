let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function excuseGenerator(qui, act, que, cuand) {
  numQuien = Math.floor(Math.random() * qui.length);
  numAct = Math.floor(Math.random() * act.length);
  numQue = Math.floor(Math.random() * que.length);
  numCuando = Math.floor(Math.random() * cuand.length);
  return (
    qui[numQuien] +
    " " +
    act[numAct] +
    " " +
    que[numQue] +
    " " +
    cuand[numCuando]
  );
}
function onLoad() {
  var excuse = document.getElementById("excuse");
  excuse.innerHTML = excuseGenerator(who, action, what, when);
}
window.onload = onLoad;
