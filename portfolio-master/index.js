/* Initialize AOS */
AOS.init({
    once: true,
    offset: 200,
    duration: 1200,
});

/* Navigation Logic */
const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const body = document.body;
const navBar = document.querySelector(".nav");

// Toggle Menu
if (hamburger) {
    hamburger.addEventListener("click", () => {
        menu.classList.add("show");
        body.classList.add("show"); // Optional if you want to prevent body scroll in CSS
    });
}

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        menu.classList.remove("show");
        body.classList.remove("show");
    });
}

// Close menu when clicking a link
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("show");
        body.classList.remove("show");
    });
});

// Fixed Navbar on Scroll
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
    const scrollHeight = window.scrollY; // Modern alias for pageYOffset
    if (scrollHeight > navHeight) {
        navBar.classList.add("fix-nav");
    } else {
        navBar.classList.remove("fix-nav");
    }
});

/* Smooth Scroll for Anchor Links (Handled by CSS scroll-behavior: smooth, but fallback/enhanced logic here if needed) */
// Keeping it simple with CSS smooth scroll, but updating the offset logic if necessary. 
// Since we have a sticky header, we might need offset adjustment, but using default behavior for now is cleaner.
// If precise offset is needed:
const links = [...document.querySelectorAll(".scroll-link")];
links.map(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const id = e.target.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        if (element) {
            let position = element.offsetTop - navHeight;
            // Adjust for fixed nav height

            window.scrollTo({
                top: position,
                left: 0,
                behavior: "smooth"
            });
        }
    });
});


/* TypeIt Animation */
new TypeIt("#type1", {
    speed: 100,
    loop: true,
    waitUntilVisible: true,
})
    .type("Software Developer", { delay: 400 })
    .pause(1000)
    .delete()
    .type("Designer", { delay: 400 })
    .pause(1000)
    .delete()
    .go();

new TypeIt("#type2", {
    speed: 100,
    loop: true,
    waitUntilVisible: true,
})
    .type("<span style='color: #8b5cf6;'>Software Developer</span>", { delay: 400 })
    .pause(1000)
    .delete()
    .type("<span style='color: #8b5cf6;'>Designer</span>", { delay: 400 })
    .pause(1000)
    .delete()
    .go();


/* GSAP Animations */
gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -20, ease: "power2.out" });
gsap.from(".nav-item", {
    opacity: 0,
    duration: 1,
    delay: 0.8,
    y: 20,
    stagger: 0.1,
    ease: "power2.out"
});
gsap.from(".hero-content h3", { opacity: 0, duration: 1, delay: 1.2, y: -30, ease: "power2.out" });
gsap.from(".hero-content h1", { opacity: 0, duration: 1, delay: 1.4, y: -30, ease: "power2.out" });
gsap.from(".hero-content h4", { opacity: 0, duration: 1, delay: 1.6, y: -20, ease: "power2.out" });
gsap.from(".hero-content a", { opacity: 0, duration: 1, delay: 1.8, y: 20, ease: "power2.out" });
gsap.from(".hero-img", { opacity: 0, duration: 1.5, delay: 2, scale: 0.8, ease: "elastic.out(1, 0.7)" }); // Changed to .hero-img


/* Glide.js Carousel */
const glide = document.querySelector(".glide");
if (glide) {
    new Glide(glide, {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        gap: 30,
        hoverpause: true,
        autoplay: 3000,
        animationDuration: 800,
        animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
        breakpoints: {
            996: {
                perView: 2,
            },
            768: {
                perView: 1,
            },
        },
    }).mount();
}
