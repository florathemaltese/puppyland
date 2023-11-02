(function() {
    document.addEventListener('DOMContentLoaded', function () {
        // Modal toggle functionality
        const subscribeButtons = document.querySelectorAll('.btn-subscribe');
        const modal = document.getElementById('subscribeModal');
        const closeBtn = modal.querySelector('.close-btn');

        subscribeButtons.forEach(btn => {
            btn.addEventListener('click', function (event) {
                event.preventDefault();
                modal.style.display = 'block';
                resetForm();
            });
        });

        closeBtn.onclick = function () {
            modal.style.display = 'none';
        };

        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                modal.style.display = 'none';
            }
        });

        // Function to reset the form
        function resetForm() {
            const form = document.querySelector('.form');
            form.reset();
            const errors = form.querySelectorAll('.error');
            errors.forEach(err => {
                err.classList.remove('active');
            });
        }

        // Function to validate a field
        function validateField(fieldId, errorId) {
            let field = document.getElementById(fieldId);
            let errorElement = document.getElementById(errorId);
            let emailFormatErrorElement = document.getElementById('emailFormatError');
            
            if (!field.value.trim()) {
                errorElement.classList.add('active');
                emailFormatErrorElement.classList.remove('active');
                return false;
            } else if (fieldId === 'email' && !field.value.includes('@')) {
                emailFormatErrorElement.classList.add('active');
                errorElement.classList.remove('active');
                return false;
            } else {
                emailFormatErrorElement.classList.remove('active');
            }
            errorElement.classList.remove('active');
            return true;
        }

        document.querySelector('.form').addEventListener('submit', function(event) {
            let isValid = true;

            // Name validation
            if (!validateField('name', 'nameError')) {
                isValid = false;
            }

            // Email validation
            if (!validateField('email', 'emailError')) {
                isValid = false;
            }

            // Confirm Email validation
            let emailField = document.getElementById('email');
            let confirmEmailField = document.getElementById('confirmEmail');
            if (emailField.value !== confirmEmailField.value) {
                isValid = false;
                document.getElementById('confirmEmailError').classList.add('active');
            } else {
                document.getElementById('confirmEmailError').classList.remove('active');
            }

            if (!isValid) {
                event.preventDefault(); // Stop the form from submitting
            }
        });

        // Add 'input' event listener for the name validation
        document.getElementById('name').addEventListener('input', function() {
            validateField('name', 'nameError');
        });

        // Confirm Email is not empty
        document.getElementById('confirmEmail').addEventListener('input', function() {
            validateField('confirmEmail', 'confirmEmailError');
        });
    });
})();

