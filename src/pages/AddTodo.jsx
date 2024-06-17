import { useContext, useState } from "react";
import Context from "../context/context";
import styles from './AddTodo.module.css';
import Banner from "../components/Banner";
import AddTodoBanner from '../assets/AddTodoBanner.svg';
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";

function AddTodo(){

    const {user, addNewTodo} = useContext(Context);
    const [task, setTask] = useState('');

    const handleChange = ({target})=>{
        setTask(target.value);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        addNewTodo(task);
    }

    return (
        <main className={styles.container}>
            <h1>New Task</h1>
            <Banner image={AddTodoBanner}/>

            <Form onSubmit={handleSubmit}>
                <Input placeholder='Add your task'
                type="text"
                name="addtask" 
                required
                onChange={handleChange}/>
                <Button type="submit">Add to list</Button>
            </Form>

        </main>
    )

}

export default AddTodo;