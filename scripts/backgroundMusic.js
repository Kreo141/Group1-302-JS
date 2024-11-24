const audio = document.getElementById('bg-music');

const enableAutoplay = () => {
  audio.play().then(() => {
    console.log('Music playing!');
  }).catch((error) => {
    console.error('Playback failed:', error);
  });

  document.removeEventListener('click', enableAutoplay);
};

document.addEventListener('onclick', enableAutoplay);
