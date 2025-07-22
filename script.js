document.addEventListener("DOMContentLoaded", () => {
  const videoWrapper = document.getElementById("intro-video-wrapper");
  const video = document.getElementById("intro-video");
  const mainScroll = document.getElementById("main-scroll");
  const header = document.getElementById("site-header");

  // Disable scrolling while video plays
  document.body.style.overflow = "hidden";

  video.addEventListener("ended", () => {
    // Fade out the video wrapper
    videoWrapper.style.transition = "opacity 1.5s ease";
    videoWrapper.style.opacity = 0;

    // After fade, hide video, show main content and header
    setTimeout(() => {
      videoWrapper.style.display = "none";

      mainScroll.classList.remove("hidden");
      header.style.display = "block"; // show header now
      document.body.style.overflow = "auto";
    }, 1500);
  });
});
