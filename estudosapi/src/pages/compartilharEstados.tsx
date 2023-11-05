import { useState } from "react"
import { Link } from "react-router-dom"

export default function CompartilharEstados() {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <>
      <div className="flex justify-center bg-black gap-5">
        <Link to="/" className="bg-black flex justify-center">
          início
        </Link>
        <Link to="/" className="bg-black flex justify-center">
          ...
        </Link>
      </div>
      <div className="bg-black h-screen flex justify-center items-center flex-col">
        <h2>Almaty, Kazakhstan</h2>
        <Panel
          title="About"
          isActive={activeIndex === 0}
          onShow={() => setActiveIndex(0)}
        >
          aaa
        </Panel>
        <Panel
          title="Etymology"
          isActive={activeIndex === 1}
          onShow={() => setActiveIndex(1)}
        >
          bbb
        </Panel>
      </div>
    </>
  )
}

function Panel({ title, children, isActive, onShow }) {
  return (
    <section>
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  )
}
