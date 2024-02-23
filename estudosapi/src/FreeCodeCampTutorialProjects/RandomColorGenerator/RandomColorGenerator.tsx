import { useCallback, useEffect, useState } from "react"
import { ButtonRamdomColor } from "./Button"

export function RandomColorGenerator() {
  //2. Cria dois estados, um que armazena o tipo selecionado e outro que armazena a cor
  const [typeOfColor, setTypeOfColor] = useState("hex")
  const [color, setColor] = useState("#1e293b")

  // 6. funcão para gerar o numero aleatorio
  const ramdomColorUtility = useCallback((length: number) => {
    return Math.floor(Math.random() * length)
  }, [])

  // 4. criar a função handleCreateRamdomHexColor e handleCreateRamdomRGBColor
  const handleCreateRamdomHexColor = useCallback(() => {
    // 5. criar um array chamado hex que vai ajudar a criar os valores aleatorios de hex
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
    let hexColor = "#"

    for (let i = 0; i < 6; i++) {
      hexColor += hex[ramdomColorUtility(hex.length)]
    }

    setColor(hexColor)
  }, [ramdomColorUtility])

  const handleCreateRamdomRGBColor = useCallback(() => {
    const r = ramdomColorUtility(256)
    const g = ramdomColorUtility(256)
    const b = ramdomColorUtility(256)

    setColor(`rgb(${r},${g}, ${b})`)
  }, [ramdomColorUtility])

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRamdomRGBColor()
    else handleCreateRamdomHexColor()
  }, [handleCreateRamdomHexColor, handleCreateRamdomRGBColor, typeOfColor])

  return (
    <div className="h-screen" style={{ background: color }}>
      <div className="flex justify-center gap-5 pt-5">
        {/*1. criar os 3 botões de variações 
           3. adicionar o onclick aos dois primeiros botões e no terceiro adicionar a função handleCreateRamdomHexColor e handleCreateRamdomRGBColor */}
        <ButtonRamdomColor onClick={() => setTypeOfColor("hex")}>
          Create HEX Color
        </ButtonRamdomColor>
        <ButtonRamdomColor onClick={() => setTypeOfColor("rgb")}>
          Create RGB Color
        </ButtonRamdomColor>
        <ButtonRamdomColor
          onClick={
            typeOfColor === "hex"
              ? handleCreateRamdomHexColor
              : handleCreateRamdomRGBColor
          }
        >
          Generate Ramdom Color
        </ButtonRamdomColor>
      </div>
      <div className="flex flex-col items-center text-center pt-52 font-medium text-4xl">
        {/*7. aqui é mostrado o tipo de cor e qual o rgb ou hex*/}
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  )
}
