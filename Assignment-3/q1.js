function delayedMessage(message, delay) {
    setTimeout(() => {
        console.log(message);
    }, delay);
}

// Example usage
delayedMessage("Hello after 2 seconds!", 2000);
