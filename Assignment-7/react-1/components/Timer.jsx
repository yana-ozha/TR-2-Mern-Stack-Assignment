import React, { useState, useEffect } from 'react';

const Timer = ({ start }) => {
    const [time, setTime] = useState(start);

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(prevTime => prevTime > 0 ? prevTime - 1 : 0);
        }, 1000);
        return () => clearInterval(timerId);
    }, []);

    return <h2>Time Remaining: {time} seconds</h2>;
};

export default Timer;
