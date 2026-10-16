import { useState } from "react"
import { CheckCircle2, Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react"
import { Link } from "react-router-dom"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PageHero } from "@/components/layout/PageHero"
import { SectionTitle } from "@/components/ornaments"
import { cn } from "@/lib/utils"

const channels = [
  { icon: Phone, title: "Call us", value: "+91 62803 47210", href: "tel:+916280347210", tone: "bg-sky-100 text-sky-600" },
  { icon: MessageCircle, title: "WhatsApp", value: "Chat with us", href: "https://wa.me/916280347210", tone: "bg-green-100 text-green" },
  { icon: Mail, title: "Email", value: "hello@lassiwala.com", href: "mailto:hello@lassiwala.com", tone: "bg-rose-100 text-heart" },
  { icon: MapPin, title: "Visit", value: "Delhi, India", href: "/find-us", tone: "bg-amber-100 text-amber-600" },
]

const faqs = [
  { q: "Where do you deliver?", a: "We currently deliver across Delhi NCR, including Gurugram and Noida. Enter your pincode on the home page to check availability." },
  { q: "How long does the lassi stay fresh?", a: "Our lassi has no preservatives, so it's best enjoyed within 24 hours. Keep it refrigerated below 5°C and shake well before drinking." },
  { q: "Are your kulhads eco-friendly?", a: "Yes! Our kulhads are handmade by local potters from natural clay. They're fully biodegradable — you can even use them as small plant pots." },
  { q: "Do you take bulk or party orders?", a: "Absolutely. Orders of 25+ kulhads get special pricing, and we can set up a live lassi counter for weddings and events. Use the form above to request a quote." },
  { q: "Is your lassi suitable for vegetarians?", a: "All our lassi is 100% vegetarian and made from cow's milk. We don't currently offer a vegan option, but we're working on one!" },
  { q: "What payment methods do you accept?", a: "We accept UPI, all major cards, net banking and cash on delivery." },
]

