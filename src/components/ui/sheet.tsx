import * as React from "react"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

/** Lightweight shadcn-style Sheet (right side drawer) without extra Radix deps. */
function Sheet({
  open,
  onOpenChange,
  children,
  className,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
  className?: string
}) {
  React.useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onOpenChange(false)
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open, onOpenChange])

  return (
    <div className={cn("fixed inset-0 z-50", open ? "pointer-events-auto" : "pointer-events-none")} aria-hidden={!open}>
      <div
        className={cn("absolute inset-0 bg-black/40 transition-opacity", open ? "opacity-100" : "opacity-0")}
        onClick={() => onOpenChange(false)}
      />
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "absolute inset-y-0 right-0 flex w-[80%] max-w-xs flex-col bg-background p-6 shadow-xl transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
          className
        )}
      >
        <button
          className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100"
          onClick={() => onOpenChange(false)}
          aria-label="Close menu"
        >
          <X className="size-5" />
        </button>
        {children}
      </div>
    </div>
  )
}

export { Sheet }
