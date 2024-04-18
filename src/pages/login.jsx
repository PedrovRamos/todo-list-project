import { useState } from "react";
import styles from "./Login.module.css"
import Form from "../components/Form";
import Input from "../components/Input.jsx";

function Login(){



    return(
        <main className={styles.container}>
            <h1>
                Página de Login
            </h1>

            <Form>
                <Input placeholder="Digite seu Email"/>
                <Input placeholder="Digite sua senha"/>
            </Form>
        </main>
    )
}

export default Login;