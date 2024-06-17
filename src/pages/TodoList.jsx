import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context/context";
import Banner from "../components/Banner";
import styles from "./TodoList.module.css"
import TodoBanner from "../assets/TodoBanner.svg"
import Todo from "../components/Todo";
import Button from "../components/Button";

function TodoList(){

    const {user, todos, getTodos, Loading} = useContext(Context);

    const navigate = useNavigate();

    useEffect(()=>{
        getTodos();
    }, [])

    return(
        <main className={styles.container}>
            <h1>user email: {user}</h1>
            <Banner image={TodoBanner} />
            <Button onClick={()=> navigate("/todo/add")}>Add New Task</Button>
            <ul>
            {Loading ? <p>Loading</p> : todos.map((todo) => <Todo todoData={todo} key={todo.id}/>)}
            </ul>
        </main>
    )
}

export default TodoList;