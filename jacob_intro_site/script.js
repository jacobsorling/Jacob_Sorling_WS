// script.js

const video = document.getElementById("introVideo");
const fallback = document.getElementById("fallbackImage");

video.addEventListener("ended", () => {
  fallback.style.opacity = 1; // Fade in the still image
});

video.addEventListener("error", () => {
  fallback.style.opacity = 1; // Backup if video can't play
});
