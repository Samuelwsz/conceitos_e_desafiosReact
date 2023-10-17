import { Dispatch, SetStateAction, useState } from "react"
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

interface FilterAndStock {
  filterText: string
  inStockOnly: boolean
  onFilterTextChange?: Dispatch<SetStateAction<string>>
  onInStockOnlyChange?: Dispatch<SetStateAction<boolean>>
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
  const name = product.stocked ? (
    product.name
  ) : (
    <span className="text-red-500">{product.name}</span>
  )

  return (
    <>
      <tr>
        <td className="pt-2 pb-2">{name}</td>
        <td>{product.price}</td>
      </tr>
    </>
  )
}

function ProductTable({
  products,
  filterText,
  inStockOnly,
}: {
  products: Product[]
} & FilterAndStock) {
  const rows: React.ReactNode[] = []
  let lastCategory: string | null = null

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return
    }

    if (inStockOnly && !product.stocked) {
      return
    }

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
      <table className="text-center justify-center m-auto items-center">
        <thead>
          <tr>
            <th className="pb-3 pt-3">Name</th>
            <th className="pb-3 pt-3">Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  )
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}: FilterAndStock) {
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={(e) => onFilterTextChange?.(e.target.value)}
          className="p-1 text-black"
        />
        <div className="pt-3">
          <label className="items-center inline-flex gap-1">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => onInStockOnlyChange?.(e.target.checked)}
            />
            Only show products in stock
          </label>
        </div>
      </form>
    </>
  )
}

function FilterableProductTable({ products }: { products: Product[] }) {
  const [filterText, setFilterText] = useState("")
  const [inStockOnly, setInStockOnly] = useState(false)

  return (
    <>
      <div className="text-center">
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={setFilterText}
          onInStockOnlyChange={setInStockOnly}
        />
        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
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
      <div className="bg-black h-screen flex justify-center items-center ">
        <FilterableProductTable products={PRODUCTS} />
      </div>
    </>
  )
}
