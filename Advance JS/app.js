let h1 = document.querySelector("h1");


// setTimeout(()=>{
//     h1.style.color= "red";
// },1000);

// setTimeout(()=>{
//     h1.style.color= "cyan";
// },2000);

// setTimeout(()=>{
//     h1.style.color= "green";
// },3000);

// setTimeout(()=>{
//     h1.style.color= "orange";
// },4000);




// using callback 


function changeColor(color,delay){
    setTimeout(()=>{
        h1.style.color=color;
    }, delay);
}

changeColor("blue",1000);
changeColor("red",2000);
changeColor("yellow",3000);
changeColor("cyan",4000);
changeColor("pink",5000);
changeColor("blue",6000);

