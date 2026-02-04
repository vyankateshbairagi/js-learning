let h1 = document.querySelector("h1");


// normal

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


function changeColor(color, delay) {
    setTimeout(() => {
        h1.style.color = color;
    }, delay);
}

changeColor("blue", 1000);
changeColor("red", 2000);
changeColor("yellow", 3000);
changeColor("cyan", 4000);
changeColor("pink", 5000);
changeColor("blue", 6000);


// promises chaining ..........


function saveData(Data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10);
        if (internetSpeed > 4) {
            resolve("Success : Data is saved");
        }else{
            reject("Failure: Weak Connection");
        }
    });
}

saveData("vyankatesh");


