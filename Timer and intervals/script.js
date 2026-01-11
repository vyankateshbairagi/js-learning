
let count =5;

let trvl = setInterval(() => {

    if (count >= 0) {
        console.log(count);
        count--;
    }else{
    clearInterval(trvl);
    }
}, 1000)