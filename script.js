document.addEventListener("DOMContentLoaded", () => {
  // Scroll fade in
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".page").forEach(page => observer.observe(page));

  // Music icon play/pause
  const music = document.getElementById("bgMusic");
  const musicIcon = document.getElementById("musicIcon");

  musicIcon.addEventListener("click", () => {
    if(music.paused){
      music.play();
      musicIcon.textContent = "🔊 stop";
    } else {
      music.pause();
      musicIcon.textContent = "🎵 tap here";
    }
  });
});

// popup
function startSite() {
  document.getElementById("entryPopup").style.display = "none";

  const music = document.getElementById("bgMusic");
  music.play();
}
