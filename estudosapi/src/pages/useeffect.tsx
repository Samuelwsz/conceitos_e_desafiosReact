import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

interface PokemonProps {
  nome: string
  imagem?: string
}

export default function UseEffectEstudo() {
  const [nome, setNome] = useState<string>("")
  const [Pokemon, setPokemon] = useState<PokemonProps | null>(null)
  const [timer, setTimer] = useState<number | null>(null)

  useEffect(() => {
    if (nome) {
      if (timer) {
        clearTimeout(timer)
      }

      const newTimer = setTimeout(() => {
        buscaPokemon(nome)
      }, 1000) // Espere 800 milissegundos após a última digitação.
      setTimer(newTimer)
    } else {
      setPokemon(null)
    }
  }, [nome])

  async function buscaPokemon(pokemonName: string) {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      )
      if (response.status === 200) {
        const data = await response.json()

        const newPokemon: PokemonProps = {
          nome: data.name,
          imagem: data.sprites.front_default,
        }

        setPokemon(newPokemon)
      } else {
        setPokemon(null)
      }
    } catch (error) {
      console.error("Erro ao buscar o Pokémon:", error)
    }
  }

  const Limpar = () => {
    event?.preventDefault()
    setNome("")
  }
  return (
    <>
      <Link to="/" className="bg-black flex justify-center">
        início
      </Link>
      <div className="bg-black h-screen flex justify-center items-center">
        <div className="text-center">
          <div>
            <input
              className="mb-5 outline-none p-1 border border-yellow-300 bg-black" 
              type="text"
              placeholder="Nome do Pokémon"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <button
              onClick={Limpar}
              className="ml-3 p-1 border border-yellow-300"
            >
              Limpar
            </button>
          </div>

          {Pokemon ? (
            <>
              <h1>{Pokemon.nome}</h1>
              <img src={Pokemon.imagem} alt={Pokemon.nome} className="m-auto" />
            </>
          ) : (
            <p className="text-lg">Carregando...</p>
          )}
        </div>
      </div>
    </>
  )
}
