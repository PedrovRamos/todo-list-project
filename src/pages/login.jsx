import { useContext, useState } from "react";
import styles from "./Login.module.css"
import Form from "../components/Form";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx"
import Context from "../context/context.js";
import Banner from "../components/Banner.jsx"

// import loginBanner from "../assets/loginBanner.svg"
import loginBanner from "../assets/LoginBanner.svg"

function Login(){

    const {onLogin} = useContext(Context)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const disabled = !email || password.length < 6

    const handleChange = ({target}) => {
        const {name, value} = target;
        name === "email" ? setEmail(value) : setPassword(value)     
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        onLogin(email)
    }

    return(
        <main className={styles.container}>
            <h1>
                Página de Login
            </h1>

            <Banner image={loginBanner}/>

            <Form onSubmit={handleSubmit}>
                <Input placeholder="Digite seu Email"
                type="email"
                name="email"
                required
                onChange={handleChange}/>
                <Input placeholder="Digite sua senha"
                type="password"
                name="password"
                required
                onChange={handleChange}/>

                <Button type="submit" disabled={disabled}>Sign in</Button>
            </Form>
        </main>
    )
}

export default Login;