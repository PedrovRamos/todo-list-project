import { useContext } from "react";
import Context from "../context/context";

function TodoList(){

    const {user} = useContext(Context);
    return(
        <h1>
            Email logado : {user}
        </h1>
    )
}

export default TodoList;