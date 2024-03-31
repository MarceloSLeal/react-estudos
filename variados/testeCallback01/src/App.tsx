import React, { useState, useCallback } from 'react';

function App() {
    const [count, setCount] = useState<number>(0);
    const [text, setText] = useState<string>("");
    const [check, setCheck] = useState<boolean>(false);

    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count]);
    const addText = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }, [text]);
    const addCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        setCheck(isChecked);
    }, []);

    return (
        <div>
            <p>Count: {count}</p>
            <ChildComponent increment={increment} />
            <p>Text: {text}</p>
            <AddInput addText={addText} />
            <p>CheckBox: {check.toString()}</p>
            <AddCheck addCheck={addCheck}/>
        </div>
    );
}

function ChildComponent({ increment }: { increment: () => void }) {
    return <button onClick={increment}>Increment</button>;
}
function AddInput({ addText }: { addText: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
    return <input type="text" placeholder="Type Here" onChange={addText}></input>;
}
function AddCheck({ addCheck }: { addCheck: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
    return <input type="checkbox" onChange={addCheck}></input>;
}

export default App
