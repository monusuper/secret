document.getElementById('start-button').addEventListener('click', function () {
  document.querySelector('.wrapper').style.filter = 'blur(0)';
  document.getElementById('start-button').classList.add('hidden');

  // Reveal the pfp with shadowy 3D effect
  const pfp = document.querySelector('.pfp');
  pfp.classList.add('visible');

  document.getElementById('birthday-message').classList.remove('hidden');

  // Play song
  const audio = document.getElementById('birthday-song');
  audio.play();

  // Create continuous confetti
  function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random fall duration
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
    document.body.appendChild(confetti);

    // Remove confetti after animation to prevent overflow
    confetti.addEventListener('animationend', () => {
      confetti.remove();
    });
  }

  // Continuously generate confetti
  setInterval(createConfetti, 100); // Adjust the interval for more/less confetti
});
