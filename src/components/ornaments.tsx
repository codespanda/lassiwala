import { Heart } from "lucide-react"
import { Link } from "react-router-dom"

import { cn } from "@/lib/utils"

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <Link to="/" className={cn("inline-flex flex-col items-start leading-none", className)} aria-label="LassiWala home">
      <span className="relative font-script text-[2.1rem] text-navy sm:text-[2.6rem]">
        LassiWala
        <svg viewBox="0 0 30 22" className="absolute -top-2 left-[3.35em] h-4 w-6 text-navy sm:-top-2.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M4 18c2-6 6-9 11-10M15 8c2-3 5-4 8-3-1 3-4 5-8 3Z" />
          <path d="M14 14c3-2 7-2 10 0" />
        </svg>
      </span>
      {!compact && (
        <span className="mt-1 whitespace-nowrap pl-2 text-[0.55rem] font-semibold tracking-[0.14em] sm:tracking-[0.2em] text-green sm:text-[0.7rem]">
          PURE. REFRESHING. INDIAN.
        </span>
      )}
    </Link>
  )
}

export function HeartDivider({ className, width = "w-40" }: { className?: string; width?: string }) {
  return (
    <div className={cn("flex items-center gap-1.5", className)} aria-hidden>
      <span className={cn("h-px bg-navy/60", width)} />
      <Heart className="size-3 text-heart" strokeWidth={2.5} />
      <span className={cn("h-px bg-navy/60", width)} />
    </div>
  )
}

export function Sprig({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 32 24"
      className={cn("h-5 w-7 text-leaf", flip && "-scale-x-100", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M2 12h24" />
      <path d="M12 12c3-5 7-7 12-7" />
      <path d="M12 12c3 5 7 7 12 7" />
    </svg>
  )
}

export function SectionTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="flex items-center gap-3 sm:gap-5">
        <Sprig className="shrink-0" />
        <h2 className="text-center font-heading text-[1.3rem] leading-tight font-semibold uppercase tracking-wide text-navy sm:text-3xl">
          {children}
        </h2>
        <Sprig flip className="shrink-0" />
      </div>
      <HeartDivider width="w-14 sm:w-20" className="mt-1" />
    </div>
  )
}
