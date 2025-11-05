/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

const backpack = document.querySelector("main .backpack");
console.log(backpack);

backpack.classList.add("new-class");
backpack.classList.remove("new-class");
backpack.dataset.test = "value";
backpack.style.backgroundColor = "lightblue";

const backpack2 = document.querySelector("main #pack02");
console.log(backpack2);
