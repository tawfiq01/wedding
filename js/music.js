
  // document.getElementById('startMusic').addEventListener('click', () => {
  //   console.log("clicked");
    
  //   document.getElementById('bgMusic').play();
  // });

  // document.getElementById('startMusic').addEventListener('click', () => {
  //   const bgMusic = document.getElementById('bgMusic');
  
  //   if (bgMusic.paused) {
  //     bgMusic.play();
  //     console.log("Music started");
  //   } else {
  //     bgMusic.pause();
  //     bgMusic.currentTime = 0; // Optional: Reset to the beginning
  //     console.log("Music stopped");
  //   }
  // });

  document.getElementById('startMusic').addEventListener('click', () => {
    const bgMusic = document.getElementById('bgMusic');
    const startMusicButton = document.getElementById('startMusic');
  
    if (bgMusic.paused) {
      bgMusic.play();
      startMusicButton.classList.add('playing'); // Add class on play
      console.log("Music started");
    } else {
      bgMusic.pause();
      bgMusic.currentTime = 0; // Optional: Reset to the beginning
      startMusicButton.classList.remove('playing'); // Remove class on stop
      console.log("Music stopped");
    }
  });

  