import { forwardRef, useImperativeHandle, useState } from "react";

export interface ButtonRef {
    alterToggle: () => void;
}

const Button = forwardRef<ButtonRef>((_, ref) => {
    const [toggle, setToggle] = useState(false);

    useImperativeHandle(ref, () => ({
        alterToggle() {
            setToggle(!toggle);
        }
    }));
    return (
        <>
            <button>Button From Child</button>
            {toggle && <span>Toggle</span>}
        </>
    );
});

export default Button;
