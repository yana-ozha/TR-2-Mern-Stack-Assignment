function repeatAction(action, interval, duration) {
    return new Promise(resolve => {
        const intervalId = setInterval(action, interval);
        setTimeout(() => {
            clearInterval(intervalId);
            resolve();
        }, duration);
    });
}

// Example usage
repeatAction(() => console.log("Action executed!"), 1000, 5000).then(() => console.log("Action repeated for 5 seconds!"));
