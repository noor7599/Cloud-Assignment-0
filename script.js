document.addEventListener("DOMContentLoaded", () => {
    const car = document.querySelector(".car");
    const vroomEffect = document.querySelector(".vroom-effect");

    const vroomSound = new Audio("vroom.mp3");

    car.addEventListener("click", () => {
        // Reset animation for multiple clicks
        vroomEffect.style.animation = "none";
        void vroomEffect.offsetWidth;
        vroomEffect.style.animation = "vroom 1s ease-out";

        vroomSound.currentTime = 0; 
        vroomSound.play();
    });
});
