import { useState } from "react"
import { Link } from "react-router-dom"

export default function AdicionarRemoverClasseCSS() {
  const [isActive, setIsActive] = useState(true)
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
      <img
        className="w-52 h-52"
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={() => setIsActive(true)}
      />
    </div>
  )
}
