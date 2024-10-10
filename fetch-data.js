
<script>
// Initialize the async function to fetch user data
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the data container element
    const dataContainer = document.getElementById('api-data');

     // Fetch data using try-catch
     try {
        // Fetch the data from the API
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create and append the user list
        const userList = document.createElement('ul');

        users.forEach(user => {
            // Create a list item for each user
            const listItem = document.createElement('li');
            listItem.textContent = user.name;  // Set the text content to user's name
            userList.appendChild(listItem);    // Append the list item to the user list
        });

            // Append the user list to the data container
            dataContainer.appendChild(userList);
        } catch (error) {
            // Handle errors by clearing and showing a failure message
            dataContainer.innerHTML = 'Failed to load user data.';
        }
    }

    // Invoke fetchUserData when the DOM content is fully loaded
    document.addEventListener('DOMContentLoaded', fetchUserData);
</script>