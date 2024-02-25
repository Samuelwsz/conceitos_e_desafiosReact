import { useEffect, useState } from "react"

interface ProductsProps {
  id: number
  thumbnail: string
  title: string
}

export function LoadMoreData() {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState<ProductsProps[]>([])
  const [count, setCount] = useState(0)
  const [disableButton, setDisableButton] = useState(false)

  async function fetchProducts() {
    try {
      setLoading(true)
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      )

      const result = await response.json()

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products])
        setLoading(false)
      }

      console.log(result)
    } catch (e) {
      console.log(e)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [count])

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true)
  }, [products])

  if (loading) {
    return <div>Loading data ! Please wait.</div>
  }

  return (
    <>
      <div className="bg-slate-800 mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products && products.length
            ? products.map((item) => (
                <div
                  key={item.id}
                  className="bg-white shadow-md rounded-lg p-4"
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-auto"
                  />
                  <p className="text-gray-800 text-lg font-semibold mt-2">
                    {item.title}
                  </p>
                </div>
              ))
            : null}
        </div>
        <div className="py-6">
          <button
            disabled={disableButton}
            onClick={() => setCount(count + 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mx-auto"
          >
            Load More Products
          </button>
          {disableButton ? (
            <p className="mt-2 text-red-500 text-center">
              You have reached 100 products
            </p>
          ) : null}
        </div>
      </div>
    </>
  )
}
