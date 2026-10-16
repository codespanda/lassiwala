import { CupSoda, Heart, Leaf, Snowflake } from "lucide-react"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const items = [
  { icon: Snowflake, title: "Always Fresh", text: "Chilled & delivered fresh to you.", tone: "bg-sky-100 text-sky-600" },
  { icon: Leaf, title: "Real Ingredients", text: "No artificial flavors or colors.", tone: "bg-green-100 text-green" },
  { icon: CupSoda, title: "Authentic Recipe", text: "Traditional taste, just like home.", tone: "bg-rose-100 text-heart" },
  { icon: Heart, title: "Good For You", text: "Source of calcium & probiotics.", tone: "bg-amber-100 text-amber-500" },
]

export function Highlights() {
  return (
    <div className="container-x relative z-10 -mt-16 sm:-mt-20 lg:-mt-16">
      <Card className="grid grid-cols-2 gap-y-6 border-0 px-3 py-6 shadow-[0_10px_40px_-12px_rgba(19,35,91,0.2)] sm:px-6 lg:grid-cols-4 lg:py-5">
        {items.map(({ icon: Icon, title, text, tone }, i) => (
          <div
            key={title}
            className={cn(
              "flex flex-col items-center gap-3 px-2 text-center sm:flex-row sm:text-left lg:justify-center lg:px-5",
              i % 2 === 1 && "border-l",
              i === 2 && "lg:border-l"
            )}
          >
            <span className={cn("grid size-14 shrink-0 place-items-center rounded-full", tone)}>
              <Icon className="size-7" strokeWidth={1.7} />
            </span>
            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-navy">{title}</h3>
              <p className="mt-1 max-w-[11rem] text-xs leading-relaxed text-muted-foreground">{text}</p>
            </div>
          </div>
        ))}
      </Card>
    </div>
  )
}
