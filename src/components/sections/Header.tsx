import { useEffect, useState } from "react"
import { Menu, ShoppingCart } from "lucide-react"
import { Link, NavLink, useLocation } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Sheet } from "@/components/ui/sheet"
import { Logo } from "@/components/ornaments"
import { useCart } from "@/context/cart"
import { cn } from "@/lib/utils"

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Our Lassi", to: "/our-lassi" },
  { label: "Flavors", to: "/flavors" },
  { label: "About Us", to: "/about" },
  { label: "Our Story", to: "/our-story" },
  { label: "Find Us", to: "/find-us" },
  { label: "Contact", to: "/contact" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { count, setOpen: setCartOpen } = useCart()
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header
      className={cn(
        "sticky top-0 z-40 -mb-20 transition-[background-color,box-shadow] duration-300 lg:-mb-24",
        scrolled ? "bg-[#fbf7ef]/95 shadow-sm backdrop-blur" : "bg-transparent"
      )}
    >
      <div className="container-x flex h-20 items-center justify-between gap-4 lg:h-24">
        <Logo />

        <nav className="hidden items-center gap-6 lg:flex xl:gap-9" aria-label="Main">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end
              className={({ isActive }) =>
                cn(
                  "relative py-2 text-sm font-medium text-navy transition-colors hover:text-green",
                  "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-green after:transition-transform",
                  isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {pathname === "/our-lassi" ? (
            <Button
              variant="secondary"
              className="relative h-10 rounded-full px-4 text-xs tracking-wide sm:h-11 sm:px-6 sm:text-sm"
              onClick={() => setCartOpen(true)}
            >
              MY CART <ShoppingCart className="size-4" />
              <CartCount count={count} />
            </Button>
          ) : (
            <Button variant="secondary" className="relative h-10 rounded-full px-4 text-xs tracking-wide sm:h-11 sm:px-6 sm:text-sm" asChild>
              <Link to="/our-lassi">
                SHOP NOW <ShoppingCart className="size-4" />
                <CartCount count={count} />
              </Link>
            </Button>
          )}
          <Button variant="ghost" size="icon" className="text-navy lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu className="size-6" />
          </Button>
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <Logo compact className="mb-8" />
        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end
              className={({ isActive }) =>
                cn("rounded-md px-3 py-2.5 font-medium text-navy hover:bg-accent", isActive && "bg-accent text-green")
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </Sheet>
    </header>
  )
}

function CartCount({ count }: { count: number }) {
  if (!count) return null
  return (
    <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-heart text-[0.65rem] font-bold text-white ring-2 ring-white">
      {count > 99 ? "99+" : count}
    </span>
  )
}
