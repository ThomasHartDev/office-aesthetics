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
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89",
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7",
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
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
      "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174",
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
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    ],
    stock: 8,
    reviewCount: 6,
  },
  {
    slug: "corner-l-desk",
    name: "Oslo L-Shape Corner Desk",
    tag: "DESKS_AND_TABLES",
    price: 1099.0,
    oldPrice: 1299.0,
    preview: "Solid ash, 72×48\". Cable grommet and shelf included.",
    description:
      "An L-shaped desk in solid white ash with a raw-oil finish. The return gives you a full monitor zone plus a dedicated writing surface. Cable grommet, powder-coated steel legs, and a suspended lower shelf for CPU or books.",
    images: [
      "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb",
      "https://images.unsplash.com/photo-1629798825999-9a2b43bef9ac",
    ],
    stock: 7,
    reviewCount: 18,
  },
  {
    slug: "fold-down-wall-desk",
    name: "Wall-Mount Fold-Down Desk",
    tag: "DESKS_AND_TABLES",
    price: 349.0,
    oldPrice: null,
    preview: "Birch ply, 36×20\". Mounts in 30 min. Folds flush.",
    description:
      "A fold-down wall desk in 18 mm Baltic birch. Opens to a 36 by 20 inch surface, folds flush to 5 inches off the wall. Hidden hardware, two diagonal support legs that pin flush to the underside when open. Comes with all anchors.",
    images: [
      "https://images.unsplash.com/photo-1600494448853-ca7b5b7e1f49",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f",
    ],
    stock: 19,
    reviewCount: 9,
  },
  {
    slug: "bamboo-desktop-riser",
    name: "Bamboo Desktop Riser Station",
    tag: "DESKS_AND_TABLES",
    price: 129.0,
    oldPrice: null,
    preview: "Dual-level. Monitor shelf + lower accessory deck.",
    description:
      "A two-tier bamboo riser that puts your monitor at eye level and gives you an accessory deck underneath for a keyboard, notebook, or phone. Solid bamboo, no particleboard. Felt-padded base.",
    images: [
      "https://images.unsplash.com/photo-1593640408182-31c228b2e8ad",
      "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9",
    ],
    stock: 44,
    reviewCount: 31,
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
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea",
    ],
    stock: 17,
    reviewCount: 19,
  },
  {
    slug: "kneeling-posture-chair",
    name: "Birch Kneeling Posture Chair",
    tag: "CHAIRS_AND_SEATING",
    price: 289.0,
    oldPrice: null,
    preview: "Solid birch rocker. Angles pelvis forward 30°.",
    description:
      "A kneeling chair in solid birch with a rockered base, so you can shift between sitting tall and rocking forward without effort. Wool-blend pad, height-adjustable shin rest. Eliminates the lower-back arch most desk chairs force.",
    images: [
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8",
      "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05",
    ],
    stock: 12,
    reviewCount: 44,
  },
  {
    slug: "drafting-stool",
    name: "Adjustable Drafting Stool",
    tag: "CHAIRS_AND_SEATING",
    price: 349.0,
    oldPrice: null,
    preview: "Gas-lift 24–34\". Foot ring. Vegan leather seat.",
    description:
      "A height-adjustable drafting stool with a 360° swivel and a chrome foot ring at three heights. The saddle-curved seat reduces hip flexion during long standing-desk sessions. Vegan leather, wipe-clean.",
    images: [
      "https://images.unsplash.com/photo-1519455953755-af066f52f1a6",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91",
    ],
    stock: 21,
    reviewCount: 16,
  },
  {
    slug: "zero-gravity-recline",
    name: "Zero-Gravity Reclining Chair",
    tag: "CHAIRS_AND_SEATING",
    price: 799.0,
    oldPrice: 999.0,
    preview: "140° recline. Lumbar heat. Detachable headrest.",
    description:
      "A reclining office chair that goes to 140° so you can decompress between calls. Lumbar heat pad, detachable padded headrest, footrest that extends as the back reclines. Breathable mesh back, leather seat.",
    images: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91",
      "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea",
    ],
    stock: 9,
    reviewCount: 37,
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
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
      "https://images.unsplash.com/photo-1551739440-5dd934d3a94a",
      "https://images.unsplash.com/photo-1593642532559-2b1e33a14a7e",
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
      "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    ],
    stock: 18,
    reviewCount: 73,
  },
  {
    slug: "thunderbolt-4-dock",
    name: "Thunderbolt 4 Pro Dock",
    tag: "COMPUTERS_AND_ELECTRONICS",
    price: 249.0,
    oldPrice: null,
    preview: "11 ports. 96W laptop charge. Dual 4K display out.",
    description:
      "An aluminum Thunderbolt 4 dock with 11 ports: 3× Thunderbolt 4, 4× USB-A, 2× USB-C, SD slot, 3.5mm audio, and Gigabit Ethernet. Charges your laptop at 96W. Supports two 4K displays at 60 Hz simultaneously.",
    images: [
      "https://images.unsplash.com/photo-1625842268584-8f3296236761",
      "https://images.unsplash.com/photo-1583863788434-e62bd5d6f2e7",
    ],
    stock: 33,
    reviewCount: 58,
  },
  {
    slug: "4k-usbc-webcam",
    name: "4K Ultra-Wide Webcam",
    tag: "COMPUTERS_AND_ELECTRONICS",
    price: 179.0,
    oldPrice: 219.0,
    preview: "4K 30fps. 90° field of view. Auto-frame tracking.",
    description:
      "A 4K webcam with a 90-degree lens that captures your full workspace. AI auto-framing keeps you centered as you move. Two built-in noise-canceling mics, USB-C plug-and-play, works with any conferencing app.",
    images: [
      "https://images.unsplash.com/photo-1616161560417-2b3dd9d4ae4a",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91",
    ],
    stock: 26,
    reviewCount: 42,
  },
  {
    slug: "portable-usbc-monitor",
    name: "15.6\" Portable USB-C Monitor",
    tag: "COMPUTERS_AND_ELECTRONICS",
    price: 369.0,
    oldPrice: null,
    preview: "1080p IPS. USB-C single cable. 800:1 contrast.",
    description:
      "A 15.6-inch IPS portable monitor that runs and charges over a single USB-C cable. 1920×1080, 800:1 contrast, 60 Hz. Magnetic cover doubles as a stand. Thin as a pencil.",
    images: [
      "https://images.unsplash.com/photo-1593642534315-48f5414c3ad9",
      "https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9",
    ],
    stock: 15,
    reviewCount: 29,
  },
  {
    slug: "wireless-charging-pad",
    name: "Dual-Device Wireless Charging Pad",
    tag: "COMPUTERS_AND_ELECTRONICS",
    price: 69.0,
    oldPrice: null,
    preview: "15W fast charge. Phone + earbuds simultaneously.",
    description:
      "A slim charging pad in matte aluminum that charges your phone at 15W and your earbuds simultaneously. Works with any Qi device. LED indicator dims after 30 seconds so it doesn't distract at night.",
    images: [
      "https://images.unsplash.com/photo-1615526675259-025a6691f3a4",
      "https://images.unsplash.com/photo-1555421689-491a97ff2040",
    ],
    stock: 87,
    reviewCount: 94,
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
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
      "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4",
    ],
    stock: 9,
    reviewCount: 3,
  },
  {
    slug: "usb-condenser-mic",
    name: "Cardioid USB Condenser Microphone",
    tag: "COMMUNICATION",
    price: 189.0,
    oldPrice: null,
    preview: "Cardioid capsule. 24-bit/96kHz. Zero-latency monitor.",
    description:
      "A side-address condenser microphone with a cardioid polar pattern that rejects room noise behind it. 24-bit, 96 kHz USB audio, direct headphone monitoring at zero latency. Matte black with a brass-ringed capsule.",
    images: [
      "https://images.unsplash.com/photo-1598743400863-0201c7e1445b",
      "https://images.unsplash.com/photo-1612367703022-e66c649e5abb",
    ],
    stock: 19,
    reviewCount: 67,
  },
  {
    slug: "brass-business-card-stand",
    name: "Solid Brass Card Stand",
    tag: "COMMUNICATION",
    price: 38.0,
    oldPrice: null,
    preview: "Solid brass. Holds 30 cards. Naturally ages.",
    description:
      "A solid brass card stand that holds about thirty business cards at a slight backward tilt. No coating — it patinas with your desk over years. Heavy enough to stay put one-handed.",
    images: [
      "https://images.unsplash.com/photo-1586281380426-83e9cfe0c5f0",
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    ],
    stock: 58,
    reviewCount: 11,
  },
  {
    slug: "noise-canceling-earbuds",
    name: "Active Noise-Canceling Earbuds",
    tag: "COMMUNICATION",
    price: 269.0,
    oldPrice: 319.0,
    preview: "ANC. 8h + 24h case. Multipoint pairing.",
    description:
      "In-ear ANC earbuds that cut broadband noise by 35 dB. Eight hours per charge, 32 with the case. Multipoint lets them stay paired to your laptop and phone simultaneously. IPX5 water resistant.",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b",
    ],
    stock: 41,
    reviewCount: 128,
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
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57",
      "https://images.unsplash.com/photo-1455390582262-044cdead277a",
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
      "https://images.unsplash.com/photo-1544816155-12df9643f363",
      "https://images.unsplash.com/photo-1569578943539-5f83c3e92e2f",
    ],
    stock: 120,
    reviewCount: 0,
  },
  {
    slug: "letterpress-notepad",
    name: "Kraft Letterpress Notepad",
    tag: "OFFICE_SUPPLIES",
    price: 28.0,
    oldPrice: null,
    preview: "50 sheets. Kraft board cover. Perforated tear-out.",
    description:
      "A 6 by 9 inch notepad printed by letterpress on 120 gsm uncoated stock. Kraft board cover, perforated sheets for clean tear-out, wire-binding that lies flat. Designed to look like something worth keeping.",
    images: [
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4",
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57",
    ],
    stock: 94,
    reviewCount: 33,
  },
  {
    slug: "brass-scissors",
    name: "Forged Brass Scissors",
    tag: "OFFICE_SUPPLIES",
    price: 64.0,
    oldPrice: null,
    preview: "Stainless blades. Solid brass handle. 8\" overall.",
    description:
      "A pair of scissors forged in Japan: stainless steel blades precision-ground to a micro-bevel, solid brass handle scales. The brass will develop a warm patina with use. Opens with one hand via a spring-loaded loop.",
    images: [
      "https://images.unsplash.com/photo-1583864697784-a0efc8379f70",
      "https://images.unsplash.com/photo-1561861422-a549073e547a",
    ],
    stock: 37,
    reviewCount: 14,
  },
  {
    slug: "wax-seal-kit",
    name: "Wax Seal Letter-Writing Kit",
    tag: "OFFICE_SUPPLIES",
    price: 54.0,
    oldPrice: null,
    preview: "Brass stamp, 3 wax sticks, wax melting spoon.",
    description:
      "A complete wax seal kit: a custom-etched brass stamp with a 'A' monogram, three natural wax sticks in ivory, forest green, and charcoal, plus a long-handled brass melting spoon. Comes in a cloth-wrapped box.",
    images: [
      "https://images.unsplash.com/photo-1616161560417-2b3dd9d4ae4a",
      "https://images.unsplash.com/photo-1578020190125-f4f7c18bc9cb",
    ],
    stock: 52,
    reviewCount: 21,
  },
  {
    slug: "glass-pen-cup",
    name: "Blown Glass Pen Cup",
    tag: "OFFICE_SUPPLIES",
    price: 42.0,
    oldPrice: null,
    preview: "Hand-blown. Holds 8–10 pens. Weighted base.",
    description:
      "A hand-blown glass pen cup with a slightly irregular silhouette — each one is different. Holds 8 to 10 pens upright. The weighted base keeps it from tipping with a full load. Dishwasher safe.",
    images: [
      "https://images.unsplash.com/photo-1586281380426-83e9cfe0c5f0",
      "https://images.unsplash.com/photo-1519219788971-8d9797e0928e",
    ],
    stock: 61,
    reviewCount: 18,
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
      "https://images.unsplash.com/photo-1593640408182-31c228b2e8ad",
      "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9",
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
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef",
    ],
    stock: 74,
    reviewCount: 11,
  },
  {
    slug: "single-monitor-arm",
    name: "Articulating Monitor Arm",
    tag: "ERGONOMIC_ACCESSORIES",
    price: 89.0,
    oldPrice: null,
    preview: "Up to 32\". Full 360° rotation. Cable management.",
    description:
      "A full-motion monitor arm that holds up to 32 inches and 17 lbs. Single-arm with a parallelogram linkage so you can push the monitor back and pull it forward without losing height. Internal cable routing.",
    images: [
      "https://images.unsplash.com/photo-1593640408182-31c228b2e8ad",
      "https://images.unsplash.com/photo-1555421689-491a97ff2040",
    ],
    stock: 55,
    reviewCount: 147,
  },
  {
    slug: "walnut-laptop-stand",
    name: "Solid Walnut Laptop Stand",
    tag: "ERGONOMIC_ACCESSORIES",
    price: 79.0,
    oldPrice: null,
    preview: "Two angles. Walnut + brass. Ventilated underside.",
    description:
      "A laptop stand in solid walnut with brass barrel adjusters for two angles: 15° for typing and 25° for viewing. The open arch underneath ventilates the bottom of your machine and leaves room for a keyboard.",
    images: [
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89",
      "https://images.unsplash.com/photo-1484788984921-03950022c9ef",
    ],
    stock: 48,
    reviewCount: 88,
  },
  {
    slug: "anti-fatigue-mat",
    name: "Standing Anti-Fatigue Mat",
    tag: "ERGONOMIC_ACCESSORIES",
    price: 99.0,
    oldPrice: 129.0,
    preview: "3/4\" foam core. Beveled edges. 32×20\".",
    description:
      "A 32-by-20-inch standing mat with a 3/4-inch ergonomic foam core and beveled edges so you don't trip. Natural rubber base grips hard floors and tile without a pad underneath. Spot-clean top surface.",
    images: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    ],
    stock: 29,
    reviewCount: 76,
  },
  {
    slug: "ergonomic-footrest",
    name: "Tilting Ergonomic Footrest",
    tag: "ERGONOMIC_ACCESSORIES",
    price: 59.0,
    oldPrice: null,
    preview: "±30° rock. Non-slip top. Works under any desk.",
    description:
      "An ergonomic footrest that rocks ±30 degrees to keep your legs active while seated. Non-slip surface, rubberized base, adjustable height from 4 to 6 inches. Reduces ankle and calf fatigue on long calls.",
    images: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd",
      "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9",
    ],
    stock: 63,
    reviewCount: 32,
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
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
      "https://images.unsplash.com/photo-1621177555452-bedbe4c28879",
      "https://images.unsplash.com/photo-1551380701-5dd33d5b5d06",
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
      "https://images.unsplash.com/photo-1570974802254-4b0ad1a755f5",
    ],
    stock: 11,
    reviewCount: 38,
  },
  {
    slug: "monitor-light-bar",
    name: "Monitor Light Bar",
    tag: "LIGHTING",
    price: 79.0,
    oldPrice: null,
    preview: "Clamp-free. Asymmetric optic. No screen glare.",
    description:
      "A USB-powered monitor light bar that hangs on the top bezel without clamps or adhesive. Asymmetric optic throws light only downward onto your desk — zero reflection back into the camera or your eyes. Touch wheel for brightness and temperature.",
    images: [
      "https://images.unsplash.com/photo-1593640495253-23196b27a87f",
      "https://images.unsplash.com/photo-1555421689-491a97ff2040",
    ],
    stock: 72,
    reviewCount: 203,
  },
  {
    slug: "sunrise-alarm-clock",
    name: "Sunrise Wake-Up Light",
    tag: "LIGHTING",
    price: 119.0,
    oldPrice: null,
    preview: "Sunrise simulation 30 min before alarm. FM radio.",
    description:
      "A bedside alarm clock that simulates a 30-minute sunrise before the actual alarm time. Starts at deep orange and eases to full daylight. Built-in FM radio and three natural wake sounds. Ceramic-effect base.",
    images: [
      "https://images.unsplash.com/photo-1617363020293-62faac14783d",
      "https://images.unsplash.com/photo-1530811761207-8d9d22f0a141",
    ],
    stock: 36,
    reviewCount: 54,
  },
  {
    slug: "wall-sconce-lamp",
    name: "Adjustable Brass Wall Sconce",
    tag: "LIGHTING",
    price: 189.0,
    oldPrice: null,
    preview: "Swing arm. Brass + ceramic shade. Hardwired or plug-in.",
    description:
      "A swing-arm wall sconce in brushed brass with a hand-thrown ceramic shade. Available hardwired or with a cloth-wrapped plug-in cord. Arm extends 18 inches and pivots full 180 degrees.",
    images: [
      "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
    ],
    stock: 18,
    reviewCount: 27,
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
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
      "https://images.unsplash.com/photo-1585664811087-47f65abbad64",
    ],
    stock: 68,
    reviewCount: 32,
  },
  {
    slug: "succulent-trio",
    name: "Desk Succulent Trio (Live)",
    tag: "DECOR_AND_COMFORT",
    price: 48.0,
    oldPrice: null,
    preview: "Three varieties. Terracotta pots. Low-maintenance.",
    description:
      "Three small succulents — echeveria, haworthia, and aloe — in 3-inch terracotta pots. Ships rooted and healthy. Water once every two to three weeks. Fits in the corner of any desk without demanding attention.",
    images: [
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    ],
    stock: 24,
    reviewCount: 41,
  },
  {
    slug: "wool-desk-blotter",
    name: "Merino Wool Desk Blotter",
    tag: "DECOR_AND_COMFORT",
    price: 95.0,
    oldPrice: null,
    preview: "100% merino. 24×16\". Protects the surface, absorbs noise.",
    description:
      "A 24-by-16-inch desk blotter in 100% merino wool felt — 5mm thick. It protects the desk surface, softens ambient sound, and gives you a consistent surface for writing. Available in natural, charcoal, and sage.",
    images: [
      "https://images.unsplash.com/photo-1593640408182-31c228b2e8ad",
      "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a",
    ],
    stock: 33,
    reviewCount: 17,
  },
  {
    slug: "beeswax-taper-pair",
    name: "Beeswax Taper Candle Pair",
    tag: "DECOR_AND_COMFORT",
    price: 28.0,
    oldPrice: null,
    preview: "100% beeswax. 10\" tapers. Honey and vanilla scent.",
    description:
      "A pair of 10-inch hand-dipped beeswax tapers. Pure beeswax burns longer and cleaner than paraffin, with a subtle natural honey and vanilla note. Fit standard 7/8-inch candle holders.",
    images: [
      "https://images.unsplash.com/photo-1574100680328-f8a0d4d1c73c",
      "https://images.unsplash.com/photo-1601049676869-702ea24cfd58",
    ],
    stock: 83,
    reviewCount: 23,
  },
  {
    slug: "framed-botanical-print",
    name: "Framed Botanical Letterpress Print",
    tag: "DECOR_AND_COMFORT",
    price: 85.0,
    oldPrice: null,
    preview: "11×14\". Letterpress. Ash frame with linen mat.",
    description:
      "An 11-by-14-inch botanical print created from 19th-century scientific illustration plates, reprinted by letterpress on 300 gsm cotton stock. Comes framed in solid ash with a natural linen mat.",
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
      "https://images.unsplash.com/photo-1519219788971-8d9797e0928e",
    ],
    stock: 15,
    reviewCount: 8,
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
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
      "https://images.unsplash.com/photo-1588854337236-6889d631faa8",
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
      "https://images.unsplash.com/photo-1586281380426-83e9cfe0c5f0",
      "https://images.unsplash.com/photo-1568013519834-7bd7f32e4f5c",
    ],
    stock: 47,
    reviewCount: 4,
  },
  {
    slug: "desktop-drawer-unit",
    name: "Two-Drawer Desktop Unit",
    tag: "STORAGE_SOLUTIONS",
    price: 179.0,
    oldPrice: null,
    preview: "Walnut veneer. Soft-close drawers. Monitor-weight rated.",
    description:
      "A two-drawer desktop unit in walnut veneer with soft-close slides. Rated to support a monitor on top. Sits flush under most monitor stands. Upper drawer is felt-lined for pens and small items.",
    images: [
      "https://images.unsplash.com/photo-1568013519834-7bd7f32e4f5c",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
    ],
    stock: 11,
    reviewCount: 22,
  },
  {
    slug: "pegboard-organizer",
    name: "Perforated Steel Pegboard Set",
    tag: "STORAGE_SOLUTIONS",
    price: 149.0,
    oldPrice: null,
    preview: "24×18\" panel + 12 accessories. Powder-coated steel.",
    description:
      "A 24-by-18-inch powder-coated steel pegboard with 12 accessories: shelves, pen rails, a cable drop, a small shelf, and hooks. Mounts with two wall anchors. Accessories click in and rearrange without tools.",
    images: [
      "https://images.unsplash.com/photo-1555421689-491a97ff2040",
      "https://images.unsplash.com/photo-1588854337236-6889d631faa8",
    ],
    stock: 27,
    reviewCount: 36,
  },
  {
    slug: "cable-management-box",
    name: "Linen Cable Management Box",
    tag: "STORAGE_SOLUTIONS",
    price: 49.0,
    oldPrice: null,
    preview: "Hides a power strip + cords. Linen lid. 14×5×6\".",
    description:
      "A desk-sized box in walnut-stained MDF with a removable linen-covered lid. Fits a standard six-outlet power strip and swallows the cord chaos underneath. Cable exit slots on both ends.",
    images: [
      "https://images.unsplash.com/photo-1625842268584-8f3296236761",
      "https://images.unsplash.com/photo-1591035897819-f4bdf739f446",
    ],
    stock: 68,
    reviewCount: 49,
  },
  {
    slug: "bamboo-drawer-organizer",
    name: "Bamboo Drawer Divider Set",
    tag: "STORAGE_SOLUTIONS",
    price: 38.0,
    oldPrice: null,
    preview: "Expandable 15–22\". Five-piece. Bamboo.",
    description:
      "Five expandable bamboo dividers that fit drawers from 15 to 22 inches wide. Creates sections for pens, scissors, sticky notes, and anything else that ends up loose in a drawer. No adhesive, no tools.",
    images: [
      "https://images.unsplash.com/photo-1519219788971-8d9797e0928e",
      "https://images.unsplash.com/photo-1568013519834-7bd7f32e4f5c",
    ],
    stock: 92,
    reviewCount: 28,
  },
  {
    slug: "expandable-desktop-file",
    name: "Expanding Desktop File Organizer",
    tag: "STORAGE_SOLUTIONS",
    price: 59.0,
    oldPrice: null,
    preview: "13 pockets. Accordion style. Linen-wrapped board.",
    description:
      "A 13-pocket expanding file in linen-covered hardboard. Each pocket is labeled with a handwritten-style tab — months, or your own labeling. Sits on the desk without tipping. Holds letter and A4.",
    images: [
      "https://images.unsplash.com/photo-1586281380426-83e9cfe0c5f0",
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e",
    ],
    stock: 44,
    reviewCount: 15,
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
      "https://images.unsplash.com/photo-1578116922645-3976907a7671",
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597",
    ],
    stock: 41,
    reviewCount: 26,
  },
  {
    slug: "blue-light-glasses",
    name: "Blue Light Filtering Glasses",
    tag: "HEALTH_AND_WELLNESS",
    price: 89.0,
    oldPrice: null,
    preview: "Clear lens. Filters 40% blue light. Spring hinge.",
    description:
      "Non-prescription glasses with a clear lens that filters 40% of the blue light spectrum associated with eye fatigue. Spring-hinge temples, lightweight acetate frame. Wear them from 9 AM to close-of-business.",
    images: [
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    ],
    stock: 78,
    reviewCount: 112,
  },
  {
    slug: "under-desk-bike",
    name: "Under-Desk Cycle Pedals",
    tag: "HEALTH_AND_WELLNESS",
    price: 139.0,
    oldPrice: null,
    preview: "Quiet magnetic resistance. LCD display. 8 levels.",
    description:
      "A compact pedal unit that slides under any desk. Magnetic resistance is silent — you can pedal through a call without anyone noticing. LCD shows time, distance, and calories. Eight resistance levels.",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      "https://images.unsplash.com/photo-1620188526357-9c126ee49d2b",
    ],
    stock: 33,
    reviewCount: 55,
  },
  {
    slug: "natural-cork-yoga-mat",
    name: "Natural Cork Yoga Mat",
    tag: "HEALTH_AND_WELLNESS",
    price: 99.0,
    oldPrice: null,
    preview: "Cork + natural rubber. 72×24\". Non-slip when wet.",
    description:
      "A yoga mat with a natural cork surface over a natural rubber base. Cork is naturally antimicrobial and gets grippier as it gets wet — unlike foam mats. 72 by 24 inches, 5mm thick, carries in a bag included.",
    images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    ],
    stock: 26,
    reviewCount: 38,
  },
  {
    slug: "acupressure-foot-mat",
    name: "Acupressure Standing Mat",
    tag: "HEALTH_AND_WELLNESS",
    price: 55.0,
    oldPrice: null,
    preview: "Acupressure spikes. Foot + leg circulation. 27×11\".",
    description:
      "A standing mat with acupressure spikes across the surface to stimulate circulation in the feet and calves during long standing-desk sessions. Use barefoot for 10 to 20 minutes. Natural linen case included.",
    images: [
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597",
      "https://images.unsplash.com/photo-1590416606655-07e0e5de8e9a",
    ],
    stock: 57,
    reviewCount: 19,
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
      "https://images.unsplash.com/photo-1618329027054-0d4cf29d97e6",
      "https://images.unsplash.com/photo-1588693363434-03462c39e4c1",
    ],
    stock: 130,
    reviewCount: 2,
  },
  {
    slug: "keyboard-cleaning-kit",
    name: "Keyboard Deep-Clean Kit",
    tag: "CLEANING_AND_MAINTENANCE",
    price: 26.0,
    oldPrice: null,
    preview: "Keycap puller, brush set, cleaning gel, cloth.",
    description:
      "Everything you need to clean a mechanical keyboard: a wire keycap puller, three detail brushes in different stiffnesses, a tub of cleaning putty for between keys, and a lint-free microfiber cloth.",
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef",
    ],
    stock: 85,
    reviewCount: 14,
  },
  {
    slug: "leather-care-kit",
    name: "Leather Desk Care Kit",
    tag: "CLEANING_AND_MAINTENANCE",
    price: 45.0,
    oldPrice: null,
    preview: "Conditioner, cleaner, horsehair brush. For all leather.",
    description:
      "A three-piece leather care kit: a natural saddle soap bar, a beeswax conditioner, and a horsehair buffing brush. Use quarterly on your desk pad, chair, and journal cover. Travel-size so it fits in a drawer.",
    images: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd",
      "https://images.unsplash.com/photo-1593640408182-31c228b2e8ad",
    ],
    stock: 62,
    reviewCount: 7,
  },
  {
    slug: "electric-air-duster",
    name: "Rechargeable Electric Air Duster",
    tag: "CLEANING_AND_MAINTENANCE",
    price: 59.0,
    oldPrice: null,
    preview: "No cans. 6000 RPM. USB-C rechargeable.",
    description:
      "An electric air duster that replaces canned air. 6000 RPM brushless motor, USB-C rechargeable. Two nozzle attachments. No propellant, no cold burn, no running out mid-clean.",
    images: [
      "https://images.unsplash.com/photo-1625842268584-8f3296236761",
      "https://images.unsplash.com/photo-1583864697784-a0efc8379f70",
    ],
    stock: 43,
    reviewCount: 31,
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
      "https://images.unsplash.com/photo-1616161560417-2b3dd9d4ae4a",
      "https://images.unsplash.com/photo-1588693363434-03462c39e4c1",
    ],
    stock: 210,
    reviewCount: 0,
  },
  {
    slug: "privacy-screen-filter",
    name: "Privacy Screen Filter",
    tag: "NETWORKING_AND_SECURITY",
    price: 49.0,
    oldPrice: null,
    preview: "60° view angle. Anti-glare. 13\", 14\", 15\", 16\".",
    description:
      "A micro-louver privacy filter that blacks out your screen beyond 60 degrees to either side. Attaches via four adhesive tabs or the included magnetic clips — no residue on the screen either way. Anti-glare coating.",
    images: [
      "https://images.unsplash.com/photo-1593642532559-2b1e33a14a7e",
      "https://images.unsplash.com/photo-1484788984921-03950022c9ef",
    ],
    stock: 74,
    reviewCount: 29,
  },
  {
    slug: "cable-management-sleeves",
    name: "Neoprene Cable Sleeve Set",
    tag: "NETWORKING_AND_SECURITY",
    price: 22.0,
    oldPrice: null,
    preview: "10 sleeves, 3 sizes. Cut-to-length. Velcro closures.",
    description:
      "Ten neoprene cable sleeves in three diameters: 1/4 inch for USB cables, 1/2 inch for power cords, and 1 inch for cable bundles. Cut to any length with scissors. Velcro closures on the long axis for easy in-and-out.",
    images: [
      "https://images.unsplash.com/photo-1591035897819-f4bdf739f446",
      "https://images.unsplash.com/photo-1625842268584-8f3296236761",
    ],
    stock: 148,
    reviewCount: 18,
  },
  {
    slug: "usbc-gigabit-ethernet",
    name: "USB-C Gigabit Ethernet Adapter",
    tag: "NETWORKING_AND_SECURITY",
    price: 29.0,
    oldPrice: null,
    preview: "USB-C to RJ45. Gigabit. Plug-and-play. Aluminum.",
    description:
      "A USB-C to RJ45 Gigabit Ethernet adapter in brushed aluminum that matches most modern laptops. Plug-and-play on macOS, Windows, and Linux. No drivers, no setup. Full gigabit speeds.",
    images: [
      "https://images.unsplash.com/photo-1625842268584-8f3296236761",
      "https://images.unsplash.com/photo-1591035897819-f4bdf739f446",
    ],
    stock: 116,
    reviewCount: 43,
  },
];
