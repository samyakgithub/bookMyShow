document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    if (validateForm()) {
        alert('Form submitted successfully!');
        // Form submission logic goes here
    }
});

function sendPhoneOtp() {
    alert('Phone OTP sent!');
    // Implement logic to send phone OTP
}

function sendEmailOtp() {
    alert('Email OTP sent!');
    // Implement logic to send email OTP
}

function validateForm() {
    let valid = true;

    const phoneOtp = document.getElementById('phoneOtp').value.trim();
    const emailOtp = document.getElementById('emailOtp').value.trim();

    if (phoneOtp.length !== 6) {
        alert('Invalid phone OTP');
        valid = false;
    }

    if (emailOtp.length !== 6) {
        alert('Invalid email OTP');
        valid = false;
    }

    return valid;
}
