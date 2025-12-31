/* ========= SRI LANKA TIME ========= */
function getSLTime() {
  return new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Colombo" })
  );
}

/* ========= COUNTDOWN ========= */
const target = new Date("2026-01-01T00:00:00+05:30");

const d = document.getElementById("days");
const h = document.getElementById("hours");
const m = document.getElementById("minutes");
const s = document.getElementById("seconds");

setInterval(() => {
  const now = getSLTime();
  let diff = target - now;

  if (diff <= 0) {
    document.getElementById("countdown").style.display = "none";
    startCelebration();
    return;
  }

  d.innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
  h.innerText = Math.floor((diff / (1000 * 60 * 60)) % 24);
  m.innerText = Math.floor((diff / (1000 * 60)) % 60);
  s.innerText = Math.floor((diff / 1000) % 60);
}, 1000);

/* ========= FIREWORKS ========= */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];

function burst(x, y) {
  for (let i = 0; i < 80; i++) {
    particles.push({
      x, y,
      a: Math.random() * Math.PI * 2,
      s: Math.random() * 6 + 2,
      l: 80,
      c: `hsl(${Math.random()*360},100%,60%)`
    });
  }
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach((p,i)=>{
    p.x += Math.cos(p.a)*p.s;
    p.y += Math.sin(p.a)*p.s;
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

/* ========= CELEBRATION MODE ========= */
const fireSound = document.getElementById("fireSound");
const text = document.getElementById("celebrateText");
const dev = document.getElementById("devDrop");

let started = false;

function startCelebration() {
  if (started) return;
  started = true;

  text.style.opacity = "1";
  dev.style.opacity = "1";

  fireSound.volume = 0.6;
  fireSound.play().catch(()=>{});

  setInterval(()=>{
    burst(Math.random()*canvas.width, Math.random()*canvas.height*0.6);
  },500);
}

/* ========= TIME WINDOW 12AM–10AM ========= */
function checkWindow() {
  const h = getSLTime().getHours();
  if (h >= 0 && h < 10) startCelebration();
}
checkWindow();
