import React, { useState, useRef, useCallback } from "react"
import type { TooltipProps } from "./types"
import { Anchor, Bubble, Arrow } from "./styled"

function Tooltip({
  content,
  children,
  placement = "top",
  color = "dark",
  size = "md",
  enterDelay = 100,
  leaveDelay = 0,
  disabled = false,
  arrow = true,
  maxWidth = 240,
}: TooltipProps) {
  const [visible, setVisible] = useState(false)
  const enterTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearTimers = useCallback(() => {
    if (enterTimer.current) { clearTimeout(enterTimer.current); enterTimer.current = null }
    if (leaveTimer.current) { clearTimeout(leaveTimer.current); leaveTimer.current = null }
  }, [])

  const handleEnter = useCallback(() => {
    if (disabled) return
    clearTimers()
    if (enterDelay > 0) {
      enterTimer.current = setTimeout(() => setVisible(true), enterDelay)
    } else {
      setVisible(true)
    }
  }, [disabled, enterDelay, clearTimers])

  const handleLeave = useCallback(() => {
    clearTimers()
    if (leaveDelay > 0) {
      leaveTimer.current = setTimeout(() => setVisible(false), leaveDelay)
    } else {
      setVisible(false)
    }
  }, [leaveDelay, clearTimers])

  return (
    <Anchor
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
    >
      {children}
      {visible && (
        <Bubble
          role="tooltip"
          $placement={placement}
          $color={color}
          $size={size}
          $maxWidth={maxWidth}
        >
          {arrow && <Arrow $placement={placement} />}
          {content}
        </Bubble>
      )}
    </Anchor>
  )
}

export default Tooltip
