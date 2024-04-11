import { useState, createContext } from "react";
import Login from '../components/Login';
import User from '../components/User'

export const AppContext = createContext({ username: "", setUsername: (_: string) => {}});

const ContextTutorial = () => {
    const [username, setUsername] = useState("");

    return (
        <div className="div1">
            <h2>---useContext---</h2>
            <AppContext.Provider value={{username, setUsername}}>
                <Login /> <User />
            </AppContext.Provider>
        </div>
    );
}

export default ContextTutorial;
