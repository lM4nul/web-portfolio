// 1. Capturamos los elementos del HTML por su ID
const menuHamburger = document.getElementById("menuHamburger");
const navLinks = document.getElementById("navLinks");

// 2. Evento para abrir y cerrar el menú (conmutador)
menuHamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// 3. Cerramos el menú automáticamente cuando el usuario da clic en una sección
const links = navLinks.querySelectorAll("a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});