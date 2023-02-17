

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

