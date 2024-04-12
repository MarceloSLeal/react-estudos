import { useCallback, useState } from "react";
import Child from "../components/Child"

const CallBackTutorial = () => {
    const [toggle, setToggle] = useState(false);
    const [data, _] = useState("Yo");

    const returnData = useCallback((name: string) => {
        return data + name;
    }, [data]
    );

    return (
        <div className="div1">
            <h2>---useCallback---</h2>
            <Child returnComment={returnData} />

            <button onClick={() => {setToggle(!toggle); }}> {" "}
            Toggle
            </button>
            {toggle && <h2> toggle </h2>}
        </div>
    );
}

export default CallBackTutorial;

