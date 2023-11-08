import { Link } from "react-router-dom"
import { useState } from "react"

interface Item {
  id: number
  title: string
  packed: boolean | undefined
}

function AddItem({ onAddItem }: { onAddItem: (title: string) => void }) {
  const [title, setTitle] = useState("")
  return (
    <>
      <input
        type="text"
        placeholder="Add item"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="text-black"
      />
      <button
        onClick={() => {
          setTitle("")
          onAddItem(title)
        }}
        className="border border-yellow-300 px-1 my-3"
      >
        Add
      </button>
    </>
  )
}

function PackingList({
  items,
  onChangeItem,
  onDeleteItem,
}: {
  items: Item[]
  onChangeItem: (item: Item) => void
  onDeleteItem: (itemId: number) => void
}) {
  return (
    <>
      <ul className="mt-2">
        {items.map((item) => (
          <li key={item.id} className="flex items-center my-2">
            <label>
              <input
                type="checkbox"
                checked={item.packed}
                onChange={(e) => {
                  onChangeItem({
                    ...item,
                    packed: e.target.checked,
                  })
                }}
              />
              <span className="ml-2">{item.title}</span>
            </label>
            <button
              onClick={() => onDeleteItem(item.id)}
              className="px-1 m-2 border border-yellow-300"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

let nextId = 3
const initialItems = [
  { id: 0, title: "Warm socks", packed: true },
  { id: 1, title: "Travel journal", packed: false },
  { id: 2, title: "Watercolors", packed: false },
]

export default function ConsertarListaQuebrada() {
  const [items, setItems] = useState<Item[]>(initialItems)

  const total = items.length
  const packed = items.filter((item) => item.packed).length

  function handleAddItem(title: string) {
    setItems([
      ...items,
      {
        id: nextId++,
        title: title,
        packed: false,
      },
    ])
  }

  function handleChangeItem(nextItem: Item) {
    setItems(
      items.map((item) => {
        if (item.id === nextItem.id) {
          return nextItem
        } else {
          return item
        }
      })
    )
  }

  function handleDeleteItem(itemId: number) {
    setItems(items.filter((item) => item.id !== itemId))
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
        <AddItem onAddItem={handleAddItem} />
        <PackingList
          items={items}
          onChangeItem={handleChangeItem}
          onDeleteItem={handleDeleteItem}
        />
        <hr />
        <b>
          {packed} out of {total} packed
        </b>
      </div>
    </>
  )
}
