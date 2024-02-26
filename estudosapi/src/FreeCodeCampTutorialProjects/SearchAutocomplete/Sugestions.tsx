import { MouseEvent } from "react"

interface SuggestionsProps {
  data: string[]
  handleClick: (event: MouseEvent<HTMLLIElement>) => void
}

export default function Suggestions({ data, handleClick }: SuggestionsProps) {
  return (
    <ul>
      {data && data.length
        ? data.map((item, index) => (
            <li onClick={handleClick} key={index}>
              {item}
            </li>
          ))
        : null}
    </ul>
  )
}
