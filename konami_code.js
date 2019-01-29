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

function onKeyDownHandler(e){
  const key = event.key;
  if(key === codes[index]){
    index++;
    console.log(index);
    if(index === codes.length){
      alert("Hurray!");
    }else{
      index = 0;
  }
}


function init() {
  const body = document.querySelector('body');
  body.addEventListener("keydown", function (event) {
    console.log(e.key)
    onKeyDownHandler(e);



  });







}
