import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Layout } from "@/components/layout/Layout"
import { CartProvider } from "@/context/cart"
import Home from "@/pages/Home"
import OurLassi from "@/pages/OurLassi"
import Flavors from "@/pages/Flavors"
import About from "@/pages/About"
import OurStory from "@/pages/OurStory"
import FindUs from "@/pages/FindUs"
import Contact from "@/pages/Contact"
import Policy from "@/pages/Policy"
import NotFound from "@/pages/NotFound"

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="our-lassi" element={<OurLassi />} />
            <Route path="flavors" element={<Flavors />} />
            <Route path="about" element={<About />} />
            <Route path="our-story" element={<OurStory />} />
            <Route path="find-us" element={<FindUs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="policies/:slug" element={<Policy />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}
