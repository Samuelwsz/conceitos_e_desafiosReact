import { ChangeEvent, useState } from "react"
import QRCode from "react-qr-code"
import { Link } from "react-router-dom"

export function QrCodeGenerator() {
  const [qrCode, setQrCode] = useState("")
  const [input, setInput] = useState("")

  function changeInput(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value)
  }

  function handleGenerateQrCode() {
    setQrCode(input)
    setInput("")
  }

  return (
    <>
      <div className="bg-slate-800 flex justify-center items-center flex-col h-screen">
        <div className="bg-slate-800 p-3">
          <Link to="/" className="bg-teal-600 p-1">
            Voltar
          </Link>
        </div>
        <h1 className="py-3">qr code generator</h1>
        <div className="flex flex-col mb-6 ">
          <input
            onChange={changeInput}
            value={input}
            type="text"
            name="qr-code"
            placeholder="Enter your value here"
            className="mb-3 p-1.5 bg-slate-600 text-white outline-none "
          />
          <button
            disabled={input && input.trim() !== "" ? false : true}
            onClick={handleGenerateQrCode}
            className="bg-teal-600 p-1 w-32 m-auto rounded-lg"
          >
            Generate
          </button>
        </div>
        <div>
          <QRCode id="qr-code-value" value={qrCode} />
        </div>
      </div>
    </>
  )
}
