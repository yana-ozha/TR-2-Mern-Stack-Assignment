function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

function countdown(number) {
    return new Promise((resolve) => {
        const intervalId = setInterval(async () => {
            console.log(number);
            if (number <= 0) {
                clearInterval(intervalId);
                resolve();
            }
            number--;
            await wait(1000); // Wait for 1 second
        }, 1000);
    });
}

// Example usage
countdown(5).then(() => console.log("Countdown completed!"));
