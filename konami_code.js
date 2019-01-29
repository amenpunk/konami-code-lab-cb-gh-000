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
  //console.log(event.key);
  key = event.key;
  if(key === code[index]){
    index++
    if(index === code.lenght){
      alert("MSG")
    }else{
      index = 0;
    }
  }


  },false);







}
