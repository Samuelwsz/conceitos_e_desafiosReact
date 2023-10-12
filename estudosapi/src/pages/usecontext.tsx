import { Link } from "react-router-dom"
import { usePokemon } from "../context/PokemonContext"

function TreinadorPokemon() {
  const { treinador, TrocarTreinador } = usePokemon()

  return (
    <>
      <Link to="/" className="bg-black flex justify-center">
        inicio
      </Link>
      <div className="bg-black h-screen flex justify-center items-center">
        <div>
          <h2 className="mb-3 text-xl">Treinador Pokemón:</h2>
          <p className="border border-white bg-slate-50 text-black font-bold p-1">
            {treinador}
          </p>
          <button
            className="border border-yellow-300 p-2 mt-3 "
            onClick={() => TrocarTreinador()}
          >
            Mudar treinador
          </button>
        </div>
      </div>
    </>
  )
}

export default TreinadorPokemon
