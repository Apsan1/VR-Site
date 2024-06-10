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
            document.getElementsByClassName('girl-hero')[0].style.display = 'block';
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

// Testimonial Carousel
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.testimonial-carousel');
    const testimonial = document.querySelectorAll('.testimonial');
    const prevButton = document.getElementById('testimonial-prev');
    const nextButton = document.getElementById('testimonial-next');

    function moveNext() {
        const firstFeedback = carousel.firstElementChild;
        carousel.appendChild(firstFeedback);
    }

    function movePrev() {
        const lastFeedback = carousel.lastElementChild;
        carousel.prepend(lastFeedback);
    }

    nextButton.addEventListener('click', moveNext);
    prevButton.addEventListener('click', movePrev);
});