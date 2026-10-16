import { ArrowRight, Leaf } from "lucide-react"
import { Link } from "react-router-dom"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/layout/PageHero"
import { OrderBanner } from "@/components/sections/OrderBanner"
import { HeartDivider } from "@/components/ornaments"
import { flavors, formatINR } from "@/data/flavors"
import { cn } from "@/lib/utils"

export default function Flavors() {
  return (
    <>
      <PageHero
        crumb="Flavors"
        eyebrow="Five ways to"
        title="FALL IN"
        accent="LOVE"
        description="From the classic Punjabi sweet lassi to royal Kashmiri kesar — every flavour starts with the same thick, slow-set curd and real ingredients you can taste."
      />

      {/* quick-jump chips */}
      <nav aria-label="Jump to flavour" className="container-x relative z-10 -mt-14 sm:-mt-16">
        <ul className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3 rounded-2xl bg-white p-4 shadow-[0_10px_40px_-12px_rgba(19,35,91,0.2)]">
          {flavors.map((f) => (
            <li key={f.slug}>
              <a href={`#${f.slug}`} className="flex items-center gap-2 rounded-full border py-1 pl-1 pr-4 text-sm font-medium text-navy transition-colors hover:border-green hover:bg-accent">
                <img src={f.img} alt="" className="size-8 rounded-full object-cover" />
                {f.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="container-x space-y-16 py-16 sm:space-y-24 sm:py-20">
        {flavors.map((f, i) => (
          <article
            key={f.slug}
            id={f.slug}
            className="grid scroll-mt-28 items-center gap-8 md:grid-cols-2 md:gap-14"
          >
            <div className={cn("relative mx-auto w-full max-w-xs sm:max-w-sm", i % 2 === 1 && "md:order-2")}>
              <div className={cn("absolute inset-6 -z-10 rounded-[2rem] blur-2xl", f.tint)} />
              <div className={cn("overflow-hidden rounded-3xl p-3 shadow-[0_20px_50px_-20px_rgba(19,35,91,0.35)]", f.tint)}>
                <img src={f.img} alt={f.name} loading="lazy" className="mx-auto aspect-square w-full rounded-2xl object-cover" />
              </div>
              <span className="absolute -bottom-4 right-6 rounded-full bg-white px-4 py-2 font-heading text-lg font-semibold text-navy shadow-md">
                from {formatINR(f.sizes[0].price)}
              </span>
            </div>

            <div className="text-center md:text-left">
              <Badge variant="soft">{f.taste}</Badge>
              <h2 className={cn("mt-3 font-display text-5xl tracking-tight sm:text-6xl", f.color)}>{f.name.toUpperCase()}</h2>
              <HeartDivider width="w-16" className="mt-3 justify-center md:justify-start" />
              <p className="mt-5 leading-relaxed text-foreground/85">{f.description}</p>

              <h3 className="mt-6 text-xs font-semibold uppercase tracking-wider text-navy">What&apos;s inside</h3>
              <ul className="mt-2 flex flex-wrap justify-center gap-2 md:justify-start">
                {f.ingredients.map((ing) => (
                  <li key={ing} className="flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-medium text-navy">
                    <Leaf className="size-3 text-green" /> {ing}
                  </li>
                ))}
              </ul>

              <h3 className="mt-6 text-xs font-semibold uppercase tracking-wider text-navy">Taste profile</h3>
              <dl className="mx-auto mt-2 max-w-sm space-y-2 md:mx-0">
                {f.notes.map((n) => (
                  <div key={n.label} className="flex items-center gap-3 text-sm">
                    <dt className="w-24 shrink-0 text-left text-muted-foreground">{n.label}</dt>
                    <dd className="flex flex-1 gap-1" aria-label={`${n.value} out of 5`}>
                      {Array.from({ length: 5 }).map((_, k) => (
                        <span key={k} className={cn("h-2 flex-1 rounded-full", k < n.value ? "bg-green" : "bg-border")} />
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm md:justify-start">
                <span>
                  <strong className="text-navy">{f.kcal}</strong> <span className="text-muted-foreground">kcal</span>
                </span>
                <span>
                  <strong className="text-navy">{f.protein}g</strong> <span className="text-muted-foreground">protein</span>
                </span>
                <span>
                  <strong className="text-navy">{f.calcium}%</strong> <span className="text-muted-foreground">daily calcium</span>
                </span>
              </div>

              <Button size="lg" className="mt-7 rounded-xl" asChild>
                <Link to="/our-lassi">
                  ORDER {f.name.toUpperCase()} <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </article>
        ))}
      </div>

      <OrderBanner />
    </>
  )
}
