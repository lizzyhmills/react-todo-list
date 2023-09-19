import { useState } from "react"
import { NewToDoForm } from "./NewToDoForm"
import "./styles.css"

export default function App () {
  // const [ newItem, setNewItem ] = useState("")
  const [ todos, setTodos ] = useState([])

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteToDo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
  <>
    <NewToDoForm />
    <h1 className="header">Todo List</h1>
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
        return  (
          <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)}/>
              {todo.title}
            </label>
            <button onClick={() => deleteToDo(todo.id)} className="btn btn-danger">Delete</button>
        </li>
        )
      })}
    </ul>
  </>
  )
}
