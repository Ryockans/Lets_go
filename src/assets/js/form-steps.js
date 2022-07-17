let stepFirst = document.querySelector(".step.-first ");
let stepSecond = document.querySelector(".step.-second");
let stepThird = document.querySelector(".step.-third");


function formStep(n) {
    if (n === 2){
        stepFirst.classList.remove("-current");
        stepSecond.classList.remove("-current");
        stepThird.classList.add("-current");

    }

    if (n === 1){
        stepFirst.classList.remove("-current");
        stepSecond.classList.add("-current");
        stepThird.classList.remove("-current");
    }

    if (n ===  0){
        stepFirst.classList.add("-current");
        stepSecond.classList.remove("-current");
        stepThird.classList.remove("-current");
    }
}