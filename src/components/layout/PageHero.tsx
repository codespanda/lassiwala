import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

import { HeartDivider, Sprig } from "@/components/ornaments"

export function PageHero({
  eyebrow,
  title,
  accent,
  description,
  crumb,
}: {
  /** script-font line above the title */
  eyebrow: string
  title: string
  /** second, green part of the title */
  accent?: string
  description?: string
  crumb: string
}) {
  return (
    <section className="paper-bg pt-header relative overflow-hidden pb-24 sm:pb-28">
      <Sprig className="absolute left-[8%] top-32 hidden size-10 rotate-[-20deg] opacity-60 md:block" />
      <Sprig flip className="absolute right-[8%] top-40 hidden size-10 rotate-[20deg] opacity-60 md:block" />
      <div className="container-x relative pt-6 text-center sm:pt-10">
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center justify-center gap-1 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-green">
            Home
          </Link>
          <ChevronRight className="size-3" />
          <span className="font-medium text-navy">{crumb}</span>
        </nav>
        <p className="font-script text-3xl text-navy sm:text-4xl">{eyebrow}</p>
        <h1 className="mt-1 font-display text-5xl leading-none tracking-tight text-navy sm:text-6xl lg:text-7xl">
          {title} {accent && <span className="text-green">{accent}</span>}
        </h1>
        <HeartDivider width="w-20 sm:w-32" className="mt-4 justify-center" />
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-foreground/80 sm:text-base">{description}</p>
        )}
      </div>
    </section>
  )
}
