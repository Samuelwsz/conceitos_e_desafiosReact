import { FormEvent, useState } from "react"
import "./App.css"

interface CounterProps {
  counter: number
  setCounter: React.Dispatch<React.SetStateAction<number>>
}

const Counter = ({ counter, setCounter }: CounterProps) => {
  const handleIncrement = () => {
    setCounter(counter + 1)
  }
  const handleDecrement = () => {
    if (counter < 1) return

    setCounter(counter - 1)
  }
  return (
    <>
      <button onClick={handleDecrement}>Decrementar</button>
      <button onClick={handleIncrement}>Incrementar</button>
      <div>{counter}</div>
    </>
  )
}

interface FormAddUserProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const FormAddUser = ({ setIsOpen }: FormAddUserProps) => {
  const [name, setName] = useState("")

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.log(name)

    setIsOpen(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </>
  )
}

function App() {
  const [counter, setCounter] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <h2>lifting up state</h2>
      <Counter counter={counter} setCounter={setCounter} />
      <Counter counter={counter} setCounter={setCounter} />
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Fechar modal" : "Abrir modal"}
      </button>
      {isOpen && <FormAddUser setIsOpen={setIsOpen} />}
    </>
  )
}

export default App
