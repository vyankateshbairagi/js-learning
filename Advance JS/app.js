let h1 = document.querySelector("h1");


// normal.......................

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




// using callback ...............


// function changeColor(color, delay) {
//     setTimeout(() => {
//         h1.style.color = color;
//     }, delay);
// }

// changeColor("blue", 1000);
// changeColor("red", 2000);
// changeColor("yellow", 3000);
// changeColor("cyan", 4000);
// changeColor("pink", 5000);
// changeColor("blue", 6000);



//  color change using promise.......................

// function colorChange(color, delay) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve(`${color} color applied after ${delay} ms`);
        
//         }, delay);
//     });


// }

// colorChange("red", 1000)
//     .then((res) => {
//         console.log(res);
//         return colorChange("green", 2000);
//     })

//     .then((res) => {
//         console.log(res);
//         return colorChange("red", 3000);
//     })
//     .then((res) => {
//         console.log(res);
//         return colorChange("yellow", 4000);
//     })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);

//     })




// promises chaining ..........


// function saveData(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10);
//         if (internetSpeed > 4) {
//             resolve(`Success with InternetSpeed of ${internetSpeed} mbps: ${data}  is saved`);
//         } else {
//             reject(`Failure with InternetSpeed of ${internetSpeed} mbps: ${data} not saved (Weak Connection)`);
//         }

//     });
// }


// saveData("vyankatesh")
//     .then((res) => {
//         console.log(res);
//         return saveData("Gopaldas");
//     })
//     .then((res) => {
//         console.log(res);
//         return saveData("Bairagi");
//     })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });





//  color change using async and await    ................


function colorChange(color, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve();
            console.log(`${color} color applied after ${delay} ms`);
        
        }, delay);
    });


}


async function asignColor(){
   await colorChange("red",1000);
   await colorChange("yellow",1000);
   await colorChange("blue",1000);
   await colorChange("brown",1000);
   await colorChange("pink",1000);
   await colorChange("black",1000);

}
asignColor();




/// simple example of async and await  and error hadling ...................

async function fetchUserData(){
    try{
        let response = await fetch("wrong url for error");         
        let data = await response.json();
        console.log(data);
    }

    catch(err){
        console.log("error is ", err);
    }

}

fetchUserData();

