import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { todosApi, addTodo, updateTodo } from "../services/todosApi";
import Context from "./context";

function Provider({children}){
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState("");
    const [todos, setTodos] = useState([]);
    const navigate = useNavigate();

    const onLogin = useCallback((email) => {
            setUser(email);
            navigate('/todo');
        }
    , [setUser, navigate])

    const getTodos = async () => {
        setLoading(true);
        const result = await todosApi();
        setTodos(result);
        setLoading(false)
    }

    const addNewTodo = async (task)=>{
        const result = await addTodo(task);
        setTodos((prevState)=>[...prevState, result]);
        navigate('/todo');
    }

    const editTodo = async (newTodo) => {
        await updateTodo(newTodo);
        console.log(todos)
        const updatedTodos = todos.map((todo) =>
            todo.id === newTodo.id ? { ...todo, checked: !todo.checked } : todo
          );
        //   console.log(updatedTodos)
      
          setTodos(updatedTodos);
    }

    const value = useMemo(()=> ({
        user,
        onLogin,
        getTodos,
        todos,
        loading,
        addNewTodo,
        editTodo
    }), [user, onLogin, getTodos, todos, loading, addNewTodo, editTodo])

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider> 
    )
}

export default Provider;