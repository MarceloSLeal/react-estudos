import { useEffect, useRef, useState } from "react";
import axios from "axios";

interface IComents {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
}

const EffectTutorial = () => {
    const [data, setData] = useState<IComents[]>([]);
    const [count, setCount] = useState(0);
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            axios.get("https://jsonplaceholder.typicode.com/comments")
                .then((response) => {
                    setData(response.data);
                    console.log(response.data);
                });
        }
    }, []);

    return (
        <div className="div1">
            <h2>---useEffect---</h2>
            {data.length > 0 && (
                <div>
                    <div>PostId: {data[count].postId} </div>
                    <div>Id: {data[count].id} </div>
                    <div>Name: {data[count].name} </div>
                    <div>Email: {data[count].email} </div>
                    <div>Body: {data[count].body} </div>
                    <h2>{count}</h2>
                    <button onClick={() => {
                        setCount((count + 1) % data.length);
                    }}> Click </button>
                </div>
            )}
        </div>
    )
}

export default EffectTutorial;
