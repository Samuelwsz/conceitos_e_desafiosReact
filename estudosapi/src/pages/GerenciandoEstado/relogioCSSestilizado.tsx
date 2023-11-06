import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

interface ClockColorProps {
  color: string
  time: string
}

function useTime() {
  const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

function Clock({ color, time }: ClockColorProps) {
  return (
    <>
      <h1 style={{ color: color }}>{time}</h1>
    </>
  )
}

export default function RelogioComCores() {
  const time = useTime()
  const [color, setColor] = useState("lightcoral")

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
      <div className="bg-black h-screen flex justify-center items-center flex-col">
        <p>
          Pick a color:{" "}
          <select
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="text-black"
          >
            <option value="lightcoral" className="text-black">
              lightcoral
            </option>
            <option value="midnightblue" className="text-black">
              midnightblue
            </option>
            <option value="rebeccapurple" className="text-black">
              rebeccapurple
            </option>
          </select>
        </p>
        <Clock color={color} time={time.toLocaleTimeString()} />
      </div>
    </>
  )
}
