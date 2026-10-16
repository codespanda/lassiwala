import { useMemo, useState } from "react"
import { Clock, Navigation, Phone, Search, Store } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PageHero } from "@/components/layout/PageHero"
import { OrderBanner } from "@/components/sections/OrderBanner"
import { cn } from "@/lib/utils"

type Outlet = { name: string; address: string; area: string; open: number; close: number }

const PHONE = "+91 62803 47210"

const outlets: Outlet[] = [
  { name: "Chandni Chowk", address: "Main Bazaar Road, Chandni Chowk, Delhi 110006", area: "Old Delhi", open: 9, close: 22 },
  { name: "Lajpat Nagar", address: "Central Market, Lajpat Nagar II, Delhi 110024", area: "South Delhi", open: 10, close: 23 },
  { name: "Connaught Place", address: "Inner Circle, Connaught Place, Delhi 110001", area: "Central Delhi", open: 10, close: 23 },
  { name: "Rajouri Garden", address: "Main Market, Rajouri Garden, Delhi 110027", area: "West Delhi", open: 10, close: 22 },
  { name: "Hauz Khas", address: "Hauz Khas Village, Delhi 110016", area: "South Delhi", open: 11, close: 23 },
  { name: "Cyber Hub", address: "Ground Floor, DLF Cyber Hub, Gurugram 122002", area: "Gurugram", open: 11, close: 23 },
]

const fmt = (h: number) => `${((h + 11) % 12) + 1}:00 ${h < 12 ? "AM" : "PM"}`

export default function FindUs() {
  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState(outlets[0].name)
  const hour = new Date().getHours()

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return q ? outlets.filter((o) => `${o.name} ${o.address} ${o.area}`.toLowerCase().includes(q)) : outlets
  }, [query])

  const active = outlets.find((o) => o.name === selected)!
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(`LassiWala ${active.address}`)}&z=15&output=embed`

  return (
    <>
      <PageHero
        crumb="Find Us"
        eyebrow="Come say hello"
        title="FIND"
        accent="US"
        description="Drop by any of our outlets for a fresh kulhad straight from the churner — or order online and we'll bring it to you."
      />

      <section className="container-x relative z-10 -mt-14 pb-6 sm:-mt-16">
        <div className="grid overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_-12px_rgba(19,35,91,0.2)] lg:grid-cols-[minmax(0,26rem)_1fr]">
          <div className="flex flex-col border-b lg:border-b-0 lg:border-r">
            <label className="relative block border-b p-4">
              <span className="sr-only">Search outlets</span>
              <Search className="absolute left-7 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by area or pincode" className="h-11 pl-10" />
            </label>

            <ul className="max-h-[32rem] flex-1 divide-y overflow-y-auto">
              {results.length === 0 && (
                <li className="p-6 text-center text-sm text-muted-foreground">No outlets match “{query}”. Try ordering online!</li>
              )}
              {results.map((o) => {
                const isOpen = hour >= o.open && hour < o.close
                const isActive = o.name === selected
                return (
                  <li key={o.name}>
                    <button
                      onClick={() => setSelected(o.name)}
                      className={cn(
                        "flex w-full cursor-pointer gap-3 p-4 text-left transition-colors hover:bg-cream",
                        isActive && "bg-accent hover:bg-accent"
                      )}
                      aria-pressed={isActive}
                    >
                      <span className={cn("grid size-10 shrink-0 place-items-center rounded-full", isActive ? "bg-green text-white" : "bg-muted text-navy")}>
                        <Store className="size-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center justify-between gap-2">
                          <span className="font-heading text-base font-semibold uppercase tracking-wide text-navy">{o.name}</span>
                          <Badge variant={isOpen ? "soft" : "outline"} className={isOpen ? "" : "text-muted-foreground"}>
                            {isOpen ? "Open now" : "Closed"}
                          </Badge>
                        </span>
                        <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">{o.address}</span>
                        <span className="mt-1 flex items-center gap-1 text-xs text-navy/80">
                          <Clock className="size-3" /> {fmt(o.open)} – {fmt(o.close)}
                        </span>
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="flex flex-col">
            <iframe
              key={active.name}
              title={`Map of LassiWala ${active.name}`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full flex-1 border-0 sm:h-96 lg:h-auto lg:min-h-[28rem]"
            />
            <div className="flex flex-wrap items-center justify-between gap-3 border-t p-4">
              <div>
                <p className="font-heading text-lg font-semibold uppercase tracking-wide text-navy">LassiWala {active.name}</p>
                <p className="text-xs text-muted-foreground">{active.area}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" asChild>
                  <a href="tel:+916280347210" aria-label={`Call ${PHONE}`}>
                    <Phone className="size-4" /> Call
                  </a>
                </Button>
                <Button variant="secondary" asChild>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(active.address)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Navigation className="size-4" /> Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OrderBanner />
    </>
  )
}
