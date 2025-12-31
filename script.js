/* =======================
   COUNTDOWN (Sri Lanka)
   ======================= */

function getSriLankaTime() {
  return new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Colombo" })
  );
}

const targetDate = new Date("2026-01-01T00:00:00+05:30");

function updateCountdown() {
  const now = getSriLankaTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML =
      "<h2>🎉 HAPPY NEW YEAR 2026 🎉</h2>";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

/* =======================
   BUTTON MESSAGES
   ======================= */

const btn = document.getElementById("wishBtn");
const messages = document.querySelectorAll(".msg");
let index = 0;

btn.addEventListener("click", () => {
  if (index < messages.length) {
    messages[index].style.display = "block";
    index++;
  }
});
