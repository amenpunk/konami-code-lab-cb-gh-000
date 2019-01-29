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

let index = 0;

function init() {
  const body = document.querySelector('body');
  body.addEventListener("keydown", function (event) {
  console.log(event.key);
  const key = event.key;
  if(key === codes[index]){
    index++
    if(index === codes.lenght){
      alert("MSG");
    }else{
      index = 0;
    }
  }


  },false);







}
