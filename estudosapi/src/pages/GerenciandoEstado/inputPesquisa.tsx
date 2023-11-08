import { ChangeEvent, useState } from "react"
import { Link } from "react-router-dom"

interface Food {
  id: number
  name: string
  description: string
}

function filterItems(items: Food[], query: string): Food[] {
  query = query.toLowerCase()
  return items.filter((item) =>
    item.name.split(" ").some((word) => word.toLowerCase().startsWith(query))
  )
}

function SearchBar({
  query,
  onChange,
}: {
  query: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <label className="flex justify-center my-2 gap-3">
      Search:
      <input value={query} onChange={onChange} className="text-black" />
    </label>
  )
}

function List({ items }: { items: Food[] }) {
  return (
    <table>
      <tbody>
        {items.map((food) => (
          <tr key={food.id}>
            <td className="pr-3">{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const foods: Food[] = [
  {
    id: 0,
    name: "Sushi",
    description:
      "Sushi is a traditional Japanese dish of prepared vinegared rice",
  },
  {
    id: 1,
    name: "Dal",
    description:
      "The most common way of preparing dal is in the form of a soup to which onions, tomatoes and various spices may be added",
  },
  {
    id: 2,
    name: "Pierogi",
    description:
      "Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water",
  },
  {
    id: 3,
    name: "Shish kebab",
    description:
      "Shish kebab is a popular meal of skewered and grilled cubes of meat.",
  },
  {
    id: 4,
    name: "Dim sum",
    description:
      "Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch",
  },
]

export default function InputDePesquisa() {
  const [query, setQuery] = useState("")
  const results = filterItems(foods, query)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value)
  }

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
        <div className="container">
          <SearchBar query={query} onChange={handleChange} />
          <hr />
          <List items={results} />
        </div>
      </div>
    </>
  )
}
