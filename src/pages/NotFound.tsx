import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { HeartDivider } from "@/components/ornaments"
import cup from "@/assets/cup.png"

export default function NotFound() {
  return (
    <section className="paper-bg pt-header pb-20">
      <div className="container-x flex flex-col items-center pt-10 text-center">
        <img src={cup} alt="" className="w-44 -rotate-12 drop-shadow-xl" />
        <p className="mt-4 font-script text-4xl text-navy">Oops!</p>
        <h1 className="font-display text-7xl tracking-tight text-navy sm:text-8xl">
          4<span className="text-green">0</span>4
        </h1>
        <HeartDivider width="w-20" className="mt-3 justify-center" />
        <p className="mt-4 max-w-md text-foreground/80">
          Looks like this page got spilled. Let&apos;s get you back to something tastier.
        </p>
        <Button size="lg" className="mt-6 rounded-xl" asChild>
          <Link to="/">
            <ArrowLeft className="size-4" /> BACK TO HOME
          </Link>
        </Button>
      </div>
    </section>
  )
}
