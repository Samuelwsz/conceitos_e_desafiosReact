//https://react.dev/learn/preserving-and-resetting-state#challenges
import { useState } from "react"
import { Link } from "react-router-dom"

function Form() {
  const [text, setText] = useState("")
  return (
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      className="text-black"
    />
  )
}

const contacts = [
  { id: 0, name: "Alice", email: "alice@mail.com" },
  { id: 1, name: "Bob", email: "bob@mail.com" },
  { id: 2, name: "Taylor", email: "taylor@mail.com" },
]

function Contact({ contact }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <>
      <p>
        <b>{contact.name}</b>
      </p>
      {expanded && (
        <p>
          <i>{contact.email}</i>
        </p>
      )}
      <button
        onClick={() => {
          setExpanded(!expanded)
        }}
      >
        {expanded ? "Hide" : "Show"} email
      </button>
    </>
  )
}

export default function InputComErroDeTexto() {
  const [showHint, setShowHint] = useState(false)
  //desafio 5 corrijindo o estado perdido na lista
  const [reverse, setReverse] = useState(false)

  const displayedContacts = [...contacts]
  if (reverse) {
    displayedContacts.reverse()
  }

  return (
    <>
      <div className="flex justify-center bg-black gap-5">
        <Link to="/" className="bg-black flex justify-center">
          início
        </Link>
        <Link to="/gerenciandoestado" className="bg-black flex justify-center">
          Voltar
        </Link>
      </div>
      <div className="bg-black h-screen flex justify-center items-center flex-col ">
        <div className="flex flex-col mb-60">
          {showHint && (
            <p>
              <i>Hint: Your favorite city?</i>
            </p>
          )}
          <Form />
          {showHint ? (
            <button
              onClick={() => {
                setShowHint(false)
              }}
            >
              Hide hint
            </button>
          ) : (
            <button
              onClick={() => {
                setShowHint(true)
              }}
            >
              Show hint
            </button>
          )}
        </div>
        <div></div>
      </div>
    </>
  )
}
