
let i = 0, txt = "Hi! Selamat Datang.👋", speed = 80;
(function type() {
  if (i < txt.length) {
    document.getElementById("typewriter").textContent += txt[i++];
    setTimeout(type, speed);
  }
})();

const toggleBtn = document.getElementById("toggle-mode");
toggleBtn.onclick = () => {
  document.body.classList.toggle("light");
  toggleBtn.textContent = document.body.classList.contains("light") ? "🌑" : "🌙";
};

document.querySelectorAll(".card").forEach(card =>
  card.onclick = () => alert(` ${card.querySelector("h3").textContent}`)
);


