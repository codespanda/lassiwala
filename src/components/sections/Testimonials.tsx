import { Quote, Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { SectionTitle } from "@/components/ornaments"
import { cn } from "@/lib/utils"
import priya from "@/assets/priya.webp"
import rohan from "@/assets/rohan.webp"
import neha from "@/assets/neha.webp"

const reviews = [
  { name: "Priya S.", quote: "The best lassi I’ve ever had! So fresh and pure.", img: priya, bg: "bg-[#fdf1ee]", mark: "text-sky-300" },
  { name: "Rohan K.", quote: "Mango lassi is out of this world!", img: rohan, bg: "bg-[#f1f5ec]", mark: "text-green/40" },
  { name: "Neha T.", quote: "Finally a lassi that tastes just like home.", img: neha, bg: "bg-[#fdf0f0]", mark: "text-heart/40" },
]

export function Testimonials() {
  return (
    <section className="container-x py-14 sm:py-16">
      <SectionTitle>What our lassi lovers say</SectionTitle>

      <div className="mx-auto mt-8 grid max-w-5xl gap-5 md:grid-cols-3">
        {reviews.map((r) => (
          <Card key={r.name} className={cn("relative border-0 shadow-none transition-shadow hover:shadow-md", r.bg)}>
            <CardContent className="flex items-center gap-4 p-5">
              <img src={r.img} alt={r.name} loading="lazy" width={64} height={64} className="size-16 shrink-0 rounded-full object-cover ring-2 ring-white" />
              <figure>
                <div className="flex gap-0.5 text-amber-400" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-2 pr-8 text-sm leading-relaxed text-foreground">“{r.quote}”</blockquote>
                <figcaption className="mt-2 text-sm text-foreground/80">– {r.name}</figcaption>
              </figure>
              <Quote className={cn("absolute bottom-4 right-4 size-8 rotate-180 fill-current stroke-0", r.mark)} />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
