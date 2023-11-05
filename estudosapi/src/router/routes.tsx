import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import UseEffectEstudo from "../pages/useeffect"
import UsestateEstudo from "../pages/usestate"
import TreinadorPokemon from "../pages/usecontext"
import { PokemonProvider } from "../context/PokemonContext"
import CustomHooks from "../pages/customhook"
import HookTipoDinamico from "../pages/hookstiposdinamicos"
import ListaCompras from "../pages/listacompras"
import ContadorSolicitacoes from "../pages/contadorSolicitacoes"
import AttObjetoNoEstado from "../pages/AttObjetoNoEstado"
import AddProductJson from "../pages/jsonadd"
import AttMatrizesDeEstado from "../pages/attMatrizesEstado"
import AttMutations from "../pages/attMutacoesEstado"
import GerenciandoEstado from "../pages/gerenciandoEstado"
import CompartilharEstados from "../pages/compartilharEstados"

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
  {
    path: "/listacompras",
    element: <ListaCompras />,
  },
  {
    path: "/listasolicitacoes",
    element: <ContadorSolicitacoes />,
  },
  {
    path: "/attobjeto",
    element: <AttObjetoNoEstado />,
  },
  {
    path: "/attmatrizesestado",
    element: <AttMatrizesDeEstado />,
  },
  {
    path: "/attmutations",
    element: <AttMutations />,
  },
  {
    path: "/gerenciandoestado",
    element: <GerenciandoEstado />,
  },
  {
    path: "/compartilharestados",
    element: <CompartilharEstados />,
  },
  /*{
    path: "/addjson",
    element: <AddProductJson />,
  },*/
])
