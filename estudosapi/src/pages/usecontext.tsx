import { Link } from "react-router-dom"
import { usePokemon } from "../context/PokemonContext"
import { ChangeEvent } from "react"

function TreinadorPokemon() {
  const {
    treinador,
    TrocarTreinador,
    Treinadores,
    selecionarTreinador,
    setSelecionarTreinador,
  } = usePokemon()

  const handleChangeTreinador = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelecionarTreinador(event.target.value)
  }

  return (
    <>
      <Link to="/" className="bg-black flex justify-center">
        inicio
      </Link>
      <div className="bg-black h-screen flex justify-center items-center">
        <div>
          <h2 className="mb-3 text-xl">Treinador Pokemón:</h2>
          <select
            className="border border-white p-1 mb-3 mt-3 text-black font-bold"
            value={selecionarTreinador}
            onChange={handleChangeTreinador}
          >
            <option className="text-black font-bold">
              Selecione um treinador
            </option>
            {Treinadores.map((opcao) => (
              <option className="text-black font-bold" key={opcao} value={opcao}>
                {opcao}
              </option>
            ))}
          </select>
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
