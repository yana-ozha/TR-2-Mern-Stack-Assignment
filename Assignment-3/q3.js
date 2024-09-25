function countdown(number, callback) {
    let intervalId = setInterval(() => {
        console.log(number);
        if (number <= 0) {
            clearInterval(intervalId);
            if (callback) callback();
        }
        number--;
    }, 1000);
}

// Example usage
countdown(5, () => console.log("Countdown finished!"));
