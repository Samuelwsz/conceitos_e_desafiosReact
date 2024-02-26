import { useState } from "react"

interface TabItem {
  label: string
  content: JSX.Element
}

interface CustomTabsProps {
  tabsContent: TabItem[]
  onChange: (currentIndex: number) => void
}

export function CustonTabs({ tabsContent, onChange }: CustomTabsProps) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0)

  function handleOnClick(getCurrentIndex: number) {
    setCurrentTabIndex(getCurrentIndex)
    onChange(getCurrentIndex)
  }

  return (
    <div className="bg-slate-800 h-screen">
      <div className="flex gap-3 justify-center p-3">
        {tabsContent.map((tabItem, index) => (
          <div
            className={`cursor-pointer p-1 px-2 ${
              currentTabIndex === index ? "bg-red-500" : "bg-green-600"
            }`}
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center" style={{ color: "red" }}>
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  )
}
