import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"

import { flavors, type Size } from "@/data/flavors"

export type CartLine = { slug: string; size: Size["id"]; qty: number }

type CartContextValue = {
  lines: CartLine[]
  count: number
  total: number
  open: boolean
  setOpen: (open: boolean) => void
  add: (slug: string, size: Size["id"], qty?: number) => void
  setQty: (slug: string, size: Size["id"], qty: number) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)
const STORAGE_KEY = "lassiwala-cart"

function load(): CartLine[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as CartLine[]) : []
  } catch {
    return []
  }
}

export function priceOf(line: CartLine) {
  const flavor = flavors.find((f) => f.slug === line.slug)
  return flavor?.sizes.find((s) => s.id === line.size)?.price ?? 0
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(load)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
    } catch {
      /* storage unavailable — cart still works for this visit */
    }
  }, [lines])

  const setQty = useCallback((slug: string, size: Size["id"], qty: number) => {
    setLines((prev) =>
      qty <= 0
        ? prev.filter((l) => !(l.slug === slug && l.size === size))
        : prev.map((l) => (l.slug === slug && l.size === size ? { ...l, qty } : l))
    )
  }, [])

  const add = useCallback((slug: string, size: Size["id"], qty = 1) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.slug === slug && l.size === size)
      if (existing) return prev.map((l) => (l === existing ? { ...l, qty: l.qty + qty } : l))
      return [...prev, { slug, size, qty }]
    })
  }, [])

  const value = useMemo<CartContextValue>(
    () => ({
      lines,
      count: lines.reduce((n, l) => n + l.qty, 0),
      total: lines.reduce((n, l) => n + l.qty * priceOf(l), 0),
      open,
      setOpen,
      add,
      setQty,
      clear: () => setLines([]),
    }),
    [lines, open, add, setQty]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>")
  return ctx
}
