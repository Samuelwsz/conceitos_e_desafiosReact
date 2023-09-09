import { useState } from "react"
import "./App.css"

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [3, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
]

function App() {
  const [gameData, setGameData] = useState<(number | string)[]>([
    0, 0, 0, 0, 0, 0, 0, 0, 0,
  ])
  const [turn, setTurn] = useState(1)

  const handleClick = (clickedIndex: number) => {
    console.log(clickedIndex)

    if (gameData[clickedIndex]) {
      return
    }

    setGameData((prev) => {
      const newGameData = [...prev]
      newGameData[clickedIndex] = turn
      return newGameData
    })
    setTurn((prev) => (prev === 1 ? 2 : 1))
  }
  return (
    <>
      <h3>desafio fernandev</h3>
      <h1>jogo da velha</h1>
      <div className="board-game">
        {gameData.map((value, index) => (
          <span
            key={index}
            onClick={() => {
              handleClick(index)
            }}
          >
            <abbr title="">{index}</abbr>
            {value === 1 && "X"}
            {value === 2 && "O"}
          </span>
        ))}
      </div>
    </>
  )
}

export default App
