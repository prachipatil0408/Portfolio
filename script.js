// ================= CONTACT FORM =================
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Your message has been submitted successfully!");
});


// ================= MOBILE MENU =================
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// ================= SKILL BAR ANIMATION =================
const skillSection = document.querySelector("#skills");
const skillBars = document.querySelectorAll(".bar span");

window.addEventListener("scroll", () => {
    const sectionTop = skillSection.offsetTop;
    const scrollPos = window.scrollY + window.innerHeight;

    if(scrollPos > sectionTop){
        skillBars.forEach(bar => {
            bar.style.width = bar.getAttribute("style").split(":")[1];
        });
    }
});


// ================= SIMPLE TYPING EFFECT =================
const text = "Aspiring Full Stack Web Developer";
const typingElement = document.querySelector(".hero h2");

let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

// Clear original text and start typing
typingElement.textContent = "";
typeEffect();