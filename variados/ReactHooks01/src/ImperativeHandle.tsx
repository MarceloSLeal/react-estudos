import React, { useRef } from "react";
import Button from "./Button.tsx"

const ImperativeHandle = () => {
    const buttonRef = useRef(null);
    return (
        <div className="div2">
            <h2>---useImperativeHandle---</h2>
            <button onClick={() => {buttonRef.current.alterToggle()}}>Button From Parent</button>
            <Button ref={buttonRef}/>
        </div>
    );
}

export default ImperativeHandle;
