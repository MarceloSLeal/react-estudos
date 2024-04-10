import { useReducer } from "react";

const initState = { count: 0, text: false };

const enum REDUCER_ACTION_TYPE {
    INCREMENT,
    TOGGLESHOWTEXT,
    ZERO,
}

type ReducerAction = {
    type: REDUCER_ACTION_TYPE,
    payload?: boolean,
}

const reducer = (state: typeof initState, action: ReducerAction): typeof initState => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.INCREMENT:
            return { ...state, count: state.count + 1, text: state.text }
        case REDUCER_ACTION_TYPE.TOGGLESHOWTEXT:
            return { count: state.count, text: !state.text }
        case REDUCER_ACTION_TYPE.ZERO:
            return { ...state, count: state.count = 0, text: state.text }
        default:
            return state;
    }
}

const ReducerTutorial = () => {

    // const [count, setCount] = useState(0);
    // const [showText, setShowText] = useState(true);
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <div className="div2">
            <h2>---useReducer---</h2>
            <h1>{state.count}</h1>
            <button onClick={() => {
                dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
                dispatch({ type: REDUCER_ACTION_TYPE.TOGGLESHOWTEXT });
            }
            }>
                Click Here </button>
            <button onClick={() => {
                dispatch({ type: REDUCER_ACTION_TYPE.ZERO });
                dispatch({ type: REDUCER_ACTION_TYPE.TOGGLESHOWTEXT });
            }}> ZERO </button>
            {state.text && <p>This is a text</p>}
        </div>
    )
}

export default ReducerTutorial;
