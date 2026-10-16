import { Link } from "react-router-dom"

import { Card } from "@/components/ui/card"
import { SectionTitle } from "@/components/ornaments"
import { flavors } from "@/data/flavors"
import { cn } from "@/lib/utils"

export function LassiRange() {
  return (
    <section id="range" className="container-x scroll-mt-24 py-14 sm:py-16">
      <SectionTitle>Our Lassi Range</SectionTitle>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
        {flavors.map((f, i) => (
          <Card
            key={f.slug}
            className={cn(
              "group overflow-hidden border-[#f1e9dc] bg-[#fdf9f2] p-1.5 shadow-[0_6px_20px_-10px_rgba(19,35,91,0.25)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_30px_-12px_rgba(19,35,91,0.3)]",
              // keep the last card centred when it sits alone on a 2-column row
              i === flavors.length - 1 && "col-span-2 mx-auto w-[calc(50%-0.375rem)] sm:col-span-1 sm:w-auto"
            )}
          >
            <Link to={`/flavors#${f.slug}`} className="block rounded-lg outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={f.img}
                  alt={f.name}
                  loading="lazy"
                  width={150}
                  height={166}
                  className="aspect-[150/166] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-2 pb-4 pt-3 text-center">
                <h3 className={cn("font-heading text-lg font-semibold uppercase tracking-wide", f.color)}>{f.name}</h3>
                <p className="mx-auto mt-1 max-w-[12rem] text-xs leading-relaxed text-foreground/85 sm:text-[0.8rem]">{f.short}</p>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  )
}
