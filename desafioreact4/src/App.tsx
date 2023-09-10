import { useEffect, useState } from "react"
import "./App.css"

const winningCombinations = [
  { indexes: [0, 1, 2], orientation: "horizontal" },
  { indexes: [3, 4, 5], orientation: "horizontal" },
  { indexes: [6, 7, 8], orientation: "horizontal" },

  { indexes: [0, 3, 6], orientation: "vertical" },
  { indexes: [1, 4, 7], orientation: "vertical" },
  { indexes: [3, 5, 8], orientation: "vertical" },

  { indexes: [0, 4, 8], orientation: "diagonal" },
  { indexes: [2, 4, 6], orientation: "diagonal" },
]

function App() {
  const [gameData, setGameData] = useState<(number | string)[]>([
    0, 0, 0, 0, 0, 0, 0, 0, 0,
  ])
  const [turn, setTurn] = useState(1)
  const [winningCombo, setWinningCombo] = useState<{
    indexes: number[]
    orientation: string
  } | null>(null)
  const [winnerGame, setWinner] = useState<string | null>()

  const handleClick = (clickedIndex: number) => {
    if (gameData[clickedIndex] !== 0) {
      return
    }
    if (winningCombo) {
      return
    }

    setGameData((prev) => {
      const newGameData = [...prev]
      newGameData[clickedIndex] = turn
      return newGameData
    })
    setTurn((prev) => (prev === 1 ? 2 : 1))
    console.log(turn)
  }

  useEffect(() => {
    checkWinner()
    checkGameEnded()
  }, [gameData])

  useEffect(() => {
    if (winningCombo) {
      setWinner(turn !== 1 ? "player1" : "player2")
      alert("Temos um vencedor")
    }
  }, [winningCombo])

  const checkGameEnded = () => {
    if (gameData.every((item) => item !== 0)) {
      setWinner("Empate")
      alert("Jogo acabou")
    }
  }

  const checkWinner = () => {
    let winner = null
    for (let orientation of winningCombinations) {
      const { indexes } = orientation
      if (
        gameData[indexes[0]] === 1 &&
        gameData[indexes[1]] === 1 &&
        gameData[indexes[2]] === 1
      ) {
        winner = "player1"
      }
      if (
        gameData[indexes[0]] === 2 &&
        gameData[indexes[1]] === 2 &&
        gameData[indexes[2]] === 2
      ) {
        winner = "player2"
      }
      if (winner) {
        setWinningCombo(orientation)
        break
      }
    }
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
            className="vertical"
          >
            <abbr title="">{index}</abbr>
            {value === 1 && "X"}
            {value === 2 && "O"}
          </span>
        ))}
      </div>
      {winnerGame && <p>O vencedor é: {winnerGame}</p>}
    </>
  )
}

export default App
