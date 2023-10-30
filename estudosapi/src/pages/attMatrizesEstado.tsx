import { useState } from "react"
import { Link } from "react-router-dom"

interface Product {
  id: number
  name: string
  count: number
}

const initialProducts: Product[] = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
]

export default function AttMatrizesDeEstado() {
  const [products, setProducts] = useState<Product[]>(initialProducts)

  function handleIncreaseClick(productId: number) {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            count: product.count + 1,
          }
        } else {
          return product
        }
      })
    )
  }

  function handleDecreaseClick(productId: number) {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          const newCount = Math.max(0, product.count - 1)
          return {
            ...product,
            count: newCount,
          }
        } else {
          return product
        }
      })
    )
  }

  function handleRemoveProduct(productId: number) {
    let nextProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count - 1,
        }
      } else {
        return product
      }
    })
    nextProducts = nextProducts.filter((p) => p.count > 0)
    setProducts(nextProducts)
  }

  return (
    <>
      <div className="flex justify-center bg-black gap-5">
        <Link to="/" className="bg-black flex justify-center">
          início
        </Link>
        <Link to="/attmutations" className="bg-black flex justify-center">
          Corrigindo mutações
        </Link>
      </div>

      <div className="bg-black h-screen flex justify-center items-center flex-col">
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} (<b>{product.count}</b>)
              <button
                onClick={() => {
                  handleIncreaseClick(product.id)
                }}
                className="border border-yellow-300 px-1 m-1"
              >
                +
              </button>
              <button
                onClick={() => {
                  handleDecreaseClick(product.id)
                }}
                className="border border-yellow-300 px-1"
              >
                -
              </button>
              <button
                onClick={() => {
                  handleRemoveProduct(product.id)
                }}
                className="border border-yellow-300 px-1"
              >
                Remover produto
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
