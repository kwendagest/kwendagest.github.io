var menu=document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon')
var iconMenu = document.querySelector('nav .menu-icon button');

menuBar.addEventListener('click', function(){
    menu.classList.add('active');
});


// Slider
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");


const myObs = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

const myObsRight = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

const elements = document.querySelectorAll(".hidden");
elements.forEach((element)=>{
    myObs.observe(element);
});

const elementsRight = document.querySelectorAll(".hidden-right");
elementsRight.forEach((element)=>{
    myObsRight.observe(element);
});


function changeSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        dots[i].classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");
    slideIndex = index;
}

// Muda o slide a cada 5 segundos
setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    changeSlide(slideIndex);
}, 5000);
