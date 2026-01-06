
// get all ul elements
let fruits = document.querySelectorAll("ul");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i].innerText);
}




//document.querySelector("p").innerHTML="<b>Upadated</b> by javascript";


//get img src 

let img = document.querySelector("img");
// img.getAttribute("src");
// console.log(img);

//set img src
img.setAttribute("src", "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d");
img.style.width = "300px";
img.style.height = "auto";
img.style.borderRadius = "10px";


//change  href link 
document.querySelector("a").setAttribute("href", "https://vyankateshbairagi.netlify.app/")


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

let ul = document.createElement("ul");

ul.innerHTML = "Group of task <li>add some feature</li> <li>add info feature</li><li>add login feature</li><li> new task </li> ";
document.body.append(ul);
