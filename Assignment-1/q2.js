// Function to check if the number is positive, negative, or zero
function checkNumber(number) {
    if (number > 0) {
        console.log("Positive");
    } else if (number < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}

// Example usage:
let number = parseFloat(prompt("Enter a number:"));

// Call the function to check the number
checkNumber(number);
