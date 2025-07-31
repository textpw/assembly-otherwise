function showFootnote() {
  const footnote = document.getElementById('footnote');
  footnote.classList.toggle('hidden');
}

function playAudio() {
  const audio = document.getElementById('audioMargins');
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
