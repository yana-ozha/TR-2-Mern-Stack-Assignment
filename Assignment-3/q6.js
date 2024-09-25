function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

function delayedLogSequence(messages) {
    let promise = Promise.resolve();

    messages.forEach(({ message, delay }) => {
        promise = promise.then(() => wait(delay).then(() => console.log(message)));
    });
}

// Example usage
delayedLogSequence([
    { message: "Message 1", delay: 1000 },
    { message: "Message 2", delay: 2000 },
    { message: "Message 3", delay: 3000 }
]);
