import React, { useState } from 'react';
import Greeting from '../components/Greeting';
import ProfileCard from '../components/ProfileCard';
import StatusMessage from '../components/StatusMessage';
import Counter from '../components/Counter';
import LikeButton from '../components/LikeButton';
import Timer from '../components/Timer';
import ColorPicker from '../components/ColorPicker';
import TextInput from '../components/TextInput';
import ToggleSwitch from '../components/ToggleSwitch';
import TodoList from '../components/TodoList';

const App = () => {
    const [color, setColor] = useState('');
    const [likeCount, setLikeCount] = useState(0);
    const [toggleState, setToggleState] = useState(false); // Initialize toggleState
    const todos = ['Buy milk', 'Walk the dog', 'Do laundry'];
    const [textInputValue, setTextInputValue] = useState('');

    return (
        <>
            <h3>1. Simple Props</h3>
            <Greeting name="John" />
            <br /><hr /><br />

            <h3>2. Multiple Props</h3>
            <ProfileCard name="Alice" age={30} location="New York" />
            <br /><hr /><br />

            <h3>3. Conditional Rendering with Props</h3>
            <StatusMessage status="success" />
            <br /><hr /><br />

            <h3>4. useState Basics</h3>
            <Counter />
            <br /><hr /><br />

            <h3>5. Props and useState Interaction</h3>
            <LikeButton likeCount={likeCount} />
            <br /><hr /><br />

            <h3>6. State Initialization with Props</h3>
            <Timer start={60} />
            <br /><hr /><br />

            <h3>7. Updating Parent State from Child</h3>
            <ColorPicker onColorChange={setColor} />
            <h2>Selected Color: {color}</h2>
            <br /><hr /><br />

            <h3>8. Controlled vs Uncontrolled Components</h3>
            <TextInput onChange={setTextInputValue} />
            <p>Text Input Value: {textInputValue}</p>
            <br /><hr /><br />

            <h3>9. Props as Functions</h3>
            <ToggleSwitch toggleState={() => { setToggleState(!toggleState); }} />
            <p>Toggle is: {toggleState ? "ON" : "OFF"}</p>
            <br /><hr /><br />

            <h3>10. Rendering Lists with Props</h3>
            <TodoList todos={todos} />
            <br /><hr /><br />
        </>
    );
};

export default App;
