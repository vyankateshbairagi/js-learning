// get all ul elements
let fruits = document.querySelectorAll("ul");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i].innerText);
}

//document.querySelector("p").innerHTML="<b>Upadated</b> by javascript";

//get img src

let img = document.querySelector("img");
img.getAttribute("src");
console.log(img);

//set img src
img.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
);
img.style.width = "300px";
img.style.height = "auto";
img.style.borderRadius = "10px";

//change  href link
document
  .querySelector("a")
  .setAttribute("href", "https://vyankateshbairagi.netlify.app/");
document.querySelector("a").innerText = "This is my portfolio website";

// add tiitle attribute to div
let div = document.createElement("div");
div.innerText = "This is a div";
document.body.append(div);
div.setAttribute("title", "import info it is");

//remove attribute
div.removeAttribute("title");

//remove element
document.body.removeChild(div);

//create new list items <li> new task </li> and add to ul at the end
let ull = document.createElement("ul");
ull.innerHTML =
  "Group of task <li>add some feature</li> <li>add info feature</li><li>add login feature</li><li> new task </li> ";
document.body.append(ull);

//create new img element and add to body at the start
let img2 = document.createElement("img");
img2.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5"
);
img2.classList.add("placeholder");
document.body.prepend(img2);

//select first item form ull list and delete it from dom
let firstItem = ull.querySelector("li");
if (firstItem) {
  ull.removeChild(firstItem);
}

//change background color  of element
ull.style.backgroundColor = "cyan";

//highlight even li elements by adding a yellow background color
let li = document.querySelectorAll("ul li:nth-child(2n)");
li.forEach(function (val) {
  val.classList.add("highlight");
});
