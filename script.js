document.addEventListener("DOMContentLoaded", () => {
    const car = document.querySelector(".car");
    const vroomEffect = document.querySelector(".vroom-effect");

    // Load the vroom sound
    const vroomSound = new Audio("vroom.mp3");

    car.addEventListener("click", () => {
        // Reset animation for multiple clicks
        vroomEffect.style.animation = "none";
        void vroomEffect.offsetWidth;
        vroomEffect.style.animation = "vroom 1s ease-out";

        // Play vroom sound
        vroomSound.currentTime = 0; // Restart if already playing
        vroomSound.play();
    });
});
