import axios from "axios";
import { useEffect, useState, useMemo } from "react";

interface IComents {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
}

 const MemoTutorial = () => {
    const [data, setData] = useState<IComents[]>([]);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data);
            });
    }, []);


    const findLongestName = (comments: IComents[]) => {
        if (!comments) return null;

        let longestName = "";
        for (let i = 0; i < comments.length; i++) {
            let currentName = comments[i].name;
            if (currentName.length > longestName.length) {
                longestName = currentName;
            }
        }

        console.log("THIS WAS COMPUTED");

        return longestName;
    }

    const getLongestName = useMemo(() => findLongestName(data), [data])

    return (
        <div className="div2">
            <h2>---useMemo---</h2>
            {data.length > 0 && (
                <div> {getLongestName} </div>
            )}
            <button onClick={() => {
                setToggle(!toggle); 
            }}> {" "} Toggle
            </button>
            {toggle && <h2> toggle </h2>}
        </div>
    )
}

export default MemoTutorial;
