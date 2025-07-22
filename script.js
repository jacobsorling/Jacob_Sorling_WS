document.addEventListener("DOMContentLoaded", () => {
  const videoWrapper = document.getElementById("intro-video-wrapper");
  const video = document.getElementById("intro-video");
  const mainScroll = document.getElementById("main-scroll");

  // Disable scrolling while video plays
  document.body.style.overflow = "hidden";

  video.addEventListener("ended", () => {
    // Fade out the video wrapper
    videoWrapper.style.transition = "opacity 1.5s ease";
    videoWrapper.style.opacity = 0;

    // After fade, hide video and show main content
    setTimeout(() => {
      videoWrapper.style.display = "none";

      // Show main content and enable scroll
      mainScroll.classList.remove("hidden");
      document.body.style.overflow = "auto";
    }, 1500);
  });
});
