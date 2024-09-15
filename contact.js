// Get the submit button and textarea elements
const submitButton = document.getElementById('submit');
const textarea = document.getElementById('form');

// URL where you want to send the data (replace with your actual URL)
const url = 'https://discord.com/api/webhooks/1284469453920272387/ny3L5CpMZN3SXeqsNM_Q5PVwCtGYwF1UkiVXWbXB52Y80xpk6FEd8uZT3BqiYbTJVwBC';

// Add an event listener to the submit button
submitButton.addEventListener('click', function() {
    // Get the content of the textarea
    const message = textarea.value;

    // Create the data object to send (change based on webhook's expected format)
    const data = {
        content: message  // or any other key your webhook expects
    };

    // Send the data to the URL using fetch
    fetch(url, {
        method: 'POST', // Use POST to send data
        headers: {
            'Content-Type': 'application/json'  // Sending JSON data
        },
        body: JSON.stringify(data)  // Convert the data object to a JSON string
    })
    .then(response => {
        // Handle the success response
        if (response.ok) {
            document.getElementById('response').innerText = 'Message sent successfully!';
        } else {
            document.getElementById('response').innerText = 'Failed to send the message!';
        }
    })
    .catch(error => {
        // Handle any errors during the request
        console.error('Error:', error);
        document.getElementById('response').innerText = 'Error sending the message!';
    });
});
