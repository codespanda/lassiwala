import { Droplet, HandHeart, Leaf, Milk, Snowflake, Sparkles, Truck, UtensilsCrossed } from "lucide-react"

import { Card } from "@/components/ui/card"
import { PageHero } from "@/components/layout/PageHero"
import { Feeling } from "@/components/sections/Feeling"
import { Testimonials } from "@/components/sections/Testimonials"
import { HeartDivider, SectionTitle } from "@/components/ornaments"
import hero from "@/assets/hero.webp"

const stats = [
  { value: "5", label: "Signature flavours" },
  { value: "50K+", label: "Kulhads served" },
  { value: "12", label: "Outlets in Delhi NCR" },
  { value: "4.8★", label: "Average rating" },
]

const values = [
  { icon: Leaf, title: "Purity", text: "No preservatives, no artificial colours, no shortcuts. Just milk, curd and real ingredients.", tone: "bg-green-100 text-green" },
  { icon: Sparkles, title: "Tradition", text: "Recipes passed down through generations and made the slow, patient way.", tone: "bg-amber-100 text-amber-600" },
  { icon: Snowflake, title: "Freshness", text: "Curd is set overnight and churned every morning — nothing sits on a shelf.", tone: "bg-sky-100 text-sky-600" },
  { icon: HandHeart, title: "Community", text: "We source milk from local dairy farmers and buy kulhads from village potters.", tone: "bg-rose-100 text-heart" },
]

const process = [
  { icon: Milk, title: "Fresh milk", text: "Collected at dawn from partner farms within 50 km." },
  { icon: Droplet, title: "Slow-set curd", text: "Set overnight in clay pots for a thick, creamy texture." },
  { icon: UtensilsCrossed, title: "Hand churned", text: "Whisked with a wooden madhani, the traditional way." },
  { icon: Truck, title: "Chilled & delivered", text: "Poured, sealed and on its way to you in under an hour." },
]

export default function About() {
  return (
    <>
      <PageHero
        crumb="About Us"
        eyebrow="Who we are"
        title="ABOUT"
        accent="LASSIWALA"
        description="We're a small team of lassi lovers on a mission to bring India's favourite drink back to its roots — pure, honest and made with love."
      />

      {/* intro */}
      <section className="container-x relative z-10 -mt-10 grid items-center gap-10 pb-16 md:grid-cols-2 md:gap-14">
        <div className="relative">
          <img src={hero} alt="A kulhad of LassiWala lassi" className="w-full rounded-3xl object-cover shadow-[0_20px_50px_-20px_rgba(19,35,91,0.4)]" />
          <div className="absolute -bottom-6 left-6 rounded-2xl bg-navy px-5 py-4 text-white shadow-xl">
            <p className="font-script text-2xl">Since 2015</p>
            <p className="text-xs text-white/80">Pouring happiness in Delhi</p>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h2 className="font-heading text-3xl font-semibold uppercase leading-tight tracking-wide text-navy">
            Real ingredients. <span className="text-green">Real joy.</span>
          </h2>
          <HeartDivider width="w-16" className="mt-2 justify-center md:justify-start" />
          <p className="mt-5 leading-relaxed text-foreground/85">
            LassiWala started as a single cart outside a Chandni Chowk sweet shop. Today we serve thousands of kulhads every
            week across Delhi — but the recipe hasn&apos;t changed one bit.
          </p>
          <p className="mt-4 leading-relaxed text-foreground/85">
            Every lassi is made from curd we set ourselves, sweetened lightly and flavoured with the real thing: Alphonso
            mangoes, Kashmiri saffron, gulkand and freshly roasted spices. We serve it in eco-friendly clay kulhads because
            that earthy aroma is part of the experience.
          </p>
        </div>
      </section>

      {/* stats */}
      <section className="bg-navy py-10 text-white">
        <dl className="container-x grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-4xl tracking-wide sm:text-5xl">{s.value}</dd>
              <dd className="mt-1 text-xs uppercase tracking-wider text-white/70">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* values */}
      <section className="container-x py-16">
        <SectionTitle>What we stand for</SectionTitle>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text, tone }) => (
            <Card key={title} className="border-[#f1e9dc] bg-[#fdf9f2] p-6 text-center transition-transform hover:-translate-y-1">
              <span className={`mx-auto grid size-16 place-items-center rounded-full ${tone}`}>
                <Icon className="size-8" strokeWidth={1.6} />
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold uppercase tracking-wide text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* process */}
      <section className="bg-gradient-to-b from-[#f4f7ef] to-transparent py-16">
        <div className="container-x">
          <SectionTitle>How every cup is made</SectionTitle>
          <ol className="relative mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <span className="absolute left-[12.5%] right-[12.5%] top-8 hidden border-t-2 border-dashed border-green/40 lg:block" aria-hidden />
            {process.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="relative text-center">
                <span className="relative mx-auto grid size-16 place-items-center rounded-full border-2 border-green bg-white text-green">
                  <Icon className="size-7" strokeWidth={1.6} />
                  <span className="absolute -right-1 -top-1 grid size-6 place-items-center rounded-full bg-navy text-xs font-bold text-white">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold uppercase tracking-wide text-navy">{title}</h3>
                <p className="mx-auto mt-1 max-w-[14rem] text-sm text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="pt-4">
        <Feeling />
      </div>
      <Testimonials />
    </>
  )
}
