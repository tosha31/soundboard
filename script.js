const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("click", () => playNote(key));
});

function playNote(key) {
  const audio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
}
