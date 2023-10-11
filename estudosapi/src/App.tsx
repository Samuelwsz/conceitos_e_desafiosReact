import { Link } from "react-router-dom"
import "./global.css"

function App() {
  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="text-center">
        <Link
          to="/useeffect"
          className="text-white p-3 border rounded-md border-yellow-300 text-3xl"
        >
          effect
        </Link>
        <Link
          to="/usestate"
          className="text-white p-3 border rounded-md border-yellow-300 text-3xl"
        >
          state
        </Link>
      </div>
    </div>
  )
}

export default App
