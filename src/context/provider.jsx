import { useCallback, useMemo, useState } from "react";
import Context from "./context";
import { useNavigate } from "react-router-dom";

function Provider({children}){
    const navigate = useNavigate();
    
    const [user, setUser] = useState("");

    const onLogin = useCallback((email) => {
            setUser(email);
            navigate('/todo');
        }
    , [setUser, navigate])


    const value = useMemo(()=> ({
        user,
        onLogin
    }), [user, onLogin])

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider> 
    )
}

export default Provider;