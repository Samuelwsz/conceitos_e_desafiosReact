import { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
}

export function ButtonRamdomColor({ children, onClick }: ButtonProps) {
  return (
    <button className="bg-teal-700 p-2 px-3 rounded-md" onClick={onClick}>
      {children}
    </button>
  )
}
