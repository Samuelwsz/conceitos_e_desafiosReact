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
  const [list, setList] = useState<
    {
      name: string
      url: string
      base_experience: number
      sprites: { front_default: string }
    }[]
  >([])

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then((response) => {
      const sortedArray = [...response.data.results]

      sortedArray.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
      setList(sortedArray)
    })
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
  data: {
    name: string
    url: string
    base_experience: number
    sprites: { front_default: string }
  }
}

const Pokemon = ({ data }: PokemonProps) => {
  const [details, setDetails] = useState<PokemonProps["data"] | null>(null)

  useEffect(() => {
    axios.get(data.url).then((response) => setDetails(response.data))
  }, [])

  if (details === null) {
    return <div>-</div>
  }

  return (
    <ul>
      <li
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={details.sprites.front_default}
          style={{
            width: 30,
            marginLeft: 10,
          }}
          alt={details.sprites.front_default}
        />
        <span>
          <b>{details.name}</b> - EXP {details.base_experience}
        </span>
      </li>
    </ul>
  )
}

export default App
