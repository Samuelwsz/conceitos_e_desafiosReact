//https://react.dev/learn/preserving-and-resetting-state#challenges
import { Link } from "react-router-dom"
import { useState } from "react"

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

//desafio 3
function EditContact({ initialData, onSave }) {
  const [name, setName] = useState(initialData.name)
  const [email, setEmail] = useState(initialData.email)
  return <></>
}

export default function RedefinirFormulario() {
  //desafio 4
  const [index, setIndex] = useState(0)
  const hasNext = index < images.length - 1

  function handleClick() {
    if (hasNext) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }

  let image = images[index]
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
      </div>
    </>
  )
}
