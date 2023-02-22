/* 

const btnDecrease = document.getElementById("decrease");
const btnIncrease = document.getElementById("increase");
const num = document.getElementById("num");

let number = 0 

btnDecrease.addEventListener("click", () => {
    number --
    num.innerHTML = number
    if (number > 0) {
        num.style.color = "blue"
    }
    else if (number < 0) {
        num.style.color = "red"
    }
    else {
        num.style.color = "yellow"
    }
});

btnIncrease.addEventListener("click", () => {
    number ++
    num.innerHTML = number
    if (number > 0) {
        num.style.color = "blue"
    }
    else if (number < 0) {
        num.style.color = "red"
    }
    else {
        num.style.color = "yellow"
    }
});





const front = document.getElementById("front");
const back = document.getElementById("back");
const container = document.getElementById("container");


let count = 0

front.addEventListener("click", () => {
    count++;
    container.style.backgroundImage = `url(./assets/fo-${count}.jpg);`
});

back.addEventListener("click", () => {
    count--;
    container.style.backgroundImage = `url(./assets/fo-${count}.jpg);`
});
 


 */




// digital watch

const container = document.getElementById("container");

function showtime() {
    let date = new Date();

    let hours = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();

    let formatedTime = formatTime(hours);
    hours = modified(hours);
    
    hours = addZero(hours);
    minute = addZero(minute);
    seconds = addZero(seconds);

    container.innerHTML = `${hours}:${minute}:${seconds} ${formatedTime}`
};
    


function modified(time) {
    if (time > 12) {
        time = time - 12;
    }
    if (time === 0) {
        time = 12;
    }

    return time;
};



function formatTime(time) {
    let format = "AM";
    if(time >= 12) {
        format = "PM";
    }
    return format;
};

function addZero(time) {
    if (time < 10){
        time = "0" + time
    }
    return time;
}

showtime();
//setInterval(showtime, 1000);





