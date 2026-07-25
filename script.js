// ============================
// Typing Animation
// ============================

const words = [
  "Computer Science Student",
  "Frontend Developer",
  "Web Designer",
  "Java Programmer",
  "Future Full Stack Developer"
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

const typing = document.getElementById("typing");

function type() {
    currentWord = words[wordIndex];

    if (!isDeleting) {
        typing.textContent = currentWord.substring(0, letterIndex++);
        if (letterIndex > currentWord.length) {
            isDeleting = true;
            setTimeout(type, 1200);
            return;
        }
    } else {
        typing.textContent = currentWord.substring(0, letterIndex--);
        if (letterIndex < 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            letterIndex = 0;
        }
    }

    setTimeout(type, isDeleting ? 60 : 120);
}

type();


// ============================
// Active Navbar
// ============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

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


// ============================
// Smooth Scroll
// ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ============================
// Reveal Animation
// ============================

const revealElements = document.querySelectorAll(
".hero,.about-container,.skill,.card,form"
);

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

revealElements.forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(60px)";
el.style.transition="1s";

observer.observe(el);

});


// ============================
// Button Ripple Effect
// ============================

const buttons = document.querySelectorAll(".btn,.btn2,.card a,button");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});


// ============================
// Custom Cursor
// ============================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

if(cursor){

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

}

});


// ============================
// Back To Top Button
// ============================

const topBtn = document.createElement("button");

topBtn.innerHTML="↑";

topBtn.style.position="fixed";
topBtn.style.right="20px";
topBtn.style.bottom="20px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#38bdf8";
topBtn.style.color="white";
topBtn.style.fontSize="22px";
topBtn.style.display="none";
topBtn.style.cursor="pointer";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};