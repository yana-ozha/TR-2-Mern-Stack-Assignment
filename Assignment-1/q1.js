// Function to concatenate first and last names



function getFullName(firstName, lastName) {
    // Concatenate first and last name with a space in between
    let fullName = firstName + " " + lastName;
    return fullName;
}

// Example usage:
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");

// Get the full name by calling the function
let fullName = getFullName(firstName, lastName);

// Print the full name
console.log("Full name: " + fullName);

console.log("hello")
