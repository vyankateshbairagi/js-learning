
//click event
let h1 = document.querySelector("h1");
h1.addEventListener("click",()=>{
  console.log("clicked");
});

//remove event listener
let btn = document.querySelector("button");

function sayHi() {
  console.log("Hi");
}

btn.addEventListener("click", sayHi);
//btn.removeEventListener("click", sayHi);



//double click event
h1.addEventListener("dblclick",()=>{
    console.log("double clicked");
});

//mouse enter event
h1.addEventListener("mouseenter",()=>{
    console.log("mouse entered");
});

//mouse leave event
h1.addEventListener("mouseleave",()=>{
    console.log("mouse left");
});

//mouse over event
h1.addEventListener("mouseover",()=>{
    console.log("mouse over");
});

//load event
window.addEventListener("load",()=>{
    console.log("page loaded");
});


//scroll event
window.addEventListener("scroll",()=>{
    console.log("page scrolled");
}); 

//keydown event
window.addEventListener("keydown",(event)=>{
    console.log(`key ${event.key} pressed`);
});