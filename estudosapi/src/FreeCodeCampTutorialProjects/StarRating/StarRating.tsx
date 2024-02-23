import { useState } from "react"

export default function StarRating() {
  const [rating, setRating] = useState(0)

  const stars = Array(5).fill(0)

  const handleStarClick = (index: number) => {
    setRating(index + 1)
  }

  return (
    <div className="flex justify-center bg-slate-800 h-screen text-5xl items-center">
      {stars.map((_, index) => (
        <i
          key={index}
          className={`cursor-pointer ${
            index < rating ? "text-yellow-500" : "text-gray-300"
          }`}
          onClick={() => handleStarClick(index)}
        >
          {/* Replace the star icon with your preferred icon */}
          &#9733;
        </i>
      ))}
    </div>
  )
}
