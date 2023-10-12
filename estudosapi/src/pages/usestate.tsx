import { useState } from "react"
import { Link } from "react-router-dom"

const Pokemons = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle", "Eevee"]

function getPokemonAleatorio() {
  const index = Math.floor(Math.random() * Pokemons.length)
  return Pokemons[index]
}

function UsestateEstudo() {
  const [Pokemon, setPokemon] = useState("Pokemon aleatório")

  function TrocarPokemon() {
    const novoPokemon = getPokemonAleatorio()
    setPokemon(novoPokemon)
  }

  return (
    <>
      <Link to="/" className="bg-black flex justify-center">
        inicio
      </Link>
      <div className="bg-black h-screen flex justify-center items-center">
        <div className="text-center">
          <h1 className="p-3 border rounded-md border-yellow-300 text-3xl">
            {Pokemon}
          </h1>
          <button
            className="text-black font-bold bg-gray-400 rounded-lg mt-6 p-2 text-lg"
            onClick={TrocarPokemon}
          >
            Trocar
          </button>
        </div>
      </div>
    </>
  )
}

export default UsestateEstudo
