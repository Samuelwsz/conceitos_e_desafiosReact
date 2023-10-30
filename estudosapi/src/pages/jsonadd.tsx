import { useState } from "react"
import { Link } from "react-router-dom"
import fs from "../json/item.json"

export default function AddProductJson() {
 /* const [formData, setFormData] = useState({ name: "", description: "" })

 const handleInputChange = (event) => {
   const { name, value } = event.target
   setFormData({ ...formData, [name]: value })
 }

   const handleSubmit = (event) => {
     event.preventDefault()

     // Lê o arquivo JSON existente
     const existingData = JSON.parse(fs.readFileSync("data.json"))

     // Cria um novo item com base nos dados do formulário
     const newItem = {
       id: existingData.items.length + 1,
       ...formData,
     }

     // Adiciona o novo item ao array "items"
     existingData.items.push(newItem)

     // Escreve os dados atualizados de volta ao arquivo JSON
     fs.writeFileSync("data.json", JSON.stringify(existingData, null, 2))
   }

  return (
    <>
      <Link to="/" className="bg-black flex justify-center">
        inicio
      </Link>
      <div className="bg-black h-screen flex justify-center items-center ">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            placeholder="Nome"
            className="text-black"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="age"
            placeholder="Idade"
            className="text-black"
            onChange={handleInputChange}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  )*/
}
