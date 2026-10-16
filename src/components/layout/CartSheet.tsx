import { useState } from "react"
import { CheckCircle2, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Sheet } from "@/components/ui/sheet"
import { priceOf, useCart } from "@/context/cart"
import { flavors, formatINR } from "@/data/flavors"

const FREE_DELIVERY_AT = 299
const DELIVERY_FEE = 30

export function CartSheet() {
  const { lines, total, open, setOpen, setQty, clear } = useCart()
  const [placed, setPlaced] = useState(false)
  const delivery = total === 0 || total >= FREE_DELIVERY_AT ? 0 : DELIVERY_FEE

  const close = (next: boolean) => {
    setOpen(next)
    if (!next) setPlaced(false)
  }

  return (
    <Sheet open={open} onOpenChange={close} className="max-w-md p-0">
      <div className="border-b px-6 py-5">
        <h2 className="font-heading text-xl font-semibold uppercase tracking-wide text-navy">Your Cart</h2>
      </div>

      {placed ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
          <CheckCircle2 className="size-14 text-green" strokeWidth={1.5} />
          <p className="font-script text-3xl text-navy">Shukriya!</p>
          <p className="text-sm text-muted-foreground">
            Your order request is in. We&apos;ll call you to confirm delivery. (Online checkout isn&apos;t connected yet.)
          </p>
          <Button className="mt-2" onClick={() => close(false)}>
            Continue browsing
          </Button>
        </div>
      ) : lines.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
          <ShoppingBag className="size-12 text-muted-foreground" strokeWidth={1.3} />
          <p className="font-medium text-navy">Your cart is empty</p>
          <p className="text-sm text-muted-foreground">Pick a lassi you love and it&apos;ll show up here.</p>
          <Button variant="secondary" className="mt-2" asChild onClick={() => close(false)}>
            <Link to="/our-lassi">Browse lassi</Link>
          </Button>
        </div>
      ) : (
        <>
          <ul className="flex-1 divide-y overflow-y-auto px-6">
            {lines.map((line) => {
              const f = flavors.find((x) => x.slug === line.slug)!
              const size = f.sizes.find((s) => s.id === line.size)!
              return (
                <li key={`${line.slug}-${line.size}`} className="flex gap-3 py-4">
                  <img src={f.img} alt="" className="size-16 shrink-0 rounded-lg object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className={`font-heading font-semibold uppercase tracking-wide ${f.color}`}>{f.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {size.label} · {formatINR(size.price)}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="size-7"
                        aria-label="Decrease quantity"
                        onClick={() => setQty(line.slug, line.size, line.qty - 1)}
                      >
                        <Minus className="size-3" />
                      </Button>
                      <span className="w-6 text-center text-sm font-semibold">{line.qty}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="size-7"
                        aria-label="Increase quantity"
                        onClick={() => setQty(line.slug, line.size, line.qty + 1)}
                      >
                        <Plus className="size-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="ml-auto size-7 text-muted-foreground hover:text-heart"
                        aria-label={`Remove ${f.name}`}
                        onClick={() => setQty(line.slug, line.size, 0)}
                      >
                        <Trash2 className="size-4" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-navy">{formatINR(priceOf(line) * line.qty)}</p>
                </li>
              )
            })}
          </ul>

          <div className="space-y-2 border-t bg-cream px-6 py-5 text-sm">
            {delivery > 0 && (
              <p className="rounded-md bg-accent px-3 py-2 text-xs text-green">
                Add {formatINR(FREE_DELIVERY_AT - total)} more for free delivery
              </p>
            )}
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>{formatINR(total)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Delivery</span>
              <span>{delivery ? formatINR(delivery) : "Free"}</span>
            </div>
            <div className="flex justify-between border-t pt-2 text-base font-semibold text-navy">
              <span>Total</span>
              <span>{formatINR(total + delivery)}</span>
            </div>
            <Button
              variant="secondary"
              size="lg"
              className="mt-2 w-full"
              onClick={() => {
                clear()
                setPlaced(true)
              }}
            >
              PLACE ORDER
            </Button>
          </div>
        </>
      )}
    </Sheet>
  )
}
