import { Routes, Route } from "react-router-dom"
import Login from "./pages/login"
import TodoList from "./pages/TodoList"
import AddTodo from "./pages/AddTodo"
import styles from "./App.module.css"

function App() {
  return (
    <main className={styles.container}>
      <Routes>
        <Route path="/todo/add" element={<AddTodo/>}></Route>
        <Route path="/todo" element={<TodoList/>}></Route>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </main>
  )
}

export default App
