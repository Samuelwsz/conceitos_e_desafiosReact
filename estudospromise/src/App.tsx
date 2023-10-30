import "./App.css"

const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Product 01" },
        { id: 1, name: "Product 01" },
      ])
    }, 4000)
  })
}

const fetchUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "John Doe" },
        { id: 1, name: "Jane Doe" },
      ])
    }, 3000)
  })
}

function App() {
  return <></>
}

export default App
