import { useState } from "react"

interface AddTodoProps {
  onAddTodo: (title: string) => void
}

export default function AddTodo({ onAddTodo }: AddTodoProps) {
  const [title, setTitle] = useState("")
  return (
    <>
      <input
        placeholder="Add todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="text-black"
      />
      <button
        onClick={() => {
          setTitle("")
          onAddTodo(title)
        }}
        className="border border-yellow-300 px-1 m-2"
      >
        Add
      </button>
    </>
  )
}
