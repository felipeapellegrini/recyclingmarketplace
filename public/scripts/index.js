// programming the appearence/closing of modal

// get search and close elements (a)
const buttonSearch = document.querySelector("#page-home main a")
const close = document.querySelector("#modal .header a");

// get modal element
const modal = document.querySelector("#modal")

// clear classList
buttonSearch.addEventListener("click", () => modal.classList.toggle("hide"))

// closing modal
close.addEventListener("click", () => modal.classList.toggle("hide"));


// listenning to the esc keyboard event in order to close the modal
document.addEventListener('keyup', e => e.key == 'Escape'? modal.classList.add("hide") : null);