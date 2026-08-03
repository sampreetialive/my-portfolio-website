/* ==========================================
   Sampreeti Ghosh Portfolio
   JavaScript Events & DOM Integration
========================================== */

// ==========================
// Welcome Message
// ==========================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Portfolio Loaded Successfully!");

    setTimeout(() => {
        alert("🌸 Welcome to Sampreeti Ghosh's Portfolio!");
    }, 500);

});


// ==========================
// Resume Button
// ==========================

const resumeBtn = document.querySelector(".resume-btn");

resumeBtn.addEventListener("click", function (e) {

    e.preventDefault();

    alert("📄 Resume will be uploaded soon!");

});


// ==========================
// Navbar Scroll Effect
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 60) {

        header.style.background = "#FFFFFF";
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";

    }

    else {

        header.style.background = "#FAF6F0";
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,.05)";

    }

});


// ==========================
// Project Card Hover
// ==========================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", function () {

        this.style.transform = "translateY(-12px) scale(1.03)";
        this.style.boxShadow = "0 18px 40px rgba(232,180,184,.45)";

    });

    card.addEventListener("mouseleave", function () {

        this.style.transform = "translateY(0)";
        this.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    });

});


// ==========================
// Certificate Card Hover
// ==========================

const certificateCards = document.querySelectorAll(".certificate-card");

certificateCards.forEach(card => {

    card.addEventListener("mouseenter", function () {

        this.style.transform = "translateY(-12px) scale(1.03)";
        this.style.boxShadow = "0 18px 40px rgba(255,220,150,.45)";

    });

    card.addEventListener("mouseleave", function () {

        this.style.transform = "translateY(0)";
        this.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    });

});


// ==========================
// Skill Card Click
// ==========================

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(skill => {

    skill.addEventListener("click", function () {

        alert("✨ Skill: " + this.textContent);

    });

});


// ==========================
// Contact Card Hover
// ==========================

const contactCards = document.querySelectorAll(".contact-card");

contactCards.forEach(card => {

    card.addEventListener("mouseenter", function () {

        this.style.background = "#FFF8EE";

    });

    card.addEventListener("mouseleave", function () {

        this.style.background = "#FFFFFF";

    });

});


// ==========================
// Typing Effect
// ==========================

const heading = document.querySelector(".hero-text h2");

const text = "Aspiring Cybersecurity & AI Management Professional";

heading.textContent = "";

let index = 0;

function typeWriter() {

    if (index < text.length) {

        heading.textContent += text.charAt(index);

        index++;

        setTimeout(typeWriter, 50);

    }

}

typeWriter();


// ==========================
// Back To Top Button
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 350) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ==========================
// Button Click Animation
// ==========================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mousedown", function () {

        this.style.transform = "scale(0.95)";

    });

    button.addEventListener("mouseup", function () {

        this.style.transform = "scale(1)";

    });

});


// ==========================
// Footer Year (Automatic)
// ==========================

const footer = document.querySelector("footer p");

const year = new Date().getFullYear();

footer.innerHTML =
`© ${year} Sampreeti Ghosh<br>Designed & Developed with HTML5, CSS3 & JavaScript`;
