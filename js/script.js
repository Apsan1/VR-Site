document.addEventListener('DOMContentLoaded', function () {
const items = document.querySelectorAll('.landing-item');
const radio = document.querySelectorAll('.radio-buttons input');
const radio1 = document.getElementById('radio1');
const radio2 = document.getElementById('radio2');
const totalItems = items.length;
let currentItem = 0;
let isEnabled = true;
let isGirlSlide = false;

function changeItem(index) {
    currentItem = (index + totalItems) % totalItems;
    items.forEach((item, i) => {
        item.style.display = i === currentItem ? 'flex' : 'none';
        if(isGirlSlide){
            document.getElementsByClassName('girl-hero')[0].style.display = 'none';
        }else{
            if(window.innerWidth < 768){
                document.getElementsByClassName('girl-hero')[0].style.display = 'block';
                
            }
            document.getElementsByClassName('girl-hero')[0].style.display = 'none';
        }
    });
}

document.getElementById('next').addEventListener('click', () => {
    if (isEnabled) {
        changeItem(currentItem + 1);
        document.getElementsByClassName('landing-item')[1].style.animation = 'slide-left 1s ease-out';
        document.getElementsByClassName('landing-item')[0].style.animation = 'slide-left 1s ease-out';
        isGirlSlide = !isGirlSlide;
    }
});

document.getElementById('prev').addEventListener('click', () => {
    if (isEnabled) {
        changeItem(currentItem - 1);
        document.getElementsByClassName('landing-item')[1].style.animation = 'slide-right 1s ease-out';
        document.getElementsByClassName('landing-item')[0].style.animation = 'slide-right 1s ease-out';
        isGirlSlide = !isGirlSlide;
    }
});

radio1.addEventListener('click', () => {
    changeItem(0);
    isGirlSlide = !isGirlSlide;
        });

radio2.addEventListener('click', () => {
    changeItem(1);
    isGirlSlide = !isGirlSlide;
});

});

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.services-carousel');
    const services = document.querySelectorAll('.services');
    const prevButton = document.getElementById('services-prev');
    const nextButton = document.getElementById('services-next');

    function moveNext() {
        const firstService = carousel.firstElementChild;
        carousel.appendChild(firstService);
    }

    function movePrev() {
        const lastService = carousel.lastElementChild;
        carousel.insertBefore(lastService, carousel.firstElementChild);
    }

    nextButton.addEventListener('click', moveNext);
    prevButton.addEventListener('click', movePrev);
});

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.testimonial-carousel');
    const testimonial = document.querySelectorAll('.testimonial');
    const prevButton = document.getElementById('testimonial-prev');
    const nextButton = document.getElementById('testimonial-next');

    function moveNext() {
        const firstFeedback = carousel.firstElementChild;
        //add animation to the first element
        firstFeedback.style.animation = 'slide-left 1s ease-out';
        carousel.appendChild(firstFeedback);
    }

    function movePrev() {
        const lastFeedback = carousel.lastElementChild;
        //add animation to the last element
        lastFeedback.style.animation = 'slide-right 1s ease-out';
        carousel.prepend(lastFeedback);
    }

    nextButton.addEventListener('click', moveNext);
    prevButton.addEventListener('click', movePrev);
});

// Function to handle mouseover event
function handleMouseOver() {
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    prev.style.display = 'block';
    next.style.display = 'block';
    const carouselControls = document.querySelector('.carousel-controls');
    carouselControls.style.display = 'flex';
    prev.style.animation = 'slideInLeft 0.5s forwards';
    next.style.animation = 'slideInRight 0.5s forwards';
}

function ServicesHandleMouseOver() {
    const prev = document.getElementById('services-prev');
    const next = document.getElementById('services-next');
    if (window.innerWidth > 768) {
        prev.style.display = 'block';
        next.style.display = 'block';
        const carouselControls = document.querySelector('.services-carousel-controls');
        carouselControls.style.display = 'flex';
        prev.style.animation = 'slideInLeft 0.5s forwards';
        next.style.animation = 'slideInRight 0.5s forwards';
    }
}

function TestimonialHandleMouseOver() {
    const prev = document.getElementById('testimonial-prev');
    const next = document.getElementById('testimonial-next');
    //check for viewport and display the controls only if the viewport is more than 768px
    if(window.innerWidth > 768){
        prev.style.display = 'block';
        next.style.display = 'block';
        prev.style.animation = 'slideInLeft 0.5s forwards';
        next.style.animation = 'slideInRight 0.5s forwards';
    }
}
function ServicesHandleMouseOut() {
    const prev = document.getElementById('services-prev');
    const next = document.getElementById('services-next');
    
    const carouselControls = document.querySelector('.services-carousel-controls');
    prev.style.animation = 'slideOutLeft 0.5s forwards';
    next.style.animation = 'slideOutRight 0.5s forwards';
    setTimeout(() => {
      carouselControls.style.display = 'none';
    }, 500);
} 

function TestimonialHandleMouseOut() {
    const prev = document.getElementById('testimonial-prev');
    const next = document.getElementById('testimonial-next');
    
    prev.style.animation = 'slideOutLeft 0.5s forwards';
    next.style.animation = 'slideOutRight 0.5s forwards';
}

function handleMouseOut() {
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  
  const carouselControls = document.querySelector('.carousel-controls');
  prev.style.animation = 'slideOutLeft 0.5s forwards'; // Slide out to the left
  next.style.animation = 'slideOutRight 0.5s forwards'; // Slide out to the right
  setTimeout(() => {
    carouselControls.style.display = 'none'; // Hide control buttons after animation
  }, 500);
} 

function revealfastOnScroll() {
    var reveals = document.querySelectorAll('.revealFast');
    //add reveal-up-fast class to the elements with the class of revealFast
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 50;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('reveal-up-fast');
        }
    }
}

function revealSlowonScroll(){
    var reveals = document.querySelectorAll('.revealSlow');
    //add revealSlow class to the elements with the class of revealSlow
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 50;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('reveal-up-slow');
        }
    }
}

window.addEventListener('scroll', revealfastOnScroll);
window.addEventListener('scroll', revealSlowonScroll);

document.addEventListener('DOMContentLoaded', function () {
document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});
} );

function closeSidebar(){
    document.getElementById('sidebar').classList.remove('active');
}

function toggleAboutUs() {
    const shownavs = document.querySelectorAll('.shownavs');
    shownavs.forEach(nav => {
        nav.classList.toggle('visible');
    });
}
