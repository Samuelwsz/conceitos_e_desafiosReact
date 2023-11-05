import React, { useState } from "react"
import { Link } from "react-router-dom"

interface ErrorType extends Error {
  message: string
}

export default function GerenciandoEstado() {
  const [answer, setAnswer] = useState("")
  const [error, setError] = useState<ErrorType | null>(null)
  const [status, setStatus] = useState<"typing" | "submitting" | "success">(
    "typing"
  )

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")
    try {
      await submitForm(answer)
      setStatus("success")
    } catch (err: unknown) {
      if (err instanceof Error) {
        setStatus("typing")
        setError(err)
      } else {
        // Trate outros tipos de erro aqui, se necessário.
        return
      }
    }
  }

  if (status === "success") {
    return <h1>That's right!</h1>
  }

  function handleTextareaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
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
      <div className="flex justify-center bg-black gap-5">
        <Link to="/" className="bg-black flex justify-center">
          início
        </Link>
        <Link
          to="/compartilharestados"
          className="bg-black flex justify-center"
        >
          Compartilhar estado entre componentes
        </Link>
      </div>
      <div className="bg-black h-screen flex justify-center items-center flex-col">
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
            className="text-black"
          />
          <br />
          <button
            disabled={answer.length === 0 || status === "submitting"}
            className="border border-yellow-300 px-1 flex m-auto"
          >
            Submit
          </button>
          {error !== null && <p className="text-black">{error.message}</p>}
        </form>
      </div>
    </>
  )
}
