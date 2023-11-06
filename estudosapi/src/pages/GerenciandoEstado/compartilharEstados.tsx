//https://react.dev/learn/managing-state#sharing-state-between-components
import { useState } from "react"
import { Link } from "react-router-dom"
import Panel from "../../components/Panel"

export default function CompartilharEstados() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <div className="flex justify-center bg-black gap-5">
        <Link to="/" className="bg-black flex justify-center">
          início
        </Link>
        <Link to="/gerenciandoestado" className="bg-black flex justify-center">
          Voltar
        </Link>
      </div>
      <div className="bg-black h-screen flex justify-center items-center flex-col">
        <h2>Almaty, Kazakhstan</h2>
        <Panel
          title="About"
          isActive={activeIndex === 0}
          onShow={() => setActiveIndex(0)}
        >
          With a population of about 2 million, Almaty is Kazakhstan's largest
          city. From 1929 to 1997, it was its capital city.
        </Panel>
        <Panel
          title="Etymology"
          isActive={activeIndex === 1}
          onShow={() => setActiveIndex(1)}
        >
          The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word
          for "apple" and is often translated as "full of apples". In fact, the
          region surrounding Almaty is thought to be the ancestral home of the
          apple, and the wild <i lang="la">Malus sieversii</i> is considered a
          likely candidate for the ancestor of the modern domestic apple.
        </Panel>
      </div>
    </>
  )
}

/*
function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="container">
      <h3 className="text-center">{title}</h3>
      {isActive ? (
        <div>
          <p>{children}</p>
        </div>
      ) : (
        <button
          onClick={onShow}
          className="border border-yellow-300 px-1 my-1 flex m-auto"
        >
          Show
        </button>
      )}
    </section>
  )
}
*/
