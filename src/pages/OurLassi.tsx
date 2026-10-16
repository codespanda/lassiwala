import { useState } from "react"
import { Check, Minus, PartyPopper, Plus, ShoppingCart, Star } from "lucide-react"
import { Link } from "react-router-dom"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { PageHero } from "@/components/layout/PageHero"
import { Highlights } from "@/components/sections/Highlights"
import { useCart } from "@/context/cart"
import { flavors, formatINR, type Flavor, type Size } from "@/data/flavors"
import { cn } from "@/lib/utils"

const filters = ["All", "Bestsellers", "Sweet", "Fruity", "Floral", "Spiced", "Royal"] as const
type Filter = (typeof filters)[number]

export default function OurLassi() {
  const [filter, setFilter] = useState<Filter>("All")
  const shown = flavors.filter((f) =>
    filter === "All" ? true : filter === "Bestsellers" ? f.bestseller : f.taste === filter
  )

  return (
    <>
      <PageHero
        crumb="Our Lassi"
        eyebrow="Order fresh"
        title="OUR"
        accent="LASSI"
        description="Churned every morning, poured into clay kulhads or sealed bottles, and delivered chilled. Pick your favourite, choose a size and we'll bring it to your door."
      />
      <Highlights />

      <section className="container-x py-14 sm:py-16">
        <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter lassi">
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors",
                filter === f ? "border-navy bg-navy text-white" : "border-navy/20 bg-white text-navy hover:border-green hover:text-green"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((f) => (
            <ProductCard key={f.slug} flavor={f} />
          ))}
        </div>
      </section>

      <section className="container-x pb-4">
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-gradient-to-r from-[#fdf0e6] to-[#fdf6ea] px-6 py-8 text-center md:flex-row md:px-12 md:text-left">
          <span className="grid size-16 shrink-0 place-items-center rounded-full bg-white text-clay shadow-sm">
            <PartyPopper className="size-8" strokeWidth={1.5} />
          </span>
          <div className="flex-1">
            <h2 className="font-heading text-2xl font-semibold uppercase tracking-wide text-navy">Planning a party or a shaadi?</h2>
            <p className="mt-1 text-sm text-foreground/80">
              Bulk orders of 25+ kulhads get special pricing, custom flavours and a live lassi counter on request.
            </p>
          </div>
          <Button size="lg" asChild>
            <Link to="/contact">Get a quote</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

function ProductCard({ flavor: f }: { flavor: Flavor }) {
  const { add, setOpen } = useCart()
  const [size, setSize] = useState<Size["id"]>("250")
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const price = f.sizes.find((s) => s.id === size)!.price

  const onAdd = () => {
    add(f.slug, size, qty)
    setAdded(true)
    setQty(1)
    setTimeout(() => setAdded(false), 1600)
  }

  return (
    <Card className="group flex flex-col overflow-hidden border-[#f1e9dc] bg-white p-2 shadow-[0_6px_24px_-12px_rgba(19,35,91,0.25)] transition-shadow hover:shadow-[0_18px_36px_-14px_rgba(19,35,91,0.3)]">
      <div className={cn("relative overflow-hidden rounded-lg", f.tint)}>
        <img
          src={f.img}
          alt={f.name}
          loading="lazy"
          className="mx-auto aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {f.bestseller && (
          <Badge variant="secondary" className="absolute left-3 top-3 shadow">
            <Star className="size-3 fill-current" /> Bestseller
          </Badge>
        )}
      </div>

      <div className="flex flex-1 flex-col px-3 pb-3 pt-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className={cn("font-heading text-xl font-semibold uppercase tracking-wide", f.color)}>{f.name}</h3>
          <span className="font-heading text-xl font-semibold text-navy">{formatINR(price)}</span>
        </div>
        <p className="mt-1 text-sm text-foreground/75">{f.short}</p>
        <p className="mt-2 text-xs text-muted-foreground">
          {f.kcal} kcal · {f.protein}g protein · {f.calcium}% calcium
        </p>

        <div className="mt-4 grid grid-cols-2 gap-2" role="radiogroup" aria-label={`${f.name} size`}>
          {f.sizes.map((s) => (
            <button
              key={s.id}
              role="radio"
              aria-checked={size === s.id}
              onClick={() => setSize(s.id)}
              className={cn(
                "cursor-pointer rounded-lg border px-2 py-2 text-left text-xs transition-colors",
                size === s.id ? "border-green bg-accent text-navy" : "border-border text-muted-foreground hover:border-green/50"
              )}
            >
              <span className="block font-semibold">{s.label}</span>
              {formatINR(s.price)}
            </button>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-2 pt-4">
          <div className="flex items-center rounded-lg border">
            <Button variant="ghost" size="icon" className="size-9" aria-label="Decrease quantity" onClick={() => setQty((q) => Math.max(1, q - 1))}>
              <Minus className="size-3.5" />
            </Button>
            <span className="w-6 text-center text-sm font-semibold" aria-live="polite">
              {qty}
            </span>
            <Button variant="ghost" size="icon" className="size-9" aria-label="Increase quantity" onClick={() => setQty((q) => Math.min(20, q + 1))}>
              <Plus className="size-3.5" />
            </Button>
          </div>
          <Button variant={added ? "default" : "secondary"} className="h-10 flex-1 tracking-wide" onClick={onAdd}>
            {added ? (
              <>
                <Check className="size-4" /> ADDED
              </>
            ) : (
              <>
                <ShoppingCart className="size-4" /> ADD TO CART
              </>
            )}
          </Button>
        </div>
        {added && (
          <button onClick={() => setOpen(true)} className="mt-2 cursor-pointer text-center text-xs font-medium text-green hover:underline">
            View cart →
          </button>
        )}
      </div>
    </Card>
  )
}
