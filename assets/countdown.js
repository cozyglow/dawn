document.addEventListener('DOMContentLoaded', function () {
  const countdownElement = document.getElementById('countdown');
  const endDate = new Date(countdownElement.dataset.endDate);

  function updateCountdown() {
    const now = new Date();
    const remainingTime = endDate - now;

    if (remainingTime <= 0) {
      clearInterval(intervalId);
      countdownElement.innerText = 'Merry Christmas!';
      return;
    }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    countdownElement.querySelector('.countdown__days').innerText = `${days} Days`;
    countdownElement.querySelector('.countdown__hours').innerText = `${hours} Hours`;
    countdownElement.querySelector('.countdown__minutes').innerText = `${minutes} Minutes`;
    countdownElement.querySelector('.countdown__seconds').innerText = `${seconds} Seconds`;
  }

  const intervalId = setInterval(updateCountdown, 1000);
  updateCountdown();
});
