import { Link } from "react-router-dom"

export default function AttMutations() {
  return (
    <>
      <div className="flex justify-center bg-black gap-5">
        <Link to="/" className="bg-black flex justify-center">
          início
        </Link>
        <Link to="/attmatrizesestado" className="bg-black flex justify-center">
          Matrizes de estado
        </Link>
      </div>

      <div className="bg-black h-screen flex justify-center items-center flex-col"></div>
    </>
  )
}
