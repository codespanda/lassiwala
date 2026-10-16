import { ArrowRight, Leaf, Milk, Soup } from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { HeartDivider } from "@/components/ornaments"
import { cn } from "@/lib/utils"
import hero from "@/assets/hero.webp"

const points = [
  { icon: Leaf, title: "100% Natural", sub: "No Preservatives", round: true },
  { icon: Milk, title: "Made with", sub: "Pure Milk", round: false },
  { icon: Soup, title: "Rich in Taste", sub: "& Tradition", round: true },
]

function Sparks({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <path d="M4 20 9 15M12 13l3-9M15 17l6-3" />
    </svg>
  )
}

export function Hero() {
  return (
    <section id="home" className="paper-bg pt-header relative pb-24 sm:pb-28 lg:pb-20">
      <div className="container-x relative grid items-center gap-4 lg:grid-cols-[1fr_1.15fr] lg:gap-0">
        {/* Copy */}
        <div className="relative z-10 order-2 text-center lg:order-1 lg:pl-12 lg:text-left">
          <p className="font-script text-4xl text-navy sm:text-5xl">Taste the</p>
          <h1 className="mt-1 leading-[0.95]">
            <span className="relative inline-flex items-end font-display text-[3.4rem] tracking-tight text-navy sm:text-7xl xl:text-[5.4rem]">
              <Sparks className="absolute -left-9 top-8 hidden size-6 rotate-180 text-leaf lg:block" />
              GOODNESS
              <span className="ml-1 pb-2 font-script text-3xl sm:pb-3 sm:text-4xl">of</span>
              <Sparks className="absolute -right-8 -top-4 size-7 text-leaf" />
            </span>
            <span className="block font-display text-[3.4rem] tracking-tight text-green sm:text-7xl xl:text-[5.4rem]">
              TRADITION
            </span>
          </h1>
          <HeartDivider width="w-24 sm:w-36" className="mt-4 justify-center lg:-ml-3 lg:justify-start" />

          <p className="mt-5 text-base leading-relaxed sm:text-lg">
            Made with real ingredients.
            <br />
            Chilled to perfection.
          </p>

          <ul className="mx-auto mt-6 grid max-w-md grid-cols-3 gap-2 sm:max-w-lg sm:gap-0 lg:mx-0">
            {points.map(({ icon: Icon, title, sub, round }, i) => (
              <li
                key={title}
                className={cn(
                  "flex flex-col items-center gap-2 px-1 text-center sm:flex-row sm:px-3 sm:text-left",
                  i > 0 && "sm:border-l sm:border-navy/15",
                  i === 0 && "lg:pl-0"
                )}
              >
                <span
                  className={cn(
                    "grid size-10 shrink-0 place-items-center text-green",
                    round && "rounded-full border-[1.5px] border-green"
                  )}
                >
                  <Icon className={round ? "size-5" : "size-8 text-navy"} strokeWidth={1.6} />
                </span>
                <span className="text-xs leading-snug sm:text-[0.8rem]">
                  <strong className="block font-semibold text-navy">{title}</strong>
                  <span className="text-navy/80">{sub}</span>
                </span>
              </li>
            ))}
          </ul>

          <Button size="lg" className="mt-8 h-12 rounded-xl px-7 text-sm tracking-wide" asChild>
            <Link to="/flavors">
              EXPLORE FLAVORS <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        {/* Visual */}
        <div className="relative order-1 -mx-4 sm:mx-0 lg:order-2 lg:-mr-8 xl:-mr-20">
          <img
            src={hero}
            alt="LassiWala lassi in a traditional kulhad topped with pistachios and rose petals"
            className="fade-left mx-auto w-full max-w-xl lg:max-w-none"
            width={509}
            height={444}
          />
        </div>
      </div>
    </section>
  )
}
