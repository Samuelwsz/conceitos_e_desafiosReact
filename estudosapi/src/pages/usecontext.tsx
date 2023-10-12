import { usePokemon } from "../context/PokemonContext"

function TreinadorPokemon() {
  const { treinador, setTreinador } = usePokemon()

  return (
    <div>
      <h2>Treinador Pokemón:</h2>
      <p>{treinador}</p>
      <button onClick={() => setTreinador("Misty")}>Mudar treinador</button>
    </div>
  )
}

export default TreinadorPokemon
