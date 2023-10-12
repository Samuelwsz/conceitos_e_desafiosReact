import { Link } from "react-router-dom"
import usePokebola from "../customhooks/usePokebola"
import poke from "../assets/pokefechada.jpg"
import pokeaberta from "../assets/pokeaberta.jpg"

export default function CustomHooks() {
  // Use o hook usePokebola
  const [estadoPokebola, abrirPokebola, fecharPokebola] = usePokebola()

  return (
    <>
      <Link to="/" className="bg-black flex justify-center">
        início
      </Link>
      <div className="bg-black h-screen flex justify-center items-center flex-col">
        <img
          src={estadoPokebola == "aberta" ? pokeaberta : poke}
          alt=""
          className="h-60 w-60"
        />
        <div className="mt-3">
          <button
            onClick={abrirPokebola}
            className="p-1 border border-yellow-300"
          >
            Abrir Pokébola
          </button>
          <button
            onClick={fecharPokebola}
            className="ml-3 p-1 border border-yellow-300"
          >
            Fechar Pokébola
          </button>
        </div>
      </div>
    </>
  )
}
