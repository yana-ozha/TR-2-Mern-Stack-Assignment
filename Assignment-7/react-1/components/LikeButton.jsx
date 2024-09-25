// LikeButton.js
import React, { useState } from 'react';

const LikeButton = ({ likeCount }) => {
    const [count, setCount] = useState(likeCount);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Likes: {count}</button>
        </div>
    );
};

export default LikeButton;
