interface PanelProps {
  title: string
  children: React.ReactNode
  isActive: boolean
  onShow: () => void
}
export default function Panel({
  title,
  children,
  isActive,
  onShow,
}: PanelProps) {
  return (
    <section className="container">
      <h3 className="text-center">{title}</h3>
      {isActive ? (
        <div>
          <p>{children}</p>
        </div>
      ) : (
        <button
          onClick={onShow}
          className="border border-yellow-300 px-1 my-1 flex m-auto"
        >
          Show
        </button>
      )}
    </section>
  )
}
