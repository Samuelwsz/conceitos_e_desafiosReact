import { useState } from "react"
import "./App.css"

interface DotProps {
  clientX: number
  clientY: number
}

function App() {
  const [list, setList] = useState<DotProps[]>([])
  const [undid, setUndid] = useState<DotProps[]>([])

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const newDot = {
      clientX: event.clientX,
      clientY: event.clientY,
    }

    setList((prev) => [...prev, newDot])
  }

  const handleUndo = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()

    if (list.length === 0) {
      return
    }

    const lastItem = list[list.length - 1]
    setUndid((prev) => [...prev, lastItem])

    setList((prev) => {
      const newArr = [...prev].slice(0, -1)
      return newArr
    })
  }

  const handleRedo = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()

    if (undid.length === 0) {
      return
    }

    const recoveredDot = undid[undid.length - 1]
    setUndid((prev) => {
      const newArr = [...prev].slice(0, -1)
      return newArr
    })
    setList((prev) => [...prev, recoveredDot])
  }

  return (
    <>
      <div className="page" onClick={handleClick}>
        <button onClick={handleUndo}>Desfazer</button>
        <button onClick={handleRedo}>Refazer</button>
        {list.map((item) => (
          <span
            key={item.clientX}
            className="dot"
            style={{ left: item.clientX, top: item.clientY }}
          />
        ))}
      </div>
    </>
  )
}

export default App
