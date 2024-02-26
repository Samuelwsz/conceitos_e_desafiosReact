import { CustonTabs } from "./CustomTabs"

function RandomComponent() {
  return <h1>Some random content</h1>
}

export function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ]

  function handleChange(currentTabIndex: number) {
    console.log(currentTabIndex)
  }

  return <CustonTabs tabsContent={tabs} onChange={handleChange} />
}
