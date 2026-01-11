
// let count =5;

// let trvl = setInterval(() => {

//     if (count >= 0) {
//         console.log(count);
//         count--;
//     }else{
//     clearInterval(trvl);
//     }
// }, 1000)


document.getElementById('startTimeout').addEventListener('click', function() {
    setTimeout(() => {
        document.getElementById('output').innerText = "Timeout executed after 3 seconds!";
    }, 3000);       
});

let intervalId; 
document.getElementById('startInterval').addEventListener('click', function() {
    intervalId = setInterval(() => {
        const currentTime = new Date().toLocaleTimeString();
        document.getElementById('output').innerText = "Current Time: " + currentTime;
    }, 1000);
});

document.getElementById('stopInterval').addEventListener('click', function() {
    clearInterval(intervalId);
    document.getElementById('output').innerText = "Interval stopped.";
}); 

