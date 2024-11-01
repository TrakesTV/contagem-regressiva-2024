<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contagem Regressiva para o Final de 2024</title>
  <script src="script.js"></script>
  <link rel="stylesheet" href="estilo.css">
  
</head>
<body>
  <div class="container">
    <h1>Tempo restante para o fim de 2024</h1>
    <div class="countdown">
      <div class="unit" id="months">0 Meses</div>
      <div class="unit" id="days">0 Dias</div>
      <div class="unit" id="hours">0 Horas</div>
      <div class="unit" id="minutes">0 Minutos</div>
      <div class="unit" id="seconds">0 Segundos</div>
    </div>
  </div>

</body>
</html>
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
    color: #333;
    margin: 0;
  }
  .container {
    text-align: center;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  h1 {
    font-size: 1.8em;
  }
  .countdown {
    font-size: 1.5em;
    display: flex;
    gap: 10px;
    justify-content: center;
  }
  .unit {
    background-color: #e0e0e0;
    padding: 10px;
    border-radius: 5px;
    min-width: 60px;

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
  }
