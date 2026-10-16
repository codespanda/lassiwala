import { useState } from "react"
import { Bike, CreditCard, MapPin, Package } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import cup from "@/assets/cup.png"

const perks = [
  { icon: Bike, label: "Fast Delivery" },
  { icon: Package, label: "Safe Packaging" },
  { icon: CreditCard, label: "Easy Payment" },
]

export function OrderBanner() {
  const [pin, setPin] = useState("")
  const [status, setStatus] = useState<{ ok: boolean; msg: string } | null>(null)

  const check = (e: React.FormEvent) => {
    e.preventDefault()
    if (/^[1-9]\d{5}$/.test(pin)) setStatus({ ok: true, msg: `Yay! We deliver fresh lassi to ${pin}.` })
    else setStatus({ ok: false, msg: "Please enter a valid 6-digit pincode." })
  }

  return (
    <section id="order" className="container-x scroll-mt-28 pt-10">
      <div className="relative rounded-2xl bg-navy text-white">
        {/* decorative line-art leaves */}
        <svg viewBox="0 0 60 80" className="absolute bottom-2 right-3 hidden h-16 text-white/30 lg:block" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
          <path d="M10 78C20 50 35 30 55 5M30 45c-8-2-14-8-16-16 8 1 14 7 16 16ZM40 30c2-8 8-13 15-14-1 8-7 13-15 14Z" />
        </svg>

        <div className="grid items-center gap-6 px-5 pb-8 pt-24 sm:px-8 md:pt-8 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-8 xl:gap-10 lg:py-6 lg:pl-40 lg:pr-10">
          <img
            src={cup}
            alt=""
            width={160}
            height={125}
            className="pointer-events-none absolute -top-10 left-1/2 w-40 -translate-x-1/2 drop-shadow-xl md:left-2 md:translate-x-0 lg:-top-8 lg:w-44"
          />

          <div className="text-center md:pl-40 md:text-left lg:pl-0">
            <h2 className="font-script text-3xl sm:text-4xl">Craving Lassi?</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/90">
              Get it delivered fresh &amp; chilled
              <br className="hidden sm:block" /> at your doorstep.
            </p>
          </div>

          <form onSubmit={check} className="mx-auto w-full max-w-lg" noValidate>
            <div className="flex flex-col gap-2 rounded-xl bg-white p-1.5 sm:flex-row sm:gap-0">
              <label className="relative flex-1">
                <span className="sr-only">Pincode</span>
                <Input
                  inputMode="numeric"
                  maxLength={6}
                  value={pin}
                  onChange={(e) => {
                    setPin(e.target.value.replace(/\D/g, ""))
                    setStatus(null)
                  }}
                  placeholder="Enter your pincode"
                  className="h-11 border-0 pr-10 text-foreground shadow-none focus-visible:ring-0"
                />
                <MapPin className="absolute right-3 top-1/2 size-4 -translate-y-1/2 text-navy" />
              </label>
              <Button type="submit" variant="secondary" className="h-11 rounded-lg px-5 text-xs tracking-wide">
                CHECK AVAILABILITY
              </Button>
            </div>
            <p
              role="status"
              className={cn("mt-2 min-h-5 text-center text-xs sm:text-left", status?.ok ? "text-green-300" : "text-rose-300")}
            >
              {status?.msg}
            </p>
          </form>

          <ul className="grid grid-cols-3 gap-3 lg:flex lg:gap-5 xl:gap-7">
            {perks.map(({ icon: Icon, label }) => (
              <li key={label} className="flex flex-col items-center gap-2 text-center">
                <Icon className="size-8" strokeWidth={1.3} />
                <span className="text-[0.65rem] font-semibold uppercase tracking-wide">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
