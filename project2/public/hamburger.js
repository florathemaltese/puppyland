document.addEventListener("DOMContentLoaded", function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        console.log("Button clicked!");

        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        } else {
            navLinks.classList.add('active');
        }
    });
});
