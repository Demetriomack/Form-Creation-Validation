
<script>
document.addEventListener('DOMContentLoaded', function () {
    // Select the form and feedback division
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Add event listener to the form for submission
    form.addEventListener('submit', function (event) {
        // Prevent form submission to the server
        event.preventDefault();

        // Retrieve and trim input values
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize validation variables
        let isValid = true;
        let messages = [];

        // Validate username
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

                // Validate email
                if (!email.includes('@') || !email.includes('.')) {
                    isValid = false;
                    messages.push("Email must contain '@' and '.' characters.");
                }

                // Validate password
                if (password.length < 8) {
                    isValid = false;
                    messages.push("Password must be at least 8 characters long.");
                }

            }

            // Display feedback
            feedbackDiv.style.display = 'block';

            if (isValid) {
                feedbackDiv.textContent = 'Registration successful!';
                feedbackDiv.style.color = '#28a745'; // Green color for success
            } else {
                feedbackDiv.innerHTML = messages.join('<br>');
                feedbackDiv.style.color = '#dc3545'; // Red color for errors
            }
        });
    });
</script>