import React from 'react';

const ColorPicker = ({ onColorChange }) => {
    const colors = ['red', 'blue', 'green', 'yellow'];

    return (
        <div>
            {colors.map(color => (
                <button key={color} onClick={() => onColorChange(color)} style={{ backgroundColor: color }}>
                    {color}
                </button>
            ))}
        </div>
    );
};

export default ColorPicker;
