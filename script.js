document.addEventListener("DOMContentLoaded", () => {
  const videoWrapper = document.getElementById("intro-video-wrapper");
  const video = document.getElementById("intro-video");
  const mainScroll = document.getElementById("main-scroll");
  const header = document.getElementById("site-header");

  // Disable scrolling while video plays
  document.body.style.overflow = "hidden";

  video.addEventListener("ended", () => {
    videoWrapper.style.transition = "opacity 1.5s ease";
    videoWrapper.style.opacity = 0;

    setTimeout(() => {
      videoWrapper.style.display = "none";

      mainScroll.classList.remove("hidden");
      header.classList.remove("hidden");
      header.style.display = "";

      document.body.style.overflow = "auto";
    }, 1500);
  });
});