type Errors = Partial<Record<"name" | "phone" | "email" | "message", string>>

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState<Errors>({})

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (k: string) => String(data.get(k) ?? "").trim()
    const next: Errors = {}
    if (get("name").length < 2) next.name = "Please tell us your name."
    if (!/^[6-9]\d{9}$/.test(get("phone").replace(/\D/g, "").slice(-10))) next.phone = "Enter a valid 10-digit mobile number."
    if (get("email") && !/^\S+@\S+\.\S+$/.test(get("email"))) next.email = "That email doesn't look right."
    if (get("message").length < 10) next.message = "Message should be at least 10 characters."
    setErrors(next)
    if (Object.keys(next).length === 0) {
      setSent(true)
      e.currentTarget.reset()
    }
  }

  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="We'd love to hear from you"
        title="GET IN"
        accent="TOUCH"
        description="Questions, feedback, bulk orders or just a lassi craving — drop us a line and we'll get back within a few hours."
      />

      <section className="container-x relative z-10 -mt-14 grid gap-4 sm:-mt-16 sm:grid-cols-2 lg:grid-cols-4">
        {channels.map(({ icon: Icon, title, value, href, tone }) => {
          const internal = href.startsWith("/")
          const content = (
            <>
              <span className={cn("grid size-12 shrink-0 place-items-center rounded-full", tone)}>
                <Icon className="size-6" strokeWidth={1.7} />
              </span>
              <span>
                <span className="block font-heading text-sm font-semibold uppercase tracking-wide text-navy">{title}</span>
                <span className="text-sm text-muted-foreground">{value}</span>
              </span>
            </>
          )
          const cls =
            "flex items-center gap-4 rounded-2xl bg-white p-5 shadow-[0_10px_40px_-14px_rgba(19,35,91,0.25)] transition-transform hover:-translate-y-1"
          return internal ? (
            <Link key={title} to={href} className={cls}>
              {content}
            </Link>
          ) : (
            <a key={title} href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              {content}
            </a>
          )
        })}
      </section>

      <section className="container-x grid gap-8 py-16 lg:grid-cols-[1.4fr_1fr]">
        <Card className="border-[#f1e9dc] p-6 sm:p-8">
          <h2 className="font-heading text-2xl font-semibold uppercase tracking-wide text-navy">Send us a message</h2>
          {sent ? (
            <div className="flex flex-col items-center gap-3 py-12 text-center" role="status">
              <CheckCircle2 className="size-14 text-green" strokeWidth={1.5} />
              <p className="font-script text-3xl text-navy">Thank you!</p>
              <p className="max-w-sm text-sm text-muted-foreground">
                Your message has been noted. (This form isn&apos;t connected to email yet — for anything urgent, call or WhatsApp us.)
              </p>
              <Button variant="outline" onClick={() => setSent(false)}>
                Send another
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Your name" error={errors.name}>
                <Input name="name" autoComplete="name" placeholder="Priya Sharma" aria-invalid={!!errors.name} className="h-11" />
              </Field>
              <Field label="Mobile number" error={errors.phone}>
                <Input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="Enter your mobile number" aria-invalid={!!errors.phone} className="h-11" />
              </Field>
              <Field label="Email (optional)" error={errors.email}>
                <Input name="email" type="email" autoComplete="email" placeholder="you@example.com" aria-invalid={!!errors.email} className="h-11" />
              </Field>
              <Field label="Topic">
                <select
                  name="topic"
                  className="h-11 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-xs outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  defaultValue="General enquiry"
                >
                  <option>General enquiry</option>
                  <option>Order support</option>
                  <option>Bulk / party order</option>
                  <option>Feedback</option>
                  <option>Franchise</option>
                </select>
              </Field>
              <Field label="Message" error={errors.message} className="sm:col-span-2">
                <Textarea name="message" rows={5} placeholder="How can we help?" aria-invalid={!!errors.message} />
              </Field>
              <div className="sm:col-span-2">
                <Button type="submit" size="lg" variant="secondary" className="w-full sm:w-auto">
                  <Send className="size-4" /> SEND MESSAGE
                </Button>
              </div>
            </form>
          )}
        </Card>

        <div className="space-y-6">
          <Card className="border-0 bg-navy p-6 text-white sm:p-8">
            <h2 className="font-script text-3xl">Opening hours</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                ["Monday – Friday", "9:00 AM – 10:00 PM"],
                ["Saturday", "9:00 AM – 11:00 PM"],
                ["Sunday", "10:00 AM – 11:00 PM"],
              ].map(([d, h]) => (
                <li key={d} className="flex justify-between gap-4 border-b border-white/15 pb-3 last:border-0">
                  <span className="flex items-center gap-2 text-white/80">
                    <Clock className="size-4" /> {d}
                  </span>
                  <span className="font-medium">{h}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="border-[#f1e9dc] bg-[#f4f7ef] p-6 sm:p-8">
            <h2 className="font-heading text-xl font-semibold uppercase tracking-wide text-navy">Head office</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              LassiWala Foods
              <br />
              Main Bazaar Road, Chandni Chowk
              <br />
              Delhi 110006, India
            </p>
            <Button variant="link" className="mt-2 h-auto px-0 text-green" asChild>
              <Link to="/find-us">See all outlets →</Link>
            </Button>
          </Card>
        </div>
      </section>

      <section id="faq" className="container-x scroll-mt-28 pb-6">
        <SectionTitle>Frequently asked questions</SectionTitle>
        <Accordion type="single" collapsible className="mx-auto mt-8 max-w-3xl rounded-2xl border bg-white px-6">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`q${i}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  )
}

function Field({
  label,
  error,
  className,
  children,
}: {
  label: string
  error?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <label className={cn("grid gap-1.5 text-sm", className)}>
      <span className="font-medium text-navy">{label}</span>
      {children}
      {error && <span className="text-xs text-heart">{error}</span>}
    </label>
  )
}
