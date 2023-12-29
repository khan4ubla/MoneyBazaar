function openSignUpForm() {
    // Create a modal overlay
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    // Create the signup form
    const signUpForm = document.createElement('div');
    signUpForm.className = 'sign-up-form';
    signUpForm.innerHTML = `
        <h2>Sign Up</h2>
        <form id="signupForm" onsubmit="return submitSignUpForm()">
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" required>

            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" required>
             
            <label for="email">Email ID:</label>
            <input type="email" id="email" required>

            <label for="mobileNumber">Mobile Number:</label>
            <input type="tel" id="mobileNumber" required>

            <button type="submit">Sign Up</button>
        </form>
    `;

    // Append the form to the overlay
    overlay.appendChild(signUpForm);

    // Append the overlay to the body
    document.body.appendChild(overlay);
}

function submitSignUpForm() {
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const mobileNumber = document.getElementById('mobileNumber').value;

    // You can send form details to your server or via email here

    // Remove the overlay
    document.querySelector('.overlay').remove();

    // Show signup completion message and redirect
    alert('Sign Up Completed! Let\'s apply for a loan now.');
    // Redirect to the loan application page
    window.location.href = 'loan_application.html';

    // Prevent the form from submitting (we handle the submission via JavaScript)
    return false;
}
