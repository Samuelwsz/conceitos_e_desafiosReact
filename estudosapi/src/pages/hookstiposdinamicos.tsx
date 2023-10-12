import { useState } from "react"
import { Link } from "react-router-dom"

export default function HookTipoDinamico() {
  const [pokemonLevel, setPokemonLevel] = useState(21)

  const aumentarNivel = () => {
    setPokemonLevel(pokemonLevel + 1)
  }

  const diminuirNivel = () => {
    if (pokemonLevel > 0) {
      setPokemonLevel(pokemonLevel - 1)
    }
  }
  return (
    <>
      <Link to="/" className="bg-black flex justify-center">
        início
      </Link>
      <div className="bg-black h-screen flex justify-center items-center flex-col">
        <h1>Ninetales</h1>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png"
          alt="Imagem do pokemon ninetales"
        />
        <p>Nível atual: {pokemonLevel}</p>
        <div className="mt-3">
          <button
            onClick={aumentarNivel}
            className="p-1 border border-yellow-300"
          >
            Aumentar nível
          </button>
          <button
            onClick={diminuirNivel}
            className="ml-3 p-1 border border-yellow-300"
          >
            Diminuir nível
          </button>
        </div>
      </div>
    </>
  )
}
