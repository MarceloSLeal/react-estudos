import { useRef } from "react";

const RefTutorial = () => {

    const inputRef = useRef<HTMLInputElement | null>(null);

    const setFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }
    const setClear = () => {
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    }

    return (
        <div className="div2">
            <h2>---useRef---</h2>
            <input type="text" placeholder="Ex..." ref={inputRef}/>
            <button onClick={setFocus}>Input Focus</button>
            <button onClick={setClear}>Input Clear</button>
        </div>
    )
}

export default RefTutorial;
