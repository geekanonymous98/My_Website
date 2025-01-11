
document.addEventListener('DOMContentLoaded', function () {

    const toggleBtn = document.querySelector('.toggleButton');
    const sunIcon = document.querySelector('.sunIcon')
    const moonIcon = document.querySelector('.moonIcon')
    const body = document.body;
    const menuBtn = document.getElementById('menuBtn');
    const menu = document.getElementById('menu');


    toggleBtn.addEventListener('click', function() {
        sunIcon.classList.toggle('disable');
        moonIcon.classList.toggle('disable')
        
        body.classList.toggle('dark-mode');
        console.log('Cliquei no toggle');
    });

    menuBtn.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

});
