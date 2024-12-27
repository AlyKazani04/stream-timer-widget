let interval;
let time = 0; // time in seconds
let isCountingDown = false;
let isRunning = false;

function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600).toString().padStart(2, '0');
  const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
  const secs = (seconds % 60).toString().padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

function updateDisplay() {
  const timeDisplay = document.getElementById('timeDisplay');
  timeDisplay.textContent = formatTime(time);
}

function startClock() {
  if (isRunning) return;
  isRunning = true;

  interval = setInterval(() => {
    time += isCountingDown ? -1 : 1;
    if (time < 0) {
      time = 0;
      pauseClock();
    }
    updateDisplay();
  }, 1000);
}

function pauseClock() {
  clearInterval(interval);
  isRunning = false;
}

function resetClock() {
  pauseClock();
  time = 0;
  updateDisplay();
}

function setInitialTime() {
  const startTimeInput = document.getElementById('startTime').value;
  const [hrs, mins, secs] = startTimeInput.split(':').map(Number);
  time = (hrs * 3600) + (mins * 60) + (secs || 0);
  updateDisplay();
}

function toggleMode() {
  isCountingDown = !isCountingDown;
  const modeText = document.getElementById('mode');
  modeText.textContent = isCountingDown ? 'Count Up' : 'Count Down';
}
