// Function to fetch user data from the API
async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        // Get the user list element
        const userList = document.getElementById('userList');

        // Iterate through the user data and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>Name:</strong> ${user.name}<br>
                <strong>Email:</strong> ${user.email}<br>
                <strong>Address:</strong> ${user.address.street}, ${user.address.city}
            `;
            userList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

// Call the function to fetch and display user data
fetchUserData();
