/* ===============================
   SRI LANKA TIME FUNCTION
================================ */
function getSLTime() {
  return new Date(
    new Date().toLocaleString("en-US", {
      timeZone: "Asia/Colombo"
    })
  );
}

/* ===============================
   COUNTDOWN TARGET
   (2026 Jan 1 - 12:00 AM SL)
================================ */
const targetDate = new Date("2026-01-01T00:00:00+05:30");

/* ===============================
   ELEMENTS
================================ */
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const countdownBox = document.getElementById("countdown");

/* ===============================
   UPDATE COUNTDOWN
================================ */
function updateCountdown() {
  const now = getSLTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdownBox.innerHTML = "🎉 HAPPY NEW YEAR 2026 🎉";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  daysEl.innerText = String(days).padStart(2, "0");
  hoursEl.innerText = String(hours).padStart(2, "0");
  minutesEl.innerText = String(minutes).padStart(2, "0");
  secondsEl.innerText = String(seconds).padStart(2, "0");
}

/* ===============================
   START TIMER
================================ */
updateCountdown();              // run once immediately
setInterval(updateCountdown, 1000);
