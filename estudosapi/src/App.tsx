import { Link } from "react-router-dom"
import "./global.css"

function App() {
  return (
    <div className="bg-black h-screen flex justify-center items-center">
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
      </div>
    </div>
  )
}

export default App
