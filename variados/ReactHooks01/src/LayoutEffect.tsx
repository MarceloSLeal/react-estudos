import { useEffect, useLayoutEffect, useRef } from "react";

const LayoutEffectTutorial = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useLayoutEffect(() => {
        if (inputRef.current) {
            console.log(inputRef.current.defaultValue);
        } else {
            console.log("Input Null")
        }
    }, []);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.defaultValue = "HELLO";
        }
    }, []);

    return (
        <div className="div1">
            <h2>---useLayoutEffect---</h2>
            <input ref={inputRef} defaultValue="PEDRO" style={{ width: 400, height: 30}} />
        </div>
    )
    
}

export default LayoutEffectTutorial;
