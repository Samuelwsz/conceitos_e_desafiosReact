import { useState } from "react"

type PokebolaState = "aberta" | "fechada"

function usePokebola(): [PokebolaState, () => void, () => void] {
  // Use useState para gerenciar o estado da Pokébola
  const [estadoPokebola, setEstadoPokebola] = useState<PokebolaState>("fechada")

  // Função para abrir a Pokébola
  const abrirPokebola = () => {
    setEstadoPokebola("aberta")
  }

  // Função para fechar a Pokébola
  const fecharPokebola = () => {
    setEstadoPokebola("fechada")
  }

  return [estadoPokebola, abrirPokebola, fecharPokebola]
}

export default usePokebola
