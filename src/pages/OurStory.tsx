import { ArrowRight, Quote } from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/layout/PageHero"
import { HeartDivider, SectionTitle } from "@/components/ornaments"
import village from "@/assets/village.webp"
import cup from "@/assets/cup.png"

const timeline = [
  {
    year: "1972",
    title: "Nani's kitchen in Punjab",
    text: "It all began in a small village near Amritsar, where Nani churned lassi every afternoon in a wooden madhani for the whole mohalla.",
  },
  {
    year: "2015",
    title: "The first cart",
    text: "Her grandson brought the recipe to Delhi and set up a little lassi cart in Chandni Chowk. It sold out by noon on day one.",
  },
  {
    year: "2018",
    title: "Our first outlet",
    text: "A tiny shop in Lajpat Nagar with five flavours, clay kulhads and a queue that went round the block every summer.",
  },
  {
    year: "2021",
    title: "Delivered to your door",
    text: "Chilled delivery launched across Delhi NCR, with insulated packaging that keeps every bottle cold for hours.",
  },
  {
    year: "Today",
    title: "12 outlets & counting",
    text: "Same recipe, same love — now poured for thousands of families every week. And we're just getting started.",
  },
]

export default function OurStory() {
  return (
    <>
      <PageHero
        crumb="Our Story"
        eyebrow="From Nani's kitchen"
        title="OUR"
        accent="STORY"
        description="Three generations, one recipe and a whole lot of curd. This is how a village tradition became Delhi's favourite lassi."
      />

      {/* opening */}
      <section className="container-x relative z-10 -mt-10 grid items-center gap-10 pb-16 md:grid-cols-[1.1fr_1fr] md:gap-14">
        <div className="overflow-hidden rounded-3xl bg-[#f4f7ef] shadow-[0_20px_50px_-20px_rgba(19,35,91,0.35)]">
          <img src={village} alt="Illustration of a village home with a wooden lassi churner" className="w-full object-cover" />
        </div>
        <div className="text-center md:text-left">
          <p className="font-script text-3xl text-green">It started with a madhani…</p>
          <p className="mt-4 leading-relaxed text-foreground/85">
            Every summer afternoon, the clink of steel glasses and the rhythmic sound of a wooden churner filled Nani&apos;s
            courtyard. Neighbours would drop by &ldquo;just to say hello&rdquo; — and leave with a tall glass of the thickest,
            creamiest lassi in the village.
          </p>
          <p className="mt-4 leading-relaxed text-foreground/85">
            She never wrote the recipe down. We learned it the only way you can: by watching, tasting and getting it wrong a
            hundred times. LassiWala is our way of sharing that courtyard with all of you.
          </p>
        </div>
      </section>

      {/* timeline */}
      <section className="container-x pb-16">
        <SectionTitle>The journey so far</SectionTitle>
        <ol className="relative mx-auto mt-12 max-w-4xl">
          <span className="absolute bottom-0 left-5 top-0 w-0.5 bg-gradient-to-b from-green via-green/50 to-transparent md:left-1/2 md:-translate-x-1/2" aria-hidden />
          {timeline.map((t, i) => (
            <li key={t.year} className="relative mb-10 grid grid-cols-[2.5rem_1fr] gap-4 md:grid-cols-2 md:gap-12">
              <span className="relative z-10 mt-1 grid size-10 place-items-center rounded-full border-4 border-background bg-green text-white shadow md:absolute md:left-1/2 md:-translate-x-1/2">
                <span className="size-2 rounded-full bg-white" />
              </span>
              <div className={i % 2 === 0 ? "md:col-start-1 md:text-right" : "md:col-start-2"}>
                <div className="rounded-2xl border border-[#f1e9dc] bg-[#fdf9f2] p-5 shadow-sm">
                  <p className="font-display text-3xl tracking-wide text-clay">{t.year}</p>
                  <h3 className="mt-1 font-heading text-lg font-semibold uppercase tracking-wide text-navy">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* founder quote */}
      <section className="container-x pb-6">
        <figure className="relative overflow-hidden rounded-3xl bg-navy px-6 py-12 text-center text-white sm:px-16">
          <Quote className="mx-auto size-10 rotate-180 fill-current stroke-0 text-white/20" />
          <blockquote className="mx-auto mt-4 max-w-3xl font-script text-2xl leading-relaxed sm:text-3xl">
            &ldquo;Nani always said a good lassi can&apos;t be rushed. We still set every batch of curd overnight — because
            some things are worth the wait.&rdquo;
          </blockquote>
          <HeartDivider width="w-16" className="mt-6 justify-center [&>span:not(:nth-child(2))]:bg-white/40" />
          <figcaption className="mt-3 text-sm text-white/80">Founder, LassiWala</figcaption>
          <img src={cup} alt="" className="pointer-events-none absolute -bottom-4 -right-4 hidden w-40 opacity-90 md:block" />
        </figure>
      </section>

      <section className="container-x py-14 text-center">
        <h2 className="font-heading text-2xl font-semibold uppercase tracking-wide text-navy sm:text-3xl">
          Taste the story for yourself
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button size="lg" variant="secondary" asChild>
            <Link to="/our-lassi">
              ORDER NOW <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-navy text-navy" asChild>
            <Link to="/find-us">Visit an outlet</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
