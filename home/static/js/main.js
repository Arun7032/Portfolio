// =========================
// Typing Animation
// =========================

const roles = [
    "Python Developer",
    "Full Stack Developer",
    "AI Engineer",
    "Generative AI Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const roleElement = document.querySelector(".hero-left h2");

function typeEffect() {

    if (!roleElement) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        roleElement.textContent = currentRole.substring(0, charIndex++);

        if (charIndex > currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        roleElement.textContent = currentRole.substring(0, charIndex--);

        if (charIndex < 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();


// =========================
// Scroll Progress Bar
// =========================

window.addEventListener("scroll", () => {

    const winScroll =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (winScroll / height) * 100;

    document.getElementById("progressBar").style.width =
        progress + "%";

});


// =========================
// Reveal Animation
// =========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});

const revealItems = document.querySelectorAll(
    ".skill-card,.project-card,.certificate-card,.timeline-card,.info-box"
);

revealItems.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(50px)";

    item.style.transition = "all .8s ease";

    observer.observe(item);

});


// =========================
// Active Navigation
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// =========================
// Back To Top Button
// =========================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "30px";
topButton.style.bottom = "30px";
topButton.style.width = "55px";
topButton.style.height = "55px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.background = "#3b82f6";
topButton.style.color = "#fff";
topButton.style.fontSize = "24px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 10px 25px rgba(0,0,0,.3)";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400)
        topButton.style.display = "block";
    else
        topButton.style.display = "none";

});

topButton.onclick = () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

};


// =========================
// Smooth Hover Effect
// =========================

const cards = document.querySelectorAll(
".project-card,.skill-card,.certificate-card,.info-box"
);

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

card.style.background=
`radial-gradient(circle at ${x}px ${y}px,
rgba(59,130,246,.25),
#1e293b 60%)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="#1e293b";

});

});