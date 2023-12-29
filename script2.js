function submitApplication(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Add logic to submit the application (you can send the data to your server here)

    // Show the success popup
    document.getElementById('success-popup').style.display = 'block';

    // Redirect to the about page after a delay (e.g., 3 seconds)
    setTimeout(function() {
        window.location.href = 'aboutus.html'; // Update the URL to your about page
    }, 3000);
}
