function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

async function delayedLogSequence(messages) {
    for (const { message, delay } of messages) {
        await wait(delay);
        console.log(message);
    }
}

// Example usage
(async () => {
    await delayedLogSequence([
        { message: "Message 1", delay: 1000 },
        { message: "Message 2", delay: 2000 },
        { message: "Message 3", delay: 3000 }
    ]);
})();
