import { useState } from "react"
import { Link } from "react-router-dom"

export default function ContadorSolicitacoes() {
  const [pending, setPending] = useState(0)
  const [completed, setCompleted] = useState(0)

  async function handleBuy() {
    setPending((p) => p + 1)
    await delay(2000)
    setPending((p) => p - 1)
    setCompleted((c) => c + 1)
  }

  function delay(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms)
    })
  }

  return (
    <>
      <Link to="/" className="bg-black flex justify-center">
        início
      </Link>
      <div className="bg-black h-screen flex justify-center items-center flex-col">
        <div className="my-3">Pendentes: {pending}</div>
        <div className="my-3">Completados: {completed}</div>
        <button
          onClick={handleBuy}
          className="border border-yellow-300 p-1 px-3 my-3"
        >
          Comprar
        </button>
      </div>
    </>
  )
}
