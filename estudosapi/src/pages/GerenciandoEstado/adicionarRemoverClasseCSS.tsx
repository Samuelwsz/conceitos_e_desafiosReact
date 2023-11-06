import { useState } from "react"
import { Link } from "react-router-dom"

export default function AdicionarRemoverClasseCSS() {
  const [isActive, setIsActive] = useState(true)

  const [isEditing, setIsEditing] = useState(false)
  const [firstName, setFirstName] = useState("a")
  const [lastName, setLastName] = useState("b")
  const fullName = firstName + " " + lastName
  if (isActive) {
    return (
      <>
        <div className="flex justify-center bg-black gap-5">
          <Link to="/" className="bg-black flex justify-center">
            início
          </Link>
          <Link
            to="/gerenciandoestado"
            className="bg-black flex justify-center"
          >
            Voltar
          </Link>
        </div>
        <div
          className="bg-black h-screen flex justify-center items-center flex-col"
          onClick={() => setIsActive(false)}
        >
          <img
            className="w-52 h-52"
            alt="Rainbow houses in Kampung Pelangi, Indonesia"
            src="https://i.imgur.com/5qwVYb1.jpeg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </>
    )
  }
  return (
    <div className="bg-gray-500 h-screen flex justify-center items-center flex-col">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setIsEditing(!isEditing)
        }}
      >
        <div className="grid grid-cols-2 my-2">
          <label className="flex items-center">Nome:</label>
          {isEditing ? (
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="text-black"
            />
          ) : (
            <b className="text-white ml-2">{firstName}</b>
          )}
        </div>
        <div className="grid grid-cols-2 my-2">
          <label className="flex items-center">Sobrenome:</label>
          {isEditing ? (
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="text-black"
            />
          ) : (
            <b className="text-white ml-2">{lastName}</b>
          )}
        </div>

        <button type="submit" className="flex m-auto border border-orange-400 px-1">{isEditing ? "Save" : "Edit"} Profile</button>
      </form>

      <p className="mb-3 text-xl">{fullName}</p>
      <img
        className="w-52 h-52"
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={() => setIsActive(true)}
      />
    </div>
  )
}
