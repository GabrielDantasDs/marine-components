import React, { useState, createContext, useContext } from "react"
import type { TabsProps, TabProps, TabPanelProps, TabsVariant, TabsSize } from "./types"
import { Container, TabList, TabButton, TabIcon, Panel } from "./styled"

type TabsContextType = {
  activeValue: string
  variant: TabsVariant
  size: TabsSize
  setActive: (value: string) => void
}

const TabsContext = createContext<TabsContextType>({
  activeValue: "",
  variant: "underline",
  size: "md",
  setActive: () => {},
})

function Tabs({
  variant = "underline",
  size = "md",
  fullWidth = false,
  value,
  defaultValue,
  onChange,
  children,
}: TabsProps) {
  const controlled = value !== undefined
  const [internalValue, setInternalValue] = useState(defaultValue ?? "")
  const activeValue = controlled ? value : internalValue

  function setActive(val: string) {
    if (!controlled) setInternalValue(val)
    onChange?.(val)
  }

  const tabs: React.ReactElement<TabProps>[] = []
  const panels: React.ReactElement<TabPanelProps>[] = []

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return
    if ((child.type as any) === Tab) tabs.push(child as React.ReactElement<TabProps>)
    if ((child.type as any) === TabPanel) panels.push(child as React.ReactElement<TabPanelProps>)
  })

  return (
    <TabsContext.Provider value={{ activeValue, variant, size, setActive }}>
      <Container>
        <TabList $variant={variant} $fullWidth={fullWidth} role="tablist">
          {tabs}
        </TabList>
        {panels}
      </Container>
    </TabsContext.Provider>
  )
}

function Tab({ value, label, icon, disabled = false }: TabProps) {
  const { activeValue, variant, size, setActive } = useContext(TabsContext)
  const isActive = activeValue === value

  return (
    <TabButton
      type="button"
      role="tab"
      aria-selected={isActive}
      $active={isActive}
      $variant={variant}
      $size={size}
      $disabled={disabled}
      onClick={() => { if (!disabled) setActive(value) }}
    >
      {icon && <TabIcon>{icon}</TabIcon>}
      {label}
    </TabButton>
  )
}

function TabPanel({ value, children }: TabPanelProps) {
  const { activeValue } = useContext(TabsContext)
  if (activeValue !== value) return null

  return <Panel role="tabpanel">{children}</Panel>
}

export default Object.assign(Tabs, { Tab, Panel: TabPanel })
