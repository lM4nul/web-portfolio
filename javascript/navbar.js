document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("header nav");
  const btn = document.getElementById("navToggle");
  if (!nav || !btn) return;

  btn.addEventListener("click", () => nav.classList.toggle("open"));
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) nav.classList.remove("open");
  });
});
