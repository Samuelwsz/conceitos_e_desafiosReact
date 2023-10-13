import { Link } from "react-router-dom"

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
]

interface Product {
  category: string
  price: string
  stocked: boolean
  name: string
}

function ProductCategoryRow({ category }: { category: string }) {
  return (
    <>
      <tr>
        <th className="border border-yellow-300 p-2">{category}</th>
      </tr>
    </>
  )
}

function ProductRow({ product }: { product: Product }) {
  const name = product.stocked ? product.name : <span>{product.name}</span>

  return (
    <>
      <tr>
        <td className="pt-2 pb-2">{name}</td>
        <td>{product.price}</td>
      </tr>
    </>
  )
}

function ProductTable({ products }: { products: Product[] }) {
  const rows: React.ReactNode[] = []
  let lastCategory: string | null = null

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      )
    }
    rows.push(<ProductRow product={product} key={product.name} />)
    lastCategory = product.category
  })
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  )
}
function SearchBar() {
  return (
    <>
      <form>
        <input type="text" placeholder="Search..." />
        <label>
          <input type="checkbox" /> Only show products in stock
        </label>
      </form>
    </>
  )
}

function FilterableProductTable({ products }: { products: Product[] }) {
  return (
    <>
      <div>
        <SearchBar />
        <ProductTable products={products} />
      </div>
    </>
  )
}
export default function ListaCompras() {
  return (
    <>
      <Link to="/" className="bg-black flex justify-center">
        inicio
      </Link>
      <div className="bg-black h-screen flex justify-center items-center">
        <FilterableProductTable products={PRODUCTS} />
      </div>
    </>
  )
}