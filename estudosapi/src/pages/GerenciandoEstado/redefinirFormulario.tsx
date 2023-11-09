//https://react.dev/learn/preserving-and-resetting-state#challenges
import { Link } from "react-router-dom"
import { useState } from "react"

interface Image {
  place: string
  src: string
}

interface Contact {
  id: number
  name: string
  email: string
}

interface EditContactProps {
  initialData: Contact
  onSave: (updatedData: Contact) => void
}

interface ContactListProps {
  contacts: Contact[]
  selectedId: number
  onSelect: (id: number) => void
}

let images = [
  {
    place: "Penang, Malaysia",
    src: "https://i.imgur.com/FJeJR8M.jpg",
  },
  {
    place: "Lisbon, Portugal",
    src: "https://i.imgur.com/dB2LRbj.jpg",
  },
  {
    place: "Bilbao, Spain",
    src: "https://i.imgur.com/z08o2TS.jpg",
  },
  {
    place: "Valparaíso, Chile",
    src: "https://i.imgur.com/Y3utgTi.jpg",
  },
  {
    place: "Schwyz, Switzerland",
    src: "https://i.imgur.com/JBbMpWY.jpg",
  },
  {
    place: "Prague, Czechia",
    src: "https://i.imgur.com/QwUKKmF.jpg",
  },
  {
    place: "Ljubljana, Slovenia",
    src: "https://i.imgur.com/3aIiwfm.jpg",
  },
]

const initialContacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
]

//desafio 3
function EditContact({ initialData, onSave }: EditContactProps) {
  const [name, setName] = useState(initialData.name)
  const [email, setEmail] = useState(initialData.email)
  return (
    <>
      <section className="my-3">
        <div className="flex flex-col items-center">
          <label>
            Name:{" "}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-black mb-3"
            />
          </label>
          <label>
            Email:{" "}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-black"
            />
          </label>
        </div>
        <div className="flex justify-center gap-3 my-3">
          <button
            onClick={() => {
              const updatedData = {
                id: initialData.id,
                name: name,
                email: email,
              }
              onSave(updatedData)
            }}
            className="border border-yellow-300 px-1"
          >
            Save
          </button>
          <button
            onClick={() => {
              setName(initialData.name)
              setEmail(initialData.email)
            }}
            className="border border-yellow-300 px-1"
          >
            Reset
          </button>
        </div>
      </section>
    </>
  )
}

//desafio 3
function ContactList({ contacts, selectedId, onSelect }: ContactListProps) {
  return (
    <>
      <section>
        <ul className="flex flex-row justify-center gap-5 mb-3">
          {contacts.map((contact) => (
            <li key={contact.id} className="border border-yellow-300 p-5">
              <button
                onClick={() => {
                  onSelect(contact.id)
                }}
              >
                {contact.id === selectedId ? (
                  <b>{contact.name}</b>
                ) : (
                  contact.name
                )}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default function RedefinirFormulario() {
  //desafio 4
  const [index, setIndex] = useState(0)
  const hasNext = index < images.length - 1

  //desafio 3
  const [contacts, setContacts] = useState<Contact[]>(initialContacts)
  const [selectedId, setSelectedId] = useState(0)

  function handleClick() {
    if (hasNext) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }

  let image: Image = images[index]

  const selectedContact: Contact | undefined = contacts.find(
    (c) => c.id === selectedId
  )

  function handleSave(updatedData: Contact) {
    const nextContacts = contacts.map((c) => {
      if (c.id === updatedData.id) {
        return updatedData
      } else {
        return c
      }
    })
    setContacts(nextContacts)
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
        <div className="mb-48">
          <button
            onClick={handleClick}
            className="border border-yellow-300 px-1"
          >
            Next
          </button>
          <h3>
            Image {index + 1} of {images.length}
          </h3>
          <img key={image.src} src={image.src} className="h-36 w-36" alt="" />
          <p>{image.place}</p>
        </div>
        <div>
          <ContactList
            contacts={contacts}
            selectedId={selectedId}
            onSelect={(id) => setSelectedId(id)}
          />
          <hr />
          <EditContact
            key={selectedId}
            initialData={selectedContact!}
            onSave={handleSave}
          />
        </div>
      </div>
    </>
  )
}
