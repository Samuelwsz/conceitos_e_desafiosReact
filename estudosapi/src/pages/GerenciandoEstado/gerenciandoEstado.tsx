import { ChangeEvent, FormEvent, useState } from "react"
import { Link } from "react-router-dom"

export default function GerenciandoEstado() {
  const [answer, setAnswer] = useState("")
  const [error, setError] = useState<Error | null>(null)
  const [status, setStatus] = useState<"typing" | "submitting" | "success">(
    "typing"
  )

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus("submitting")
    try {
      await submitForm(answer)
      setStatus("success")
    } catch (err) {
      setStatus("typing")
      setError(err as Error)
    }
  }

  function handleTextareaChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setAnswer(e.target.value)
  }

  function submitForm(answer: string) {
    // Pretend it's hitting the network.
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        let shouldError = answer.toLowerCase() !== "a"
        if (shouldError) {
          reject(new Error("Good guess but a wrong answer. Try again!"))
        } else {
          resolve()
        }
      }, 1500)
    })
  }

  return (
    <>
      <div className="flex justify-center bg-black flex-col">
        <Link to="/" className="bg-black flex justify-center">
          início
        </Link>
        <Link
          to="/compartilharestados"
          className="bg-black flex justify-center"
        >
          Compartilhar estado entre componentes
        </Link>
        <Link
          to="/adicionarremovercss"
          className="bg-black flex justify-center"
        >
          Adicionar e remover classe CSS
        </Link>
        <Link
          to="/relogiocssestilizado"
          className="bg-black flex justify-center"
        >
          Relogio com cores
        </Link>
        <Link
          to="/consertarlistaquebrada"
          className="bg-black flex justify-center"
        >
          Consertar lista quebrada
        </Link>
        <Link to="/inputpesquisa" className="bg-black flex justify-center">
          Input de pesquisa
        </Link>
      </div>
      <div className="bg-black h-screen flex justify-center items-center flex-col mt-[-72px]">
        <h2>City quiz</h2>
        <p className="mb-1">
          In which city is there a billboard that turns air into drinkable
          water?
        </p>
        <form onSubmit={handleSubmit}>
          <textarea
            value={answer}
            onChange={handleTextareaChange}
            disabled={status === "submitting"}
            className="text-black m-auto"
          />
          <br />
          <button
            disabled={answer.length === 0 || status === "submitting"}
            className="border border-yellow-300 px-1 flex m-auto"
          >
            Submit
          </button>
          {error !== null && <p>{error.message}</p>}
          {status !== null && <p className="text-center">Status: {status}</p>}
          <p className="text-center">
            {status === "success" ? "That`s right" : ""}
          </p>
        </form>
      </div>
    </>
  )
}
