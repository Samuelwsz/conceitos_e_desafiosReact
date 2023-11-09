//https://react.dev/learn/preserving-and-resetting-state#challenges
import { useState } from "react"
import { Link } from "react-router-dom"

interface Contact {
  id: number
  name: string
  email: string
}

interface ContactProps {
  contact: Contact
}

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

const contacts: Contact[] = [
  { id: 0, name: "Alice", email: "alice@mail.com" },
  { id: 1, name: "Bob", email: "bob@mail.com" },
  { id: 2, name: "Taylor", email: "taylor@mail.com" },
]
//desafio 5
function Contact({ contact }: ContactProps) {
  const [expanded, setExpanded] = useState(false)
  return (
    <>
      <div className="flex gap-3 items-center">
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
          className="border border-yellow-300 px-1 m-1"
        >
          {expanded ? "Hide" : "Show"} email
        </button>
      </div>
    </>
  )
}

export default function InputComErroDeTexto() {
  const [showHint, setShowHint] = useState<boolean>(false)
  //desafio 5 corrijindo o estado perdido na lista
  const [reverse, setReverse] = useState<boolean>(false)

  const displayedContacts: Contact[] = [...contacts]
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
        <div className="flex flex-col mb-20">
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
        <div className="mb-80">
          <label className="items-center flex gap-1">
            <input
              type="checkbox"
              checked={reverse}
              onChange={(e) => {
                setReverse(e.target.checked)
              }}
            />
            Show in reverse order
          </label>
          <ul>
            {displayedContacts.map((contact) => (
              <li key={contact.id}>
                <Contact contact={contact} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
