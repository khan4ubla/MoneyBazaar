// Set the initial countdown value
var countdownValue = 20;

// Function to update the countdown and redirect after 30 seconds
function updateCountdown() {
    // Get the countdown element
    var countdownElement = document.getElementById('countdown');

    // Update the countdown value
    countdownElement.innerText = countdownValue;

    // If countdown is not yet 0, decrement the value and set a timeout to call this function again
    if (countdownValue > 0) {
        countdownValue--;
        setTimeout(updateCountdown, 1000); // Update every 1000 milliseconds (1 second)
    } else {
        // Redirect to another page when the countdown reaches 0
        window.location.href = 'main.html';
    }
}

// Call the updateCountdown function when the page loads
window.onload = updateCountdown;
