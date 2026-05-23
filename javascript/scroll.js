
const backToTopButton = document.getElementById("backToTop");


window.addEventListener("scroll", () => {
    
    const alturaPantalla = window.innerHeight; 
    
    
    if (window.scrollY > (alturaPantalla * 0.10)) { 
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});


backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});