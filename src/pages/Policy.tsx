import { Link, NavLink, useParams } from "react-router-dom"

import { PageHero } from "@/components/layout/PageHero"
import NotFound from "@/pages/NotFound"
import { cn } from "@/lib/utils"

type Policy = { title: string; eyebrow: string; sections: { heading: string; body: string }[] }

const policies: Record<string, Policy> = {
  shipping: {
    title: "Shipping & Delivery",
    eyebrow: "Fresh to your door",
    sections: [
      { heading: "Where we deliver", body: "We deliver across Delhi NCR — Delhi, Gurugram, Noida, Ghaziabad and Faridabad. Check your pincode on the home page." },
      { heading: "Delivery time", body: "Most orders arrive within 45–60 minutes. During peak hours or bad weather it may take a little longer; we'll keep you updated." },
      { heading: "Delivery charges", body: "Delivery is free on orders of ₹299 and above. A flat fee of ₹30 applies to smaller orders." },
      { heading: "Packaging", body: "Every order is packed in insulated, food-safe packaging with ice packs so it reaches you chilled." },
    ],
  },
  returns: {
    title: "Returns & Refunds",
    eyebrow: "Happiness guaranteed",
    sections: [
      { heading: "Our promise", body: "If your lassi arrives spilled, warm or simply not right, tell us within 2 hours of delivery and we'll replace it or refund you in full." },
      { heading: "How to raise a request", body: "Call or WhatsApp us on +91 62803 47210 with your order number and a photo. No long forms." },
      { heading: "Refund timelines", body: "UPI and wallet refunds are processed within 24 hours. Card and net-banking refunds can take 5–7 working days to reflect." },
    ],
  },
  terms: {
    title: "Terms & Conditions",
    eyebrow: "The fine print",
    sections: [
      { heading: "Using this site", body: "By placing an order on LassiWala you agree to these terms. Prices and availability may change without notice." },
      { heading: "Orders", body: "An order is confirmed once you receive a confirmation call or message. We may cancel orders we can't fulfil and will refund any payment in full." },
      { heading: "Product information", body: "We try to describe our products accurately. Nutrition values are approximate and may vary slightly between batches." },
      { heading: "Allergens", body: "All our products contain milk. Some contain nuts (Kesar Lassi). Please let us know about any allergies when ordering." },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    eyebrow: "Your data, respected",
    sections: [
      { heading: "What we collect", body: "Only what we need to deliver your order: your name, phone number, delivery address and order history." },
      { heading: "How we use it", body: "To process and deliver orders, contact you about them and — only if you opt in — send occasional offers." },
      { heading: "Sharing", body: "We never sell your data. We share your address and phone number only with our delivery partners for the purpose of delivering your order." },
      { heading: "Your choices", body: "You can ask us to see, correct or delete your data at any time by emailing hello@lassiwala.com." },
    ],
  },
}

export default function Policy() {
  const { slug = "" } = useParams()
  const policy = policies[slug]
  if (!policy) return <NotFound />

  return (
    <>
      <PageHero crumb={policy.title} eyebrow={policy.eyebrow} title={policy.title.toUpperCase()} />
      <section className="container-x relative z-10 -mt-12 grid gap-8 pb-10 lg:grid-cols-[14rem_1fr]">
        <nav aria-label="Policies" className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
          {Object.entries(policies).map(([key, p]) => (
            <NavLink
              key={key}
              to={`/policies/${key}`}
              className={({ isActive }) =>
                cn(
                  "whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
                  isActive ? "bg-navy text-white" : "bg-white text-navy hover:bg-accent"
                )
              }
            >
              {p.title}
            </NavLink>
          ))}
        </nav>
        <article className="rounded-2xl bg-white p-6 shadow-[0_10px_40px_-14px_rgba(19,35,91,0.2)] sm:p-10">
          {policy.sections.map((s) => (
            <section key={s.heading} className="mb-8 last:mb-0">
              <h2 className="font-heading text-xl font-semibold uppercase tracking-wide text-navy">{s.heading}</h2>
              <p className="mt-2 leading-relaxed text-foreground/80">{s.body}</p>
            </section>
          ))}
          <p className="mt-10 border-t pt-6 text-sm text-muted-foreground">
            Still have questions?{" "}
            <Link to="/contact" className="font-medium text-green hover:underline">
              Contact us
            </Link>
            .
          </p>
        </article>
      </section>
    </>
  )
}
