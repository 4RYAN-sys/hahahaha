// Ngetik teks
let i = 0, txt = "Hi! Saya Aryan Pratama S.👋", speed = 80;
(function type() {
  if (i < txt.length) {
    document.getElementById("typewriter").textContent += txt[i++];
    setTimeout(type, speed);
  }
})();

// Dark/Light mode toggle
const toggleBtn = document.getElementById("toggle-mode");
toggleBtn.onclick = () => {
  document.body.classList.toggle("light");
  toggleBtn.textContent = document.body.classList.contains("light") ? "🌑" : "🌙";
};

// Klik kartu -> alert
document.querySelectorAll(".card").forEach(card =>
  card.onclick = () => alert(` ${card.querySelector("h3").textContent}`)
);

