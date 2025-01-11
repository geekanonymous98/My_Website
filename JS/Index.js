
const toggleBtn = document.getElementById('toggleBtn');
const body = document.body;
const bgImage = document.getElementById('bgd1');
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

toggleBtn.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    // if (body.classList.contains('dark-mode')) {
    //     bgImage.src = 'dark-mode-image.svg';
    // } else {
    //     bgImage.src = 'light-mode-image.svg';
    // }
});

menuBtn.addEventListener('click', function() {
    menu.classList.toggle('active');
});
