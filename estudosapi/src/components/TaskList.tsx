import { useState } from "react"

interface Todo {
  id: number
  title: string
  done: boolean
}

interface TaskListProps {
  todos: Todo[]
  onChangeTodo: (todo: Todo) => void
  onDeleteTodo: (todoId: number) => void
}

interface TaskProps {
  todo: Todo
  onChange: (todo: Todo) => void
  onDelete: (todoId: number) => void
}

export default function TaskList({
  todos,
  onChangeTodo,
  onDeleteTodo,
}: TaskListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </li>
      ))}
    </ul>
  )
}

function Task({ todo, onChange, onDelete }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false)
  let todoContent
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value,
            })
          }}
          className="text-black"
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    )
  } else {
    todoContent = (
      <>
        {todo.title}
        <button
          onClick={() => setIsEditing(true)}
          className="border border-yellow-300 px-1 mx-2"
        >
          Edit
        </button>
      </>
    )
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          onChange({
            ...todo,
            done: e.target.checked,
          })
        }}
      />
      {todoContent}
      <button
        onClick={() => onDelete(todo.id)}
        className="border border-yellow-300 px-1 mx-2"
      >
        Delete
      </button>
    </label>
  )
}
