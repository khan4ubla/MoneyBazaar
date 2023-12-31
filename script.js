function openSignUpForm() {
    // Create a modal overlay
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    // Create the signup form
    const signUpForm = document.createElement('div');
    signUpForm.className = 'sign-up-form';
    signUpForm.innerHTML = `
       <form method="post" action="" name="product" id="product">
            <h1>Apply Now</h1>
            <p style="font-size: 10px;">My money Bazaar</p>
            
            <label for="naem">Name*</label>
            <input class="fil" type="text" name="name" placeholder="Enter Full Name" required>

            <label for="naem">Email*</label>
            <input class="fil" type="text" name="email" placeholder="Enter your Email" required>

            <label for="naem">Mobile number*</label>
            <input class="fil" type="number" name="number" placeholder="Enter your mobile number" required>

            <label for="naem">Amount*</label>
            <input class="fil" type="number" name="amount" placeholder="Enter loan amount">
            <button class="click">Submit &#10132;</button>
            
            <p style="  font-size: 10px; color: rgb(33, 33, 33); margin: 6px;">My money Bazaar</p>

        </form>
    `;
<script>
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyrnhLSgCnEh1BiTaTq5mHC1NltsATpQAzvqwxlvdy9YHw5l1SGvtFWn4LDgBRPMLgy/exec'
        const form = document.forms['product']
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => alert("Thank you! your form is submitted successfully." ))
            .then(() => {  window.location.reload(); })
            .catch(error => console.error('Error!', error.message))
        })
      </script>
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
