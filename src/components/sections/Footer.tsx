import { Heart, Mail, MapPin, Phone } from "lucide-react"
import { Link } from "react-router-dom"

import { Logo } from "@/components/ornaments"

const columns = [
  {
    title: "Quick Links",
    links: [
      { label: "Our Lassi", to: "/our-lassi" },
      { label: "Flavors", to: "/flavors" },
      { label: "About Us", to: "/about" },
      { label: "Our Story", to: "/our-story" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    title: "Customer Care",
    links: [
      { label: "FAQs", to: "/contact#faq" },
      { label: "Shipping & Delivery", to: "/policies/shipping" },
      { label: "Returns", to: "/policies/returns" },
      { label: "Terms & Conditions", to: "/policies/terms" },
      { label: "Privacy Policy", to: "/policies/privacy" },
    ],
  },
]

const socials = [
  {
    name: "Instagram",
    bg: "bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600",
    path: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.4 5.6 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.6 18.4 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
  },
  {
    name: "Facebook",
    bg: "bg-[#1877f2]",
    path: "M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.33-.04-1.56-.14-2.86-.14C11.92 2 10 3.66 10 6.7v2.8H7v4h3V22h4v-8.5Z",
  },
  {
    name: "YouTube",
    bg: "bg-[#ff0000]",
    path: "M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73Z",
  },
  {
    name: "WhatsApp",
    bg: "bg-[#25d366]",
    path: "M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.4 5 5.2-1.36A9.9 9.9 0 1 0 12.04 2m.01 1.67a8.23 8.23 0 1 1-4.3 15.25l-.3-.18-3.1.81.83-3-.2-.32a8.23 8.23 0 0 1 7.07-12.56M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43h-.48Z",
  },
]

export function Footer() {
  return (
    <footer className="container-x pb-6 pt-14">
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr_1fr]">
        <div className="col-span-2 flex flex-col items-center lg:col-span-1 lg:items-start lg:pl-8">
          <Logo />
        </div>

        {columns.map((c) => (
          <nav key={c.title} aria-label={c.title}>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-navy">{c.title}</h3>
            <ul className="mt-3 space-y-1.5">
              {c.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-xs text-foreground/80 transition-colors hover:text-green">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-navy">Contact Us</h3>
          <ul className="mt-3 space-y-2.5 text-xs text-foreground/80">
            <li className="flex items-center gap-3">
              <Phone className="size-4 text-navy" /> <a href="tel:+916280347210">+91 62803 47210</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 text-navy" /> <a href="mailto:hello@lassiwala.com">hello@lassiwala.com</a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 text-navy" /> Delhi, India
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-navy">Follow Us</h3>
          <ul className="mt-3 flex gap-3">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.name === "WhatsApp" ? "https://wa.me/916280347210" : "#"}
                  target={s.name === "WhatsApp" ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={s.name}
                  className={`grid size-8 place-items-center rounded-full text-white transition-transform hover:-translate-y-0.5 ${s.bg}`}
                >
                  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
                    <path d={s.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t pt-4 text-xs text-foreground/70 sm:flex-row">
        <p>© {new Date().getFullYear()} LassiWala. All Rights Reserved.</p>
        <p className="flex items-center gap-1">
          Made with <Heart className="size-3.5 fill-heart text-heart" /> in India
        </p>
      </div>
    </footer>
  )
}
