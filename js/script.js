const items = document.querySelectorAll('.landing-item');
const radio = document.querySelectorAll('.radio-buttons input');
const radio1 = document.getElementById('radio1');
const radio2 = document.getElementById('radio2');
const totalItems = items.length;
let currentItem = 0;
let isEnabled = true;

function changeItem(index) {
    currentItem = (index + totalItems) % totalItems;
    items.forEach((item, i) => {
        item.style.display = i === currentItem ? 'flex' : 'none';
    });
}

document.getElementById('next').addEventListener('click', () => {
    if (isEnabled) {
        changeItem(currentItem + 1);
    }
});

document.getElementById('prev').addEventListener('click', () => {
    if (isEnabled) {
        changeItem(currentItem - 1);
    }
});

radio1.addEventListener('click', () => {
    changeItem(0);        });

radio2.addEventListener('click', () => {
    changeItem(1);
});