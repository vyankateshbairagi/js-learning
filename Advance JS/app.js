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


function saveData(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10);
        if (internetSpeed > 4) {
            resolve(`Success with InternetSpeed of ${internetSpeed} mbps: ${data}  is saved`);
        } else {
            reject(`Failure with InternetSpeed of ${internetSpeed} mbps: ${data} not saved (Weak Connection)`);
        }

    });
}


saveData("vyankatesh")
    .then((res) => {
        console.log(res);
        return saveData("Gopaldas");
    })
    .then((res) => {
        console.log(res);
        return saveData("Bairagi");
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });


    


