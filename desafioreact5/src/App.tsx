/*
Consuma a API e liste todos os pokemons da consulta do seguinte endpoint. 
https://pokeapi.co/api/v2/pokemon

Você deve exibir, de cada pokémon:
- imagem
- nome
- experiência

Você pode acessar as informações de cada pokemón individualmente em:
https://pokeapi.co/api/v2/pokemon/:id

DICA:
imagem => sprites.front_default
experiência => base_experience

EXTRA: se puder ordene por nome.
*/
import { useEffect, useState } from "react"
import "./App.css"
import axios from "axios"

function App() {
  const [list, setList] = useState<{ name: string; url: string }[]>([])

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => setList(response.data.results))
  }, [])

  return (
    <>
      <h1>consumir api pokémon</h1>
      <hr />

      {list.map((item) => (
        <Pokemon key={item.name} data={item} />
      ))}
    </>
  )
}

interface PokemonProps {
  data: { name: string; url: string }
}

const Pokemon = ({ data }: PokemonProps) => {
  const [details, setDetails] = useState(null)

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => console.log(response))
  }, [])

  if (details === null) {
    return <div>-</div>
  }

  return (
    <ul>
      <li>{data.name}</li>
      <li>{data.url}</li>
    </ul>
  )
}

export default App
