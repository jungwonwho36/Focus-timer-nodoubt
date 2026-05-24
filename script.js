let time = 1500;
let interval = null;
let running = false;

function updateDisplay() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  document.getElementById("timer").innerText =
    `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function startTimer() {
  if (running) return;

  running = true;

  let input = document.getElementById("minutes").value;
  if (input && input > 0) {
    time = input * 60;
  }

  updateDisplay();

  interval = setInterval(() => {
    if (time > 0) {
      time--;
      updateDisplay();
    } else {
      clearInterval(interval);
      running = false;
    }
  }, 1000);
}

function pauseTimer() {
  running = false;
  clearInterval(interval);
}

function resetTimer() {
  pauseTimer();
  time = 1500;
  updateDisplay();
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

function toggleFocus() {
  document.body.classList.toggle("focus-mode");
}

updateDisplay();