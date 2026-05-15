// Catalog spec — items + image URLs + review counts.
// Categories must match keys in utils/tagDescriptions.js.

export const catalog = [
  // ─── DESKS_AND_TABLES ─────────────────────────────────────────────────
  {
    slug: "walnut-mid-century-desk",
    name: "Halden Walnut Writing Desk",
    tag: "DESKS_AND_TABLES",
    price: 1249.0,
    oldPrice: 1499.0,
    preview: "Hand-finished American walnut. Brass-tipped tapered legs.",
    description:
      "A mid-century writing desk built from a single American walnut slab and finished by hand over five days. The brass-capped legs and concealed cable channel keep the surface uncluttered so the wood does the talking. Built to outlast you.",
    images: [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
      "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf",
    ],
    stock: 14,
    reviewCount: 47,
  },
  {
    slug: "standing-desk-pro",
    name: "Aestheticas Standing Desk Pro",
    tag: "DESKS_AND_TABLES",
    price: 899.0,
    oldPrice: null,
    preview: "Dual-motor lift, 27–46\". Four memory presets, whisper quiet.",
    description:
      "A standing desk that doesn't look like a standing desk. Dual-motor lift travels 27 to 46 inches in 12 seconds at 47 dB — quieter than a dishwasher. White oak veneer top, powder-coated steel frame, four programmable height presets.",
    images: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174",
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7",
      "https://images.unsplash.com/photo-1571624436279-b272aff752b5",
    ],
    stock: 23,
    reviewCount: 134,
  },
  {
    slug: "marble-side-table",
    name: "Carrara Marble Side Table",
    tag: "DESKS_AND_TABLES",
    price: 489.0,
    oldPrice: null,
    preview: "Solid Italian Carrara on a brushed brass tripod.",
    description:
      "A drum-cut Carrara marble top sits on a brushed brass tripod base. Each piece has its own veining — yours will not look like the photo, and that's the point. Sealed with a food-safe matte finish.",
    images: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692",
      "https://images.unsplash.com/photo-1519219788971-8d9797e0928e",
    ],
    stock: 8,
    reviewCount: 6,
  },

  // ─── CHAIRS_AND_SEATING ────────────────────────────────────────────────
  {
    slug: "aeris-mesh-chair",
    name: "Aeris Ergonomic Mesh Chair",
    tag: "CHAIRS_AND_SEATING",
    price: 749.0,
    oldPrice: 899.0,
    preview: "Adaptive lumbar, breathable mesh, 12-year warranty.",
    description:
      "An ergonomic chair built around your lower back. The adaptive lumbar tracks you as you shift; the breathable mesh keeps you cool through a six-hour stretch. Five-star aluminum base, BIFMA-certified for 300 lbs, twelve-year warranty.",
    images: [
      "https://images.unsplash.com/photo-1688578735427-994ecdea3ea4",
      "https://images.unsplash.com/photo-1594235048794-fae8583a5af5",
      "https://images.unsplash.com/photo-1572521165329-b197f9ea3da6",
    ],
    stock: 31,
    reviewCount: 312,
  },
  {
    slug: "saddle-leather-executive",
    name: "Saddle Leather Executive Chair",
    tag: "CHAIRS_AND_SEATING",
    price: 1899.0,
    oldPrice: null,
    preview: "Full-grain Tuscan leather. Develops a patina over years.",
    description:
      "Full-grain Tuscan leather over a hardwood frame. The seat softens after about thirty hours of use and keeps developing for a decade. Hand-stitched seams, solid walnut armrests, polished aluminum base.",
    images: [
      "https://images.unsplash.com/photo-1505797149-43b0069ec26b",
      "https://images.unsplash.com/photo-1646154034833-d10291080448",
      "https://images.unsplash.com/photo-1666005368598-2164c0e486c8",
    ],
    stock: 5,
    reviewCount: 28,
  },
  {
    slug: "linen-reading-chair",
    name: "Linen Lounge Reading Chair",
    tag: "CHAIRS_AND_SEATING",
    price: 549.0,
    oldPrice: 649.0,
    preview: "Belgian linen, ash-wood frame, removable washable cover.",
    description:
      "A reading chair for the corner of the office that never gets used enough. Belgian linen over a solid ash frame, with a removable washable cover. The seat is deep enough to fold your legs under you.",
    images: [
      "https://images.unsplash.com/photo-1630659508738-74252299fa4d",
      "https://images.unsplash.com/photo-1641794008048-d863bb4a23d3",
    ],
    stock: 17,
    reviewCount: 19,
  },

  // ─── COMPUTERS_AND_ELECTRONICS ─────────────────────────────────────────
  {
    slug: "ultrawide-5k-monitor",
    name: "Aestheticas 34\" UltraWide 5K",
    tag: "COMPUTERS_AND_ELECTRONICS",
    price: 1299.0,
    oldPrice: 1499.0,
    preview: "5120×2160. 98% DCI-P3. Thunderbolt 4 with 90W passthrough.",
    description:
      "A 34-inch ultrawide tuned for color work. 5120×2160, 98% DCI-P3, factory-calibrated to Delta E under 2. Thunderbolt 4 in, 90W charging out, three USB-C downstream. Anti-glare matte coat.",
    images: [
      "https://images.unsplash.com/photo-1484788984921-03950022c9ef",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
      "https://images.unsplash.com/photo-1551739440-5dd934d3a94a",
    ],
    stock: 22,
    reviewCount: 86,
  },
  {
    slug: "sculpted-bluetooth-mouse",
    name: "Sculpted Bluetooth Mouse",
    tag: "COMPUTERS_AND_ELECTRONICS",
    price: 129.0,
    oldPrice: null,
    preview: "Anodized aluminum shell. Multi-device pairing. 90-day battery.",
    description:
      "An anodized aluminum mouse sculpted to disappear under your palm. Pairs with up to three devices, switches with a tap on the underside. Single AA gives you about 90 days. Silent click switches.",
    images: [
      "https://images.unsplash.com/photo-1527814050087-3793815479db",
      "https://images.unsplash.com/photo-1660491083562-d91a64d6ea9c",
      "https://images.unsplash.com/photo-1631749352438-7d576312185d",
    ],
    stock: 64,
    reviewCount: 211,
  },
  {
    slug: "walnut-mechanical-keyboard",
    name: "Walnut-Body Mechanical Keyboard",
    tag: "COMPUTERS_AND_ELECTRONICS",
    price: 289.0,
    oldPrice: null,
    preview: "Hot-swappable. Walnut case, PBT keycaps, low-profile switches.",
    description:
      "A 75% layout in a CNC-milled walnut case. Hot-swappable sockets, lubed linear switches out of the box, PBT keycaps with side-printed legends. Connects over Bluetooth, USB-C, or 2.4 GHz wireless.",
    images: [
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef",
      "https://images.unsplash.com/photo-1635987391914-cb84b567e68f",
      "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae",
    ],
    stock: 18,
    reviewCount: 73,
  },

  // ─── COMMUNICATION ─────────────────────────────────────────────────────
  {
    slug: "studio-reference-headphones",
    name: "Studio Reference Headphones",
    tag: "COMMUNICATION",
    price: 449.0,
    oldPrice: null,
    preview: "Open-back. 40 mm drivers. Wool-felt ear cushions.",
    description:
      "Open-back reference headphones tuned for long sessions. 40 mm beryllium-coated drivers, wool-felt ear cushions, replaceable cable. Not loud enough for the train. Perfectly loud for the desk.",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      "https://images.unsplash.com/photo-1545127398-14699f92334b",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90",
    ],
    stock: 12,
    reviewCount: 41,
  },
  {
    slug: "linen-conference-speaker",
    name: "Linen-Wrapped Conference Speaker",
    tag: "COMMUNICATION",
    price: 219.0,
    oldPrice: 269.0,
    preview: "Six-mic array. Echo cancellation. USB-C and Bluetooth.",
    description:
      "A six-microphone beam-forming array in a linen-wrapped enclosure that doesn't look like office hardware. Picks up a full room without the boomy echo most speakerphones add. USB-C and Bluetooth.",
    images: [
      "https://images.unsplash.com/photo-1612907260223-2c7aff7a7d3d",
    ],
    stock: 9,
    reviewCount: 3,
  },

  // ─── OFFICE_SUPPLIES ───────────────────────────────────────────────────
  {
    slug: "leather-journal",
    name: "Hand-Stitched Leather Journal",
    tag: "OFFICE_SUPPLIES",
    price: 89.0,
    oldPrice: null,
    preview: "Vegetable-tanned cover. 240 dotted pages, 100 gsm.",
    description:
      "A bound journal with a vegetable-tanned cover that softens and darkens with use. 240 dotted pages on 100 gsm cream stock, smooth enough for fountain pens. Lays flat the day you open it.",
    images: [
      "https://images.unsplash.com/photo-1583341655648-78bdf4ed6d13",
      "https://images.unsplash.com/photo-1581646064576-6bc5a216f02c",
      "https://images.unsplash.com/photo-1675668409245-955188b96bf6",
    ],
    stock: 86,
    reviewCount: 158,
  },
  {
    slug: "brass-fountain-pen",
    name: "Brass Fountain Pen Set",
    tag: "OFFICE_SUPPLIES",
    price: 145.0,
    oldPrice: null,
    preview: "Solid brass body. Medium nib. Converter and two ink cartridges.",
    description:
      "A solid brass fountain pen with a medium iridium-tipped nib. Threaded cap, converter for bottled ink, two midnight-blue cartridges in the box. Heavy in the hand in a way that slows your writing down.",
    images: [
      "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3",
      "https://images.unsplash.com/photo-1473186505569-9c61870c11f9",
      "https://images.unsplash.com/photo-1509824189536-24ab5d1ecb00",
    ],
    stock: 42,
    reviewCount: 22,
  },
  {
    slug: "minimalist-task-card-deck",
    name: "Index Card Task Deck",
    tag: "OFFICE_SUPPLIES",
    price: 24.0,
    oldPrice: null,
    preview: "150 cards, 4 colors, walnut holder.",
    description:
      "A simple analog system: 150 thick cotton-stock index cards in four colors, plus a walnut deck holder for your desk. Use it however you want. Most people end up running a daily three-card pull.",
    images: [
      "https://images.unsplash.com/photo-1612907527100-f02bb2b26b1d",
    ],
    stock: 120,
    reviewCount: 0,
  },

  // ─── ERGONOMIC_ACCESSORIES ─────────────────────────────────────────────
  {
    slug: "italian-leather-desk-pad",
    name: "Italian Leather Desk Pad",
    tag: "ERGONOMIC_ACCESSORIES",
    price: 119.0,
    oldPrice: null,
    preview: "36×17\". Full-grain leather, wool-felt underside.",
    description:
      "A 36-by-17-inch desk pad in full-grain Italian leather, backed with wool felt to keep it from sliding. Develops a patina around your mouse and keyboard within a few months — which is the look.",
    images: [
      "https://images.unsplash.com/photo-1648726131514-220e4828de5e",
      "https://images.unsplash.com/photo-1641247565151-fe622e1067d0",
    ],
    stock: 38,
    reviewCount: 64,
  },
  {
    slug: "wrist-rest-set",
    name: "Linen Wrist & Palm Rest Set",
    tag: "ERGONOMIC_ACCESSORIES",
    price: 49.0,
    oldPrice: null,
    preview: "Belgian linen. Memory foam core. Keyboard + mouse pair.",
    description:
      "A keyboard wrist rest and matching mouse palm rest in Belgian linen over a memory-foam core. Subtle taper from front to back. Removable washable covers.",
    images: [
      "https://images.unsplash.com/photo-1611648694931-1aeda329f9da",
    ],
    stock: 74,
    reviewCount: 11,
  },

  // ─── LIGHTING ──────────────────────────────────────────────────────────
  {
    slug: "arc-brass-desk-lamp",
    name: "Arc Brass Desk Lamp",
    tag: "LIGHTING",
    price: 339.0,
    oldPrice: 399.0,
    preview: "Solid brass arc. 2700–6500 K. Touch-dim base.",
    description:
      "A solid brass arc lamp with a marble counterweight base. Tunable from a warm 2700 K reading light to a clean 6500 K work light. Touch-dim along the base — no buttons, no remote, no app.",
    images: [
      "https://images.unsplash.com/photo-1621177555452-bedbe4c28879",
      "https://images.unsplash.com/photo-1551380701-5dd33d5b5d06",
      "https://images.unsplash.com/photo-1570974802254-4b0ad1a755f5",
    ],
    stock: 27,
    reviewCount: 102,
  },
  {
    slug: "pendant-workspace-lamp",
    name: "Pendant Workspace Lamp",
    tag: "LIGHTING",
    price: 219.0,
    oldPrice: null,
    preview: "Hand-blown opal shade. Linen-wrapped cord.",
    description:
      "A pendant light with a hand-blown opal glass shade. Throws an even, glare-free wash over a 5-foot work surface. Linen-wrapped braided cord, brass canopy.",
    images: [
      "https://images.unsplash.com/photo-1526040652367-ac003a0475fe",
      "https://images.unsplash.com/photo-1582356630861-61bb9b41f541",
    ],
    stock: 14,
    reviewCount: 5,
  },
  {
    slug: "smart-floor-lamp",
    name: "Aestheticas Smart Floor Lamp",
    tag: "LIGHTING",
    price: 459.0,
    oldPrice: null,
    preview: "Circadian color shift. Matter-over-Thread. App and Siri/Alexa.",
    description:
      "A floor lamp that shifts color temperature with your day — cool white at noon, warm amber after sunset. Matter-over-Thread, so it pairs cleanly with HomeKit, Alexa, and Google Home. Walnut base.",
    images: [
      "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7",
      "https://images.unsplash.com/photo-1617363020293-62faac14783d",
    ],
    stock: 11,
    reviewCount: 38,
  },

  // ─── DECOR_AND_COMFORT ─────────────────────────────────────────────────
  {
    slug: "ceramic-diffuser-set",
    name: "Ceramic Diffuser & Oil Set",
    tag: "DECOR_AND_COMFORT",
    price: 89.0,
    oldPrice: null,
    preview: "Hand-thrown ceramic. Three signature oils included.",
    description:
      "A hand-thrown ceramic diffuser with three of our signature oils: Cedar & Vetiver, Fig Leaf, and Sea Salt. Eight-hour run time on a quiet ultrasonic mister. Auto-shutoff when dry.",
    images: [
      "https://images.unsplash.com/photo-1612293905607-b003de9e54fb",
      "https://images.unsplash.com/photo-1572726729207-a78d6feb18d7",
      "https://images.unsplash.com/photo-1570823635306-250abb06d4b3",
    ],
    stock: 53,
    reviewCount: 89,
  },
  {
    slug: "cedar-vetiver-candle",
    name: "Cedar & Vetiver Candle",
    tag: "DECOR_AND_COMFORT",
    price: 42.0,
    oldPrice: null,
    preview: "Coconut-soy wax. 60 hours. Cotton wick.",
    description:
      "A poured coconut-soy candle in a refillable matte stoneware vessel. Top notes of cedar and vetiver, a base of moss. Burns evenly for about 60 hours. Cotton wick, no fragrance fillers.",
    images: [
      "https://images.unsplash.com/photo-1604249180474-3ebaf8747373",
      "https://images.unsplash.com/photo-1603905179139-db12ab535ca9",
      "https://images.unsplash.com/photo-1619799360851-a143fbc240b3",
    ],
    stock: 96,
    reviewCount: 56,
  },
  {
    slug: "brass-wall-clock",
    name: "Tilted Brass Wall Clock",
    tag: "DECOR_AND_COMFORT",
    price: 179.0,
    oldPrice: null,
    preview: "Silent sweep movement. 12\" brushed brass face.",
    description:
      "A 12-inch brushed brass clock with the numerals slightly tilted — a quiet rebellion against perfect symmetry. Silent sweep quartz movement, single AA battery, no ticking.",
    images: [
      "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c",
      "https://images.unsplash.com/photo-1564091880021-bb02f2b2928d",
      "https://images.unsplash.com/photo-1606674556490-c2bbb4ee05e5",
    ],
    stock: 22,
    reviewCount: 14,
  },
  {
    slug: "hanging-pothos-pair",
    name: "Hanging Pothos Pair (Live)",
    tag: "DECOR_AND_COMFORT",
    price: 64.0,
    oldPrice: null,
    preview: "Two live golden pothos. Hand-thrown terracotta planters.",
    description:
      "Two live golden pothos in 6-inch hand-thrown terracotta planters with leather hanging straps. Ships from a Pennsylvania nursery in temperature-controlled packaging. Beginner-friendly: tolerates a missed week.",
    images: [
      "https://images.unsplash.com/photo-1521649415036-659258dc424f",
      "https://images.unsplash.com/photo-1556559322-b5071efadc88",
    ],
    stock: 0,
    reviewCount: 7,
  },
  {
    slug: "stoneware-mug",
    name: "Hand-Thrown Stoneware Mug",
    tag: "DECOR_AND_COMFORT",
    price: 36.0,
    oldPrice: null,
    preview: "14 oz. Reactive glaze — no two the same.",
    description:
      "A 14 oz mug thrown on a wheel in Asheville. Reactive glaze means yours will have its own pattern. Wide handle, balanced lip. Microwave and dishwasher safe.",
    images: [
      "https://images.unsplash.com/photo-1616241673111-508b4662c707",
      "https://images.unsplash.com/photo-1581574313687-c8b70fcd663a",
      "https://images.unsplash.com/photo-1620767188705-ab50b5c4a70e",
    ],
    stock: 68,
    reviewCount: 32,
  },

  // ─── STORAGE_SOLUTIONS ─────────────────────────────────────────────────
  {
    slug: "oak-floating-bookshelf",
    name: "Solid Oak Floating Bookshelf",
    tag: "STORAGE_SOLUTIONS",
    price: 229.0,
    oldPrice: null,
    preview: "36\" solid white oak. Concealed steel bracket.",
    description:
      "A 36-inch solid white oak shelf on a concealed steel bracket. Holds 40 lbs without sagging. Comes with all hardware, plus a level. Cleanly cut, hand-sanded, finished in a satin matte oil.",
    images: [
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d",
      "https://images.unsplash.com/photo-1545696648-86c761bc5410",
    ],
    stock: 19,
    reviewCount: 12,
  },
  {
    slug: "leather-document-tray",
    name: "Stacking Leather Document Tray",
    tag: "STORAGE_SOLUTIONS",
    price: 89.0,
    oldPrice: null,
    preview: "Full-grain leather over walnut. Stackable up to four.",
    description:
      "A stacking document tray built from full-grain leather over walnut hardwood. Stack up to four without wobble. Holds letter and A4 with room to grab a sheet without lifting the stack.",
    images: [
      "https://images.unsplash.com/photo-1641247565118-b52f763e3232",
      "https://images.unsplash.com/photo-1620109176917-33818b769f9a",
    ],
    stock: 47,
    reviewCount: 4,
  },

  // ─── HEALTH_AND_WELLNESS ───────────────────────────────────────────────
  {
    slug: "posture-wedge-cushion",
    name: "Posture Wedge Cushion",
    tag: "HEALTH_AND_WELLNESS",
    price: 79.0,
    oldPrice: null,
    preview: "Memory foam wedge. Breathable linen cover.",
    description:
      "A memory-foam wedge that tilts your pelvis forward by about seven degrees, taking the slouch out of long sits. Removable washable linen cover. Works on most office chairs.",
    images: [
      "https://images.unsplash.com/photo-1505797149-43b0069ec26b",
    ],
    stock: 41,
    reviewCount: 26,
  },

  // ─── CLEANING_AND_MAINTENANCE ──────────────────────────────────────────
  {
    slug: "screen-cleaning-kit",
    name: "Studio Screen-Cleaning Kit",
    tag: "CLEANING_AND_MAINTENANCE",
    price: 32.0,
    oldPrice: null,
    preview: "Microfiber set + safe-for-coating solution.",
    description:
      "Three microfiber cloths in graded weaves plus a 250 ml bottle of alcohol-free screen solution that is safe for anti-glare and matte coatings. Ships in a refillable glass bottle.",
    images: [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944",
    ],
    stock: 130,
    reviewCount: 2,
  },

  // ─── NETWORKING_AND_SECURITY ───────────────────────────────────────────
  {
    slug: "privacy-webcam-cover",
    name: "Brass Webcam Privacy Slider Set",
    tag: "NETWORKING_AND_SECURITY",
    price: 18.0,
    oldPrice: null,
    preview: "Three covers. Solid brass slider. Adhesive-free option.",
    description:
      "Three precision-cut brass webcam sliders. Ultra-thin so they don't interfere with closing your laptop. Two come with low-residue adhesive; one is magnet-mount for compatible MacBooks.",
    images: [
      "https://images.unsplash.com/photo-1655000278839-b7d7b11251c5",
    ],
    stock: 210,
    reviewCount: 0,
  },
];

// Review count distribution sanity:
// 0 reviews:    2 items   (Index Card Task Deck, Webcam Slider Set)
// 1–5:        4 items   (Marble Table, Speaker, Pendant, Doc Tray, Screen Kit — some 5–10)
// 6–20:       6 items
// 21–60:      6 items
// 60–150:     5 items
// 200+:        2 items   (Mesh Chair 312, Mouse 211)
