import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

interface PokemonProps {
  nome: string
  imagem?: string
}

export default function UseEffectEstudo({ nome }: PokemonProps) {
  const [Pokemon, setPokemon] = useState<PokemonProps | null>(null)

  useEffect(() => {
    async function buscaPokemon() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${nome}`
      )
      const data = await response.data

      const Pokemon: PokemonProps = {
        nome: data.name,
        imagem: data.sprites.front_default,
      }
      setPokemon(Pokemon)
    }

    if (nome) {
      buscaPokemon()
    }
  }, [nome])

  return (
    <>
      <Link to="/" className="bg-black text-white flex justify-center">
        inicio
      </Link>
      <div className="bg-black h-screen flex justify-center items-center">
        <div className="text-center">
          {Pokemon ? (
            <>
              <h1>{Pokemon.nome}</h1>
              <img src={Pokemon.imagem} alt={Pokemon.nome} />
            </>
          ) : (
            <p>Carregando...</p>
          )}
        </div>
      </div>
    </>
  )
}
