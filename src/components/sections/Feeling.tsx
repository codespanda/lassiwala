import { ArrowRight, Droplets, ShieldPlus, Smile, Sprout } from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { HeartDivider } from "@/components/ornaments"
import village from "@/assets/village.webp"

const benefits = [
  { icon: Sprout, label: "Good for Digestion" },
  { icon: ShieldPlus, label: "Boosts Immunity" },
  { icon: Droplets, label: "Keeps You Hydrated" },
  { icon: Smile, label: "Makes Every Moment Better" },
]

export function Feeling() {
  return (
    <section className="container-x">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#eef4ea] via-[#f4f7ef] to-[#f7f2e6]">
        <div className="grid items-center gap-8 px-5 py-8 sm:px-10 lg:grid-cols-[1.05fr_1.35fr_0.95fr] lg:gap-4 lg:py-6 lg:pl-14 lg:pr-0">
          <div className="text-center lg:text-left">
            <h2 className="font-heading text-[1.65rem] font-semibold uppercase leading-tight tracking-wide sm:text-3xl lg:whitespace-nowrap lg:text-[1.55rem] xl:text-[1.75rem]">
              <span className="text-navy">More than just a drink,</span>
              <br />
              <span className="text-green">it&apos;s a feeling!</span>
            </h2>
            <HeartDivider width="w-20 sm:w-24" className="mt-2 justify-center lg:justify-start" />
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-foreground/85 lg:mx-0">
              At LassiWala, we celebrate India&apos;s most loved drink with pure ingredients, authentic recipes and a lot of
              love in every cup.
            </p>
            <Button className="mt-5 h-10 rounded-lg px-5 text-xs tracking-wide" asChild>
              <Link to="/our-story">
                KNOW OUR STORY <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <ul className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-3">
            {benefits.map(({ icon: Icon, label }) => (
              <li key={label} className="group flex flex-col items-center gap-3 text-center">
                <span className="grid size-16 place-items-center rounded-full border-[1.5px] border-green/80 text-green transition-colors group-hover:bg-green group-hover:text-white">
                  <Icon className="size-8" strokeWidth={1.4} />
                </span>
                <span className="max-w-[7.5rem] text-sm font-medium leading-snug text-navy">{label}</span>
              </li>
            ))}
          </ul>

          <img
            src={village}
            alt="Hand-painted village scene with a wooden churner and fresh curd"
            loading="lazy"
            width={252}
            height={210}
            className="fade-left mx-auto hidden w-full max-w-xs self-stretch object-cover sm:block lg:max-w-none"
          />
        </div>
      </div>
    </section>
  )
}
