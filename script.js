window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){
        nav.classList.add("nav-scrolled");
    } else {
        nav.classList.remove("nav-scrolled");
    }

});



const revealElements = document.querySelectorAll(
    ".card, .industry-card, .career-box, .path-card, .timeline-item, .source-card"
);

function revealOnScroll(){

    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach((element) => {

        const boxTop = element.getBoundingClientRect().top;

        if(boxTop < triggerBottom){
            element.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();



const cards = document.querySelectorAll(
    ".card, .industry-card, .career-box, .path-card, .timeline-item, .source-card"
);

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);

    });

});