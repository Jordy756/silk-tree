const main = document.querySelector("main");
const wrapper = document.querySelector(".wrapper");
const buttons = wrapper.querySelectorAll(".secondary__btn");

buttons.forEach((button) =>
    button.addEventListener("click", () => {
        wrapper.classList.toggle("change");
        main.classList.toggle("change");
    })
);
