import { useEffect, useLayoutEffect, useRef } from "react";

const LayoutEffectTutorial = () => {
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []);

    useEffect(() => {
        inputRef.current.value = "HELLO";
    }, []);

    return (
        <div className="div1">
            <h2>---useLayoutEffect---</h2>
            <input ref={inputRef} value="PEDRO" style={{ width: 400, height: 30}} />
        </div>
    )
    
}

export default LayoutEffectTutorial;
