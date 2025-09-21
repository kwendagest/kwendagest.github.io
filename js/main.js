var menu=document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon')
var icon = document.querySelector('nav .menu-icon i');

menuBar.addEventListener('click', function(){
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');

        icon.classList.remove('fa', 'fa-times-circle-o');
        icon.classList.add('fa', 'fa-bars');
    } else {
        icon.classList.remove('fa', 'fa-bars');
        icon.classList.add('fa', 'fa-times-circle-o');
        menu.classList.add('active');
    }
});


// Slider
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const array = document.getElementById('go-top');
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
