import { useState } from "react"
import { Link } from "react-router-dom"
import AddTodo from "../components/AddTodo"
import TaskList from "../components/TaskList"

interface Todo {
  id: number
  title: string
  done: boolean
}

let nextId = 3
const initialTodos: Todo[] = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
]

export default function AttMutations() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)

  function handleAddTodo(title: string) {
    todos.push({
      id: nextId++,
      title: title,
      done: false,
    })
  }

  function handleChangeTodo(nextTodo: Todo) {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo
        } else {
          return t
        }
      })
    )
  }

  function handleDeleteTodo(todoId: number) {
    const index = todos.findIndex((t) => t.id === todoId)
    todos.splice(index, 1)
  }

  return (
    <>
      <div className="flex justify-center bg-black gap-5">
        <Link to="/" className="bg-black flex justify-center">
          início
        </Link>
        <Link to="/attmatrizesestado" className="bg-black flex justify-center">
          Matrizes de estado
        </Link>
      </div>

      <div className="bg-black h-screen flex justify-center items-center flex-col">
        <AddTodo onAddTodo={handleAddTodo} />
        <TaskList
          todos={todos}
          onChangeTodo={handleChangeTodo}
          onDeleteTodo={handleDeleteTodo}
        />
      </div>
    </>
  )
}
