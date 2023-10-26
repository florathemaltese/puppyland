// Function to validate a field
function validateField(fieldId, errorId, errorMessage) {
    let field = document.getElementById(fieldId);
    let errorElement = document.getElementById(errorId);
    
    if (!field.value.trim()) {
        errorElement.innerText = errorMessage;
        errorElement.classList.add('active');
        return false;
    } else {
        errorElement.innerText = "";
        errorElement.classList.remove('active');
        return true;
    }
}

document.querySelector('.form').addEventListener('submit', function(event) {
    let isValid = true;

    // Name validation
    if (!validateField('name', 'nameError', 'Warning! Name is required!')) {
        isValid = false;
    }

    // Email validation
    if (!validateField('email', 'emailError', 'Warning! Email is required!')) {
        isValid = false;
    }

    // Confirm Email validation
    let emailField = document.getElementById('email');
    let confirmEmailField = document.getElementById('confirmEmail');
    if (emailField.value !== confirmEmailField.value) {
        isValid = false;
        document.getElementById('confirmEmailError').innerText = "Warning！ Emails must match!";
        document.getElementById('confirmEmailError').classList.add('active');
    } else {
        document.getElementById('confirmEmailError').innerText = "";
        document.getElementById('confirmEmailError').classList.remove('active');
    }

    if (!isValid) {
        event.preventDefault(); // Stop the form from submitting
    }
});

// Add 'input' event listener for the name validation
document.getElementById('name').addEventListener('input', function() {
    validateField('name', 'nameError', 'Warning! Name is required!');
});
