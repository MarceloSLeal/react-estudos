import React, { useState } from "react";


const StateTutorial = () => {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState("");

    const increment = () => {
        setCounter(counter + 1);
    }
    const decrement = () => {
        setCounter(counter - 1);
    }
    const zero = () => {
        setCounter(0);
    }

    const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
       setInputValue(event.target.value);
    }

    return (
        <>
            <div className="div1">
                <h2>---useState---</h2>
                <h1> {counter} </h1>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <button onClick={zero}>0</button>
            </div>
            <div className="div1">
                <input placeholder="Enter something" onChange={updateInput}/>
                <p>{inputValue}</p>
            </div>
        </>
    )
}

export default StateTutorial;
