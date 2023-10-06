import { ChangeEvent, useEffect, useState } from "react"
import "./App.css"

function App() {
  //primeiro erro
  const [count, setCount] = useState(0)
  const [countPrev, setCountPrev] = useState(0)
  const increaseCount = () => {
    setCount(count + 1) //0 + 1
    setCount(count + 1) //0 + 1
    setCount(count + 1) //0 + 1
  }
  const increaseCountPrev = () => {
    setCountPrev((prev) => prev + 1)
    setCountPrev((prev) => prev + 1)
    setCountPrev((prev) => prev + 1)
  }

  //segundo erro
  const [user, setUser] = useState({
    name: "",
    email: "email@email",
  })
  console.log(user)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user, //caso não use o spread operator o email some no console pois não foi usado aqui
      name: event.target.value,
    })
  }
  //terceiro erro
  const PRICE_PER_ITEM = 100

  const [orderQuantity, setOrderQuantity] = useState(0)
  const orderPrice = orderQuantity * PRICE_PER_ITEM
  /*
  apenas usando a linha acima evitei o uso de outro state e de uso dp useEffect
  const [orderPrice, setOrderPrice] = useState(0)
  useEffect(() => {
    setOrderPrice(orderQuantity * PRICE_PER_ITEM)
  }, [orderQuantity])
  */
  return (
    <>
      <h2>Primeiro erro</h2>
      <h2>Contando apenas um número</h2>
      <button onClick={increaseCount}>{count}</button>
      <h2>Contando varios números</h2>
      <button onClick={increaseCountPrev}>{countPrev}</button>
      <hr />
      <h2>Segundo erro</h2>
      <input type="text" placeholder="Name" onChange={handleChange} />
      <div>
        <div>Nome: {user.name}</div>
        <div>Email: {user.email}</div>
      </div>
      <hr />
      <h2>Terceiro erro</h2>
      <button onClick={() => setOrderQuantity((prev) => prev + 1)}>
        Order {orderQuantity}
      </button>
      <p>Total: {orderPrice}</p>
    </>
  )
}

export default App
