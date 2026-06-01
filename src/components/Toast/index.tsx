import React, { useState, useCallback, useRef, createContext, useContext, useEffect } from "react"
import { createPortal } from "react-dom"
import type { ToastProviderProps, ToastOptions, Toast as ToastType } from "./types"
import {
  ToastContainer,
  ToastItem,
  ToastItemWrapper,
  ToastIcon,
  ToastContent,
  ToastTitle,
  ToastMessage,
  ToastClose,
  ToastAction,
  ProgressBar,
} from "./styled"

const defaultIcons: Record<string, string> = {
  success: "✓",
  error: "✕",
  warning: "⚠",
  info: "ℹ",
}

type ToastContextType = {
  toast: (options: ToastOptions) => string
  dismiss: (id: string) => void
  dismissAll: () => void
}

const ToastContext = createContext<ToastContextType>({
  toast: () => "",
  dismiss: () => {},
  dismissAll: () => {},
})

export function useToast() {
  return useContext(ToastContext)
}

let toastCounter = 0

function ToastProvider({ position = "top-right", maxToasts = 5, children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastType[]>([])
  const [exiting, setExiting] = useState<Set<string>>(new Set())
  const timersRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map())

  const dismiss = useCallback((id: string) => {
    setExiting((prev) => new Set(prev).add(id))
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
      setExiting((prev) => {
        const next = new Set(prev)
        next.delete(id)
        return next
      })
    }, 200)
    const timer = timersRef.current.get(id)
    if (timer) {
      clearTimeout(timer)
      timersRef.current.delete(id)
    }
  }, [])

  const dismissAll = useCallback(() => {
    toasts.forEach((t) => dismiss(t.id))
  }, [toasts, dismiss])

  const toast = useCallback((options: ToastOptions): string => {
    const id = `toast-${++toastCounter}`
    const duration = options.duration ?? 4000
    const closable = options.closable ?? true
    const newToast: ToastType = { ...options, id, duration, closable }

    setToasts((prev) => {
      const next = [...prev, newToast]
      if (next.length > maxToasts) {
        const removed = next.shift()
        if (removed) {
          const timer = timersRef.current.get(removed.id)
          if (timer) {
            clearTimeout(timer)
            timersRef.current.delete(removed.id)
          }
        }
      }
      return next
    })

    if (duration > 0) {
      const timer = setTimeout(() => dismiss(id), duration)
      timersRef.current.set(id, timer)
    }

    return id
  }, [maxToasts, dismiss])

  useEffect(() => {
    return () => {
      timersRef.current.forEach((timer) => clearTimeout(timer))
    }
  }, [])

  const portalContent = toasts.length > 0 ? (
    <ToastContainer $position={position}>
      {toasts.map((t) => (
        <ToastItemWrapper key={t.id}>
          <ToastItem $type={t.type} $exiting={exiting.has(t.id)}>
            <ToastIcon $type={t.type}>
              {t.icon ?? defaultIcons[t.type]}
            </ToastIcon>
            <ToastContent>
              <ToastTitle>{t.title}</ToastTitle>
              {t.message && <ToastMessage>{t.message}</ToastMessage>}
              {t.action && (
                <ToastAction type="button" onClick={t.action.onClick}>
                  {t.action.label}
                </ToastAction>
              )}
            </ToastContent>
            {t.closable && (
              <ToastClose type="button" onClick={() => dismiss(t.id)} aria-label="Dismiss">
                ✕
              </ToastClose>
            )}
          </ToastItem>
          {t.duration != null && t.duration > 0 && !exiting.has(t.id) && (
            <ProgressBar $type={t.type} $duration={t.duration} />
          )}
        </ToastItemWrapper>
      ))}
    </ToastContainer>
  ) : null

  return (
    <ToastContext.Provider value={{ toast, dismiss, dismissAll }}>
      {children}
      {typeof document !== "undefined" && portalContent
        ? createPortal(portalContent, document.body)
        : null}
    </ToastContext.Provider>
  )
}

export default Object.assign(ToastProvider, { useToast })
