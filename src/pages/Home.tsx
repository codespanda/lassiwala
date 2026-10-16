import { Hero } from "@/components/sections/Hero"
import { Highlights } from "@/components/sections/Highlights"
import { LassiRange } from "@/components/sections/LassiRange"
import { Feeling } from "@/components/sections/Feeling"
import { Testimonials } from "@/components/sections/Testimonials"
import { OrderBanner } from "@/components/sections/OrderBanner"

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <LassiRange />
      <Feeling />
      <Testimonials />
      <OrderBanner />
    </>
  )
}
