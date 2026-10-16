import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"

import { Header } from "@/components/sections/Header"
import { Footer } from "@/components/sections/Footer"
import { CartSheet } from "@/components/layout/CartSheet"

const titles: Record<string, string> = {
  "/": "LassiWala – Pure. Refreshing. Indian.",
  "/our-lassi": "Our Lassi – Order Online | LassiWala",
  "/flavors": "Flavors | LassiWala",
  "/about": "About Us | LassiWala",
  "/our-story": "Our Story | LassiWala",
  "/find-us": "Find Us | LassiWala",
  "/contact": "Contact | LassiWala",
}

function useRouteEffects() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    document.title = titles[pathname] ?? "LassiWala"
    if (hash) {
      // wait a frame so the target section exists after navigation
      requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" }))
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [pathname, hash])
}

/**
 * The header is sticky with a negative bottom margin, so it floats over each
 * page's paper-textured hero. Every page's first section adds top padding
 * (`pt-header`) to clear it.
 */
export function Layout() {
  useRouteEffects()
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartSheet />
    </>
  )
}
