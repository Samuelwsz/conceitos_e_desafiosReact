import { useState, ChangeEvent } from "react"
import { Link } from "react-router-dom"
import Background from "../components/Background"
import Box from "../components/Box"

interface Player {
  firstName: string
  lastName: string
  score: number
}

const initialPosition = {
  x: 0,
  y: 0,
}

export default function AttObjetoNoEstado() {
  const [player, setPlayer] = useState<Player>({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10,
  })

  const fullName = player.firstName + " " + player.lastName

  const [shape, setShape] = useState({
    color: "orange",
    position: initialPosition,
  })

  function handlePlusClick() {
    setPlayer({
      ...player,
      score: player.score + 1,
    })
  }

  function handleChangeFirstName(e: ChangeEvent<HTMLInputElement>) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    })
  }

  function handleChangeLastName(e: ChangeEvent<HTMLInputElement>) {
    setPlayer({
      ...player,
      lastName: e.target.value,
    })
  }

  function handleMove(dx: number, dy: number) {
    setShape({
      ...shape,
      position: {
        x: shape.position.x + dx,
        y: shape.position.y + dy,
      },
    })
  }

  function handleColorChange(e: ChangeEvent<HTMLSelectElement>) {
    setShape({
      ...shape,
      color: e.target.value,
    })
  }

  return (
    <>
      <Link to="/" className="bg-black flex justify-center">
        início
      </Link>
      <div className="bg-black h-screen flex justify-center items-center flex-col">
        <div>
          Score: {player.score}
          <button
            onClick={handlePlusClick}
            className="border border-yellow-300 px-1 ml-3"
          >
            +
          </button>
        </div>
        <input
          type="text"
          className="text-black p-1 my-3"
          value={player.firstName}
          onChange={handleChangeFirstName}
        />
        <input
          type="text"
          className="text-black p-1 my-3"
          value={player.lastName}
          onChange={handleChangeLastName}
        />
        {fullName}
        <div className="text-black">
          <select value={shape.color} onChange={handleColorChange}>
            <option value="orange" className="text-black">
              orange
            </option>
            <option value="lightpink" className="text-black">
              lightpink
            </option>
            <option value="aliceblue" className="text-black">
              aliceblue
            </option>
          </select>
          <Background position={initialPosition} />
          <Box
            color={shape.color}
            position={shape.position}
            onMove={handleMove}
          >
            Drag me!
          </Box>
        </div>
      </div>
    </>
  )
}
