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
import AttMatrizesDeEstado from "../pages/attMatrizesEstado"
import AttMutations from "../pages/attMutacoesEstado"
import GerenciandoEstado from "../pages/GerenciandoEstado/gerenciandoEstado"
import CompartilharEstados from "../pages/GerenciandoEstado/compartilharEstados"
import AdicionarRemoverClasseCSS from "../pages/GerenciandoEstado/adicionarRemoverClasseCSS"
import RelogioComCores from "../pages/GerenciandoEstado/relogioCSSestilizado"
import ConsertarListaQuebrada from "../pages/GerenciandoEstado/consertarListaQuebrada"
import InputDePesquisa from "../pages/GerenciandoEstado/inputPesquisa"
import InputComErroDeTexto from "../pages/GerenciandoEstado/corrigirInputComErroDeTexto"
import RedefinirFormulario from "../pages/GerenciandoEstado/redefinirFormulario"
import ApiCoquetel from "../pages/APIcoquetel/apicoquetel"
import { Accordion } from "../FreeCodeCampTutorialProjects/Accordion/Accordion"
import { RandomColorGenerator } from "../FreeCodeCampTutorialProjects/RandomColorGenerator/RandomColorGenerator"
import StarRating from "../FreeCodeCampTutorialProjects/StarRating/StarRating"
import { ImageSlider } from "../FreeCodeCampTutorialProjects/ImageSlider/ImageSlider"
import { LoadMoreData } from "../FreeCodeCampTutorialProjects/load-more-data/LoadMoreData"
import { QrCodeGenerator } from "../FreeCodeCampTutorialProjects/qr-code-generator/QrCodeGenerator"

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
  {
    path: "/adicionarremovercss",
    element: <AdicionarRemoverClasseCSS />,
  },
  {
    path: "/relogiocssestilizado",
    element: <RelogioComCores />,
  },
  {
    path: "/consertarlistaquebrada",
    element: <ConsertarListaQuebrada />,
  },
  {
    path: "/inputpesquisa",
    element: <InputDePesquisa />,
  },
  {
    path: "/inputcomerrodetexto",
    element: <InputComErroDeTexto />,
  },
  {
    path: "/redefinirformulario",
    element: <RedefinirFormulario />,
  },
  {
    path: "/apicoquetel",
    element: <ApiCoquetel />,
  },
  {
    path: "/Accordion",
    element: <Accordion />,
  },
  {
    path: "/RandomColorGenerator",
    element: <RandomColorGenerator />,
  },
  {
    path: "/StarRating",
    element: <StarRating />,
  },
  {
    path: "/ImageSlider",
    element: (
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"1"}
      />
    ),
  },
  {
    path: "/load-more-data",
    element: <LoadMoreData />,
  },
  {
    path: "/qr-code-generator",
    element: <QrCodeGenerator />,
  },

  /*{
    path: "/addjson",
    element: <AddProductJson />,
  },*/
])
