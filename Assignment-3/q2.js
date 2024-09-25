function countdown(number) {
    let intervalId = setInterval(() => {
        console.log(number);
        if (number <= 0) {
            clearInterval(intervalId);
        }
        number--;
    }, 1000);
}

// Example usage
countdown(5);
