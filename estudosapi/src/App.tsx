import { Link } from "react-router-dom"
import "./global.css"

function App() {
  return (
    <div className="bg-black flex justify-center items-center py-5">
      <div className="text-center">
        <Link
          to="/useeffect"
          className="text-white p-3 border rounded-md border-yellow-300 text-3xl block"
        >
          effect
        </Link>
        <Link
          to="/usestate"
          className="text-white p-3 border rounded-md border-yellow-300 text-3xl block mt-3"
        >
          state
        </Link>
        <Link
          to="/usecontext"
          className="text-white p-3 border rounded-md border-yellow-300 text-3xl block mt-3"
        >
          context
        </Link>
        <Link
          to="/customhooks"
          className="text-white p-3 border rounded-md border-yellow-300 text-3xl block mt-3"
        >
          custom hooks
        </Link>
        <Link
          to="/hookdinamico"
          className="text-white p-3 border rounded-md border-yellow-300 text-3xl block mt-3"
        >
          hook dinâmico
        </Link>
        <Link
          to="/listacompras"
          className="text-white p-3 border rounded-md border-yellow-300 text-3xl block mt-3"
        >
          Lista de compras
        </Link>
        <Link
          to="/listasolicitacoes"
          className="text-white p-3 border rounded-md border-yellow-300 text-3xl block mt-3"
        >
          Lista de solicitações
        </Link>
        <Link
          to="/attobjeto"
          className="text-white p-3 border rounded-md border-yellow-300 text-3xl block mt-3"
        >
          Atualizar estado objeto
        </Link>
        <Link
          to="/attmatrizesestado"
          className="text-white p-3 border rounded-md border-yellow-300 text-3xl block mt-3"
        >
          Atualizar matrizes de estado
        </Link>
        <Link
          to="/gerenciandoestado"
          className="text-white p-3 border rounded-md border-yellow-300 text-3xl block mt-3"
        >
          Gerenciando o estado
        </Link>
        <Link
          to="/apicoquetel"
          className="text-white p-3 border rounded-md border-yellow-300 text-3xl block mt-3"
        >
          API Coquetel
        </Link>
        <Link
          to="/Accordion"
          className="text-white p-3 border rounded-md border-yellow-300 text-3xl block mt-3"
        >
          Accordion
        </Link>
        <Link
          to="/RandomColorGenerator"
          className="text-white p-3 border rounded-md border-yellow-300 text-3xl block mt-3"
        >
          RandomColorGenerator
        </Link>
        <Link
          to="/StarRating"
          className="text-white p-3 border rounded-md border-yellow-300 text-3xl block mt-3"
        >
          StarRating
        </Link>
        <Link
          to="/ImageSlider"
          className="text-white p-3 border rounded-md border-yellow-300 text-3xl block mt-3"
        >
          ImageSlider
        </Link>
        <Link
          to="/load-more-data"
          className="text-white p-3 border rounded-md border-yellow-300 text-3xl block mt-3"
        >
          load more data
        </Link>
        <Link
          to="/qr-code-generator"
          className="text-white p-3 border rounded-md border-yellow-300 text-3xl block mt-3"
        >
          qr code generator
        </Link>

        {/*   
         <Link
          to="/addjson"
          className="text-white p-3 border rounded-md border-yellow-300 text-3xl block mt-3"
        >
          Adicionar Produto Json
        </Link>
        */}
      </div>
    </div>
  )
}

export default App
