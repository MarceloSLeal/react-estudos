import { useRef } from "react";

const RefTutorial = () => {

    const inputRef = useRef<HTMLInputElement | null>(null);
    const inputButtonRef = useRef<HTMLInputElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

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
    const setInputButtonClear = () => {
        if (inputButtonRef.current) {
            inputButtonRef.current.value = "";
        }
    }
    const setButtonText = () => {
        if (buttonRef.current && inputButtonRef.current) {
            buttonRef.current.textContent = inputButtonRef.current.value;
            console.log("oi")
        }
    }

    return (
        <div className="div2">
            <h2>---useRef---</h2>
            <input type="text" placeholder="Ex..." ref={inputRef}/>
            <button onClick={setFocus}>Input Focus</button>
            <button onClick={setClear}>Input Clear</button>
            <div>
                <input type="text" placeholder="Change button text"
                    onInput={setButtonText} ref={inputButtonRef} />
                <button onClick={setInputButtonClear} ref={buttonRef}>Input Clear</button>
            </div>
        </div>
    )
}

export default RefTutorial;
