const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

const comp = [];

function init() {
  const body = document.querySelector('body');
  body.addEventListener("keydown", function (event) {
  console.log(event.key);
  key = event.key;
  },false);







}
