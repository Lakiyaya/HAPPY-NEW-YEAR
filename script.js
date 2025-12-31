/* ===== SRI LANKA TIME ===== */
function getSLTime() {
  return new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Colombo" })
  );
}

/* ===== COUNTDOWN ===== */
const targetDate = new Date("2026-01-01T00:00:00+05:30");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const countdownBox = document.getElementById("countdown");

function updateCountdown() {
  const now = getSLTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdownBox.style.display = "none";
    startCelebration();
    return;
  }

  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff / (1000*60*60)) % 24);
  const minutes = Math.floor((diff / (1000*60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  daysEl.innerText = String(days).padStart(2,"0");
  hoursEl.innerText = String(hours).padStart(2,"0");
  minutesEl.innerText = String(minutes).padStart(2,"0");
  secondsEl.innerText = String(seconds).padStart(2,"0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* ===== FIREWORKS ===== */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
function firework(x,y) {
  for(let i=0;i<80;i++){
    particles.push({
      x,y,
      a:Math.random()*Math.PI*2,
      s:Math.random()*6+2,
      l:80,
      c:`hsl(${Math.random()*360},100%,60%)`
    });
  }
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach((p,i)=>{
    p.x+=Math.cos(p.a)*p.s;
    p.y+=Math.sin(p.a)*p.s;
    p.l--;
    ctx.fillStyle = p.c;
    ctx.beginPath();
    ctx.arc(p.x,p.y,2,0,Math.PI*2);
    ctx.fill();
    if(p.l<=0) particles.splice(i,1);
  });
  requestAnimationFrame(animate);
}
animate();

/* ===== CELEBRATION ===== */
const fireSound = document.getElementById("fireSound");
const text = document.getElementById("celebrateText");
const dev = document.getElementById("devDrop");
let started = false;

function startCelebration(){
  if(started) return;
  started = true;

  text.style.opacity="1";
  dev.style.opacity="1";

  fireSound.volume = 0.6;
  fireSound.play().catch(()=>{});

  setInterval(()=>{
    firework(Math.random()*canvas.width, Math.random()*canvas.height*0.6);
  },500);
}

/* ===== TIME WINDOW 12AM–10AM ===== */
function checkWindow(){
  const h = getSLTime().getHours();
  if(h>=0 && h<10) startCelebration();
}
checkWindow();
