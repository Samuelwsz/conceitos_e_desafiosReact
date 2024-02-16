import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import { Link } from "react-router-dom"

interface Drink {
  idDrink: string
  strDrink: string
  strDrinkThumb: string
  strIngredient1?: string | null
  strIngredient2?: string | null
  strIngredient3?: string | null
  strIngredient4?: string | null
  strIngredient5?: string | null
  strIngredient6?: string | null
  strIngredient7?: string | null
  strIngredient8?: string | null
  strIngredient9?: string | null
  strIngredient10?: string | null
}

export default function ApiCoquetel() {
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<Drink[]>([])

  const url = "http://www.thecocktaildb.com/api/json/v1/1/random.php"

  const fecthCocktailGandler = useCallback(() => {
    setLoading(true)

    axios
      .get(url)
      .then((res) => {
        console.log(res.data)
        setData(res.data.drinks)
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    fecthCocktailGandler()
  }, [fecthCocktailGandler])

  if (loading) {
    return <h2 className="text-black">Loading...</h2>
  }

  return (
    <>
      <div className="flex justify-center bg-black gap-5">
        <Link to="/" className="bg-black flex justify-center">
          início
        </Link>
      </div>
      <div className="flex justify-center text-center my-10">
        {data.map((c) => {
          return (
            <div key={c.idDrink}>
              <h2 className="text-black mb-3 text-2xl font-semibold italic">
                {c.strDrink}
              </h2>
              <img
                src={c.strDrinkThumb}
                alt={c.strDrink}
                className="w-56 h-56"
              />
              <h2 className="text-black my-3 text-xl font-semibold">
                Ingredients
              </h2>
              <div>
                <p className="text-black">{c.strIngredient1}</p>
                <p className="text-black">{c.strIngredient2}</p>
                <p className="text-black">{c.strIngredient3}</p>
                <p className="text-black">{c.strIngredient4}</p>
                <p className="text-black">{c.strIngredient5}</p>
                <p className="text-black">{c.strIngredient6}</p>
                <p className="text-black">{c.strIngredient7}</p>
                <p className="text-black">{c.strIngredient8}</p>
                <p className="text-black">{c.strIngredient9}</p>
                <p className="text-black">{c.strIngredient10}</p>
              </div>
              <button
                onClick={fecthCocktailGandler}
                className="p-3 mt-3 border border-black bg-black rounded-md"
              >
                Get another drink
              </button>
            </div>
          )
        })}
      </div>
    </>
  )
}
