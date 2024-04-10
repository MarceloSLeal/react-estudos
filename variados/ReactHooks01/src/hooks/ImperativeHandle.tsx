import { useRef } from "react";
import Button, { ButtonRef } from '../components/Button.tsx'

const ImperativeHandle = () => {
    const buttonRef = useRef<ButtonRef>(null);

    return (
        <div className="div2">
            <h2>---useImperativeHandle---</h2>
            <button onClick={() => {
                buttonRef.current && buttonRef.current
                    .alterToggle()
            }}>Button From Parent</button>
            <Button ref={buttonRef} />
        </div>
    );
}

export default ImperativeHandle;
