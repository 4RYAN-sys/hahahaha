function showSection(id) {
  const sections = document.querySelectorAll("main section");
  sections.forEach(section => {
    section.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}
function showSection(id) {
  const sections = document.querySelectorAll("main section");
  sections.forEach(section => {
    section.style.display = "none";
  });
  const target = document.getElementById(id);
  target.style.display = "block";
  target.classList.add("fade-in");

  // remove class after animation biar bisa re-apply
  setTimeout(() => {
    target.classList.remove("fade-in");
  }, 500);
}
