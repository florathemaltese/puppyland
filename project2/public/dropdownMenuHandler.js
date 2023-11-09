(function() {    
    "use strict";
    document.addEventListener('DOMContentLoaded', function() {
        let navItem = document.querySelector(".nav-links li:nth-child(2) > a"); // Select "About Us" link
        let dropdown = document.querySelector(".nav-links .dropdown"); // Select the dropdown menu

        // Click event listener to toggle visibility of the dropdown menu
        navItem.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default behavior of "About Us" link
            dropdown.classList.toggle('open'); // Toggle 'open' class
        });

        // Add an event listener to close the dropdown menu when clicking elsewhere on the page
        document.addEventListener('click', function(event) {
            if (!navItem.contains(event.target)) {
                dropdown.classList.remove('open');
            }
        });

        // To enable keyboard navigation, we can listen for the keydown event
        navItem.addEventListener('keydown', function(event) {
            if (event.key === "Enter" || event.key === "Space") { // Check if it's the Enter or Space key
                event.preventDefault(); // Prevent default behavior
                dropdown.classList.toggle('open'); // Toggle 'open' class
            }
        });
    });
})();
