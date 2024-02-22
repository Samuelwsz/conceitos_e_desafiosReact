//single selection
//multiple selection

import { useState } from "react"
import data from "./data"
import { Link } from "react-router-dom"

export function Accordion() {
  const [selected, setSelected] = useState<string | null>(null)
  const [enableMultiSelection, setEnableMultiSelection] = useState(false)
  const [multiple, setMultiple] = useState<string[]>([])

  function handleSingleSelection(getCurrentId: string) {
    setSelected(getCurrentId === selected ? null : getCurrentId)
  }

  function handleMultiSelection(getCurrentId: string) {
    const cpyMultiple = [...multiple]
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId)

    if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId)
    else cpyMultiple.splice(findIndexOfCurrentId, 1)

    setMultiple(cpyMultiple)
  }

  return (
    <div className="bg-gray-900 h-screen font-medium text-lg text-white">
      <div className="pt-10 m-auto flex justify-center gap-10">
        <Link to="/" className="bg-teal-700 p-2 px-3  rounded-md">
          Voltar
        </Link>

        <button
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
          className="bg-teal-700 p-2 px-3 rounded-md"
        >
          Enable Multi Selection
        </button>
      </div>
      <div className="py-10 container m-auto">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              className="flex flex-col items-center pb-6 border-b border-gray-700"
              key={dataItem.id}
            >
              <h3
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="cursor-pointer flex justify-between items-center w-full px-4 py-2"
              >
                <span>{dataItem.question}</span>
                <span className="text-xl">
                  {selected === dataItem.id ? "-" : "+"}
                </span>
              </h3>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )}
              {/* {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div className="text-center">No data found</div>
        )}
      </div>
    </div>
  )
}
