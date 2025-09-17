let currentAudio = null;

function playSound(file) {
  // pokud něco právě hraje, zastavíme to
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  currentAudio = new Audio('sounds/' + file);
  currentAudio.play();
  
  // po dokončení zvuku se nulujeme
  currentAudio.onended = () => {
    currentAudio = null;
  }
}
