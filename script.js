function updateCountdown() {
    const endDate = new Date('2024-12-31T23:59:59');
    const now = new Date();
    const diff = endDate - now;

    if (diff <= 0) {
      document.getElementById('months').innerText = '0 Meses';
      document.getElementById('days').innerText = '0 Dias';
      document.getElementById('hours').innerText = '0 Horas';
      document.getElementById('minutes').innerText = '0 Minutos';
      document.getElementById('seconds').innerText = '0 Segundos';
      return;
    }

    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('months').innerText = `${months} Meses`;
    document.getElementById('days').innerText = `${days} Dias`;
    document.getElementById('hours').innerText = `${hours} Horas`;
    document.getElementById('minutes').innerText = `${minutes} Minutos`;
    document.getElementById('seconds').innerText = `${seconds} Segundos`;
  }

  setInterval(updateCountdown, 1000);