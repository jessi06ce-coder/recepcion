// CONTADOR
const targetDate = new Date("December 11, 2026 20:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();



// ---- Pausas del carrusel ---- //
const fotos =
document.querySelector(".fotos");
const slides =
document.querySelector(".carrusel img");

let index = 0;
const delay = 4000; // 4 segundos
setInterval(() => {
  index++;
  fotos.style.transform = `translateX(-${index * 100}%)`;

  if(index === slides.length - 1){
    setTimeout(() => {
      fotos.style.transform = "translateX(0)";
    }, 600);

    setTimeout(() => {
      fotos.style.transition = "transform 0.6s ease-in-out";
    }, 650);
  }
}, delay);
