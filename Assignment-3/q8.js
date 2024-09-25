function randomDelayMessage(message) {
    const delay = Math.floor(Math.random() * 5000) + 1000; // Random delay between 1 and 5 seconds
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    });
}

// Example usage
randomDelayMessage("This message has a random delay.").then(() => console.log("Message logged!"));
