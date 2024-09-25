import React, { useState } from 'react';

const TextInput = ({ onChange }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
        onChange(e.target.value);
    };

    return (
        <input type="text" value={value} onChange={handleChange} />
    );
};

export default TextInput;
