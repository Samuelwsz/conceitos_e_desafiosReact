import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react"

// Interface para representar o contexto
interface PokemonContextType {
  treinador: string
  setTreinador: Dispatch<SetStateAction<string>>
}

// Criar o contexto
const PokemonContext = createContext<PokemonContextType | undefined>(undefined)

// Provedor do contexto
interface PokemonProviderProps {
  children: ReactNode
}

export function PokemonProvider({ children }: PokemonProviderProps) {
  const [treinador, setTreinador] = useState("Ash Ketchum")

  return (
    <PokemonContext.Provider value={{ treinador, setTreinador }}>
      {children}
    </PokemonContext.Provider>
  )
}

// Hook personalizado para usar o contexto
export function usePokemon() {
  const context = useContext(PokemonContext)
  if (!context) {
    throw new Error("usePokemon deve ser usado dentro de um PokemonProvider")
  }
  return context
}
