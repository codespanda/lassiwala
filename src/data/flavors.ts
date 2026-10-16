import sweet from "@/assets/sweet.webp"
import mango from "@/assets/mango.webp"
import rose from "@/assets/rose.webp"
import masala from "@/assets/masala.webp"
import kesar from "@/assets/kesar.webp"

export type Size = { id: "250" | "400"; label: string; price: number }

export type Flavor = {
  slug: string
  name: string
  short: string
  description: string
  img: string
  /** text colour class for the flavour name */
  color: string
  /** soft background tint used behind the product */
  tint: string
  taste: "Sweet" | "Fruity" | "Floral" | "Spiced" | "Royal"
  ingredients: string[]
  notes: { label: string; value: number }[]
  kcal: number
  protein: number
  calcium: number
  bestseller?: boolean
  sizes: Size[]
}

const sizes = (small: number, large: number): Size[] => [
  { id: "250", label: "250 ml Kulhad", price: small },
  { id: "400", label: "400 ml Bottle", price: large },
]

export const flavors: Flavor[] = [
  {
    slug: "sweet-lassi",
    name: "Sweet Lassi",
    short: "Classic & creamy sweet lassi.",
    description:
      "The one that started it all. Thick, hand-churned dahi whisked with a touch of sugar and topped with a spoon of fresh malai — just like the dhabas of Punjab.",
    img: sweet,
    color: "text-sky-600",
    tint: "bg-sky-50",
    taste: "Sweet",
    ingredients: ["Fresh curd", "Full-cream milk", "Cane sugar", "Malai"],
    notes: [
      { label: "Sweetness", value: 4 },
      { label: "Creaminess", value: 5 },
      { label: "Tang", value: 2 },
    ],
    kcal: 180,
    protein: 7,
    calcium: 22,
    bestseller: true,
    sizes: sizes(60, 90),
  },
  {
    slug: "mango-lassi",
    name: "Mango Lassi",
    short: "Rich, smooth & made with real Alphonso mangoes.",
    description:
      "Ratnagiri Alphonso pulp blended into chilled curd for a velvety, sunshine-yellow lassi. No essence, no colour — just ripe mangoes.",
    img: mango,
    color: "text-orange-500",
    tint: "bg-amber-50",
    taste: "Fruity",
    ingredients: ["Fresh curd", "Alphonso mango pulp", "Milk", "Cane sugar"],
    notes: [
      { label: "Sweetness", value: 4 },
      { label: "Creaminess", value: 4 },
      { label: "Fruitiness", value: 5 },
    ],
    kcal: 210,
    protein: 6,
    calcium: 20,
    bestseller: true,
    sizes: sizes(80, 120),
  },
  {
    slug: "rose-lassi",
    name: "Rose Lassi",
    short: "Refreshing rose flavor with a hint of tradition.",
    description:
      "Gulkand and pure rose syrup folded into creamy curd, finished with dried rose petals. Fragrant, cooling and perfect for summer afternoons.",
    img: rose,
    color: "text-heart",
    tint: "bg-rose-50",
    taste: "Floral",
    ingredients: ["Fresh curd", "Gulkand", "Rose syrup", "Rose petals"],
    notes: [
      { label: "Sweetness", value: 4 },
      { label: "Creaminess", value: 4 },
      { label: "Floral", value: 5 },
    ],
    kcal: 195,
    protein: 6,
    calcium: 20,
    sizes: sizes(70, 110),
  },
  {
    slug: "masala-lassi",
    name: "Masala Lassi",
    short: "A perfect blend of curd, spices & herbs.",
    description:
      "Our savoury favourite: lightly salted curd with roasted jeera, black salt, fresh mint and a pinch of ginger. The best digestive after a heavy meal.",
    img: masala,
    color: "text-green",
    tint: "bg-green-50",
    taste: "Spiced",
    ingredients: ["Fresh curd", "Roasted cumin", "Black salt", "Mint", "Ginger"],
    notes: [
      { label: "Spice", value: 3 },
      { label: "Creaminess", value: 3 },
      { label: "Tang", value: 4 },
    ],
    kcal: 120,
    protein: 7,
    calcium: 22,
    sizes: sizes(60, 90),
  },
  {
    slug: "kesar-lassi",
    name: "Kesar Lassi",
    short: "Royal touch of saffron for a rich experience.",
    description:
      "Kashmiri saffron strands steeped overnight in milk, blended with thick curd and topped with pistachio and almond slivers. A festive treat in every sip.",
    img: kesar,
    color: "text-orange-600",
    tint: "bg-orange-50",
    taste: "Royal",
    ingredients: ["Fresh curd", "Kashmiri saffron", "Pistachio", "Almond", "Cardamom"],
    notes: [
      { label: "Sweetness", value: 4 },
      { label: "Creaminess", value: 5 },
      { label: "Richness", value: 5 },
    ],
    kcal: 230,
    protein: 8,
    calcium: 24,
    bestseller: true,
    sizes: sizes(90, 140),
  },
]

export const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`
