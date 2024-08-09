const words = ["Maths", "Science"];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false

const speed = 150; // Typing speed in milliseconds

const dynamicText = document.getElementById("dynamictext");

function typeEffect() {
    if (isDeleting) {
        currentWord = words[i].substring(0, j--);
    } else {
        currentWord = words[i].substring(0, j++);
    }

    dynamicText.textContent = currentWord;

    //Switching between typing and deleting

    if (!isDeleting && j === words[i].length) {
        setTimeout(() => (isDeleting = true), 1000); //Pause before deleting
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length; // ensures when i reaches the last word, it wraps around to the first word in the array creating the loop needed
    }

    //Recursive call
    setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);