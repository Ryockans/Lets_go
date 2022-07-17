let modalButton = document.querySelector(".tariffs__button");
let modalWindow = document.querySelector(".modal");
let modalCLose = document.querySelector(".modal__close");

function showModal(n) {
    if (n !== 1){
        modalWindow.classList.add("visually-hidden");
    }
    if (n !== 0){
        modalWindow.classList.remove("visually-hidden");
    }
}