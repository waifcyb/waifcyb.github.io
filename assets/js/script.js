// This file contains the JavaScript code that adds interactivity to the website. It includes event listeners for the buttons to create dynamic sparkle effects on hover.

document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("mouseover", function () {
    // Create sparkle
    const sparkle = document.createElement("div");
    sparkle.style.position = "absolute";
    sparkle.style.pointerEvents = "none";
    sparkle.style.width = "10px";
    sparkle.style.height = "10px";
    sparkle.style.background =
      "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,215,0,1) 100%)";
    sparkle.style.borderRadius = "50%";

    // Random position within the button
    sparkle.style.left = Math.random() * this.offsetWidth + "px";
    sparkle.style.top = Math.random() * this.offsetHeight + "px";

    // Animation
    sparkle.style.opacity = "1";
    sparkle.style.transition = "all 0.3s ease-out";

    // Add to DOM
    this.appendChild(sparkle);

    // Animate and remove
    setTimeout(() => {
      sparkle.style.transform = "scale(1.5)";
      sparkle.style.opacity = "0";
      setTimeout(() => sparkle.remove(), 300);
    }, 10);
  });
});