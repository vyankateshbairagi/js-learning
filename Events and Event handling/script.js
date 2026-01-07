

let h1 = document.querySelector("h1");
// h1.addEventListener("click",()=>{
//     console.log("clicked");
// });




//remove event listener
let btn = document.querySelector("button");

function sayHi() {
  console.log("Hi");
}

btn.addEventListener("click", sayHi);
//btn.removeEventListener("click", sayHi);


h1.addEventListener("dblclick",()=>{
    console.log("double clicked");
});

