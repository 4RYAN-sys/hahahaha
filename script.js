// Typewriter Effect
let i = 0, txt = "Hi! Saya Aryan Pratama 👋", speed = 75;
(function type() {
  if (i < txt.length) {
    document.getElementById("typewriter").textContent += txt.charAt(i++);
    setTimeout(type, speed);
  }
})();

// Toggle Mode
document.getElementById("toggle-mode").onclick = () => {
  document.body.classList.toggle("light");
  toggleMode.textContent = document.body.classList.contains("light") ? "🌑" : "🌙";
};

// Card Alert
document.querySelectorAll(".card").forEach(c =>
  c.onclick = () => alert(`Kamu klik: ${c.querySelector("h3").textContent}\n\nFitur detail coming soon 😎`)
);
