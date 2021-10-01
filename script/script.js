var togle = document.querySelector('.menu-toggle input');
var nav = document.querySelector('nav ul');


togle.addEventListener('click', function() {
    nav.classList.toggle('slide');
})