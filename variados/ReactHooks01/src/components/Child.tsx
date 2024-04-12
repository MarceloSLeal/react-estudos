import { useEffect } from "react";

interface Props {
    returnComment: (name: string) => string;
}

const Child = ({ returnComment }: Props) => {
    useEffect(() => {
        console.log("FUNCTION CALLBACK WAS CALLED");
    }, [returnComment]);

    return <div> {returnComment("Marcelo")}</div>
}

export default Child;
