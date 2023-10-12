import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import UseEffectEstudo from "../pages/useeffect"
import UsestateEstudo from "../pages/usestate"
import TreinadorPokemon from "../pages/usecontext"
import { PokemonProvider } from "../context/PokemonContext"
import CustomHooks from "../pages/customhook"
import HookTipoDinamico from "../pages/hookstiposdinamicos"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/useeffect",
    element: <UseEffectEstudo />,
  },
  {
    path: "/usestate",
    element: <UsestateEstudo />,
  },
  {
    path: "/usecontext",
    element: (
      <PokemonProvider>
        <TreinadorPokemon />
      </PokemonProvider>
    ),
  },
  {
    path: "/customhooks",
    element: <CustomHooks />,
  },
  {
    path: "/hookdinamico",
    element: <HookTipoDinamico />,
  },
])
