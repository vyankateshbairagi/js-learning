//event bubbling example
document.querySelector("#grandparent").addEventListener("click", () => {
    console.log("grandparent clicked");
});

document.querySelector("#parent").addEventListener("click", () => {
    console.log("parent clicked");
});

document.querySelector("#child").addEventListener("click", () => {
    console.log("child clicked");
});




// event bubbling with line through and toggle  this also eaxample of  event delegation
let ul = document.querySelector("ul");

ul.addEventListener("click", (obj) => {
    if (obj.target.tagName === "LI") {
        obj.target.classList.toggle("line-through");
    }
});




//event capturing example
document.querySelector("#grandparent-capture").addEventListener("click", () => {
    console.log("grandparent clicked");
}, true);

document.querySelector("#parent-capture").addEventListener("click", () => {
    console.log("parent clicked");
}, true);       

document.querySelector("#child-capture").addEventListener("click", () => {
    console.log("child clicked");
}, true);