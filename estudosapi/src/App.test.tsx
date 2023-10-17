import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom" // Usando MemoryRouter para testar rotas
import App from "./App"

test("Renderiza os links corretamente", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )

  const effectLink = screen.getByText("effect")
  const stateLink = screen.getByText("state")
  const contextLink = screen.getByText("context")
  const customHooksLink = screen.getByText("custom hooks")
  const hookDinamicoLink = screen.getByText("hook dinâmico")
  const listaComprasLink = screen.getByText("Lista de compras")

  expect(effectLink).toBeInTheDocument()
  expect(stateLink).toBeInTheDocument()
  expect(contextLink).toBeInTheDocument()
  expect(customHooksLink).toBeInTheDocument()
  expect(hookDinamicoLink).toBeInTheDocument()
  expect(listaComprasLink).toBeInTheDocument()
})

test("Os links redirecionam corretamente", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )

  const effectLink = screen.getByText("effect")
  const stateLink = screen.getByText("state")
  const contextLink = screen.getByText("context")
  const customHooksLink = screen.getByText("custom hooks")
  const hookDinamicoLink = screen.getByText("hook dinâmico")
  const listaComprasLink = screen.getByText("Lista de compras")

  expect(effectLink).toHaveAttribute("href", "/useeffect")
  expect(stateLink).toHaveAttribute("href", "/usestate")
  expect(contextLink).toHaveAttribute("href", "/usecontext")
  expect(customHooksLink).toHaveAttribute("href", "/customhooks")
  expect(hookDinamicoLink).toHaveAttribute("href", "/hookdinamico")
  expect(listaComprasLink).toHaveAttribute("href", "/listacompras")
})
