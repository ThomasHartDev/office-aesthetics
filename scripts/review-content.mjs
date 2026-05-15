// Pools used to synthesize varied, realistic-sounding reviews.
// Comments are written in a casual, real-customer voice — not corporate copy.

export const firstNames = [
  "Alex", "Maya", "Daniel", "Sofia", "Jordan", "Emma", "Liam", "Olivia",
  "Noah", "Ava", "Ethan", "Isabella", "Lucas", "Mia", "Mason", "Charlotte",
  "Logan", "Amelia", "Henry", "Harper", "Sebastian", "Evelyn", "Jack", "Abigail",
  "Owen", "Emily", "Theo", "Elizabeth", "Levi", "Sofia", "Aiden", "Aria",
  "Caleb", "Penelope", "Wyatt", "Hazel", "Julian", "Layla", "Grayson", "Riley",
  "Leo", "Zoe", "Hudson", "Nora", "Asher", "Lily", "Carter", "Ellie",
  "Miles", "Aurora", "Eli", "Stella", "Felix", "Natalie", "Roman", "Leah",
  "Beckett", "Audrey", "Ezra", "Savannah", "Atlas", "Bella", "Jasper", "Claire",
  "Silas", "Skylar", "Soren", "Lucy", "Bennett", "Paisley", "Adrian", "Anna",
  "Cole", "Caroline", "Nolan", "Genesis", "Easton", "Ariana", "Adam", "Allison",
  "Colin", "Gabrielle", "Marcus", "Ruth", "Devin", "Hannah", "Reid", "Quinn",
  "Tyler", "Madison", "Kevin", "Brooklyn", "Diego", "Eliana", "Omar", "Naomi",
];

export const lastInitials = [
  "B.", "C.", "D.", "F.", "G.", "H.", "J.", "K.", "L.", "M.",
  "N.", "P.", "R.", "S.", "T.", "V.", "W.", "Y.", "Z.",
];

// Per-rating comment pools. Each comment is hand-written.
// Some include light typos and lowercase to feel real.
export const commentPools = {
  5: [
    "Honestly exceeded expectations. Showed up faster than the estimate and the build quality is way past what the photos suggest.",
    "I was nervous spending this much on something I'd only seen online. No regrets. It's the nicest thing on my desk now.",
    "Bought this six months ago and I use it every single day. Still looks like the day it arrived.",
    "Quality is bonkers for the price. I've owned 'premium' versions of this from name brands that didn't feel this nice.",
    "Packaging alone was kind of a moment. You can tell they care about every step. Product itself is excellent.",
    "Wife is the picky one and even she said it looked good. That's the highest compliment I can give.",
    "Took about ten minutes to set up and it just works. No fiddling, no support call, no surprises.",
    "If I had to nitpick — nothing. Genuinely nothing. Buy it.",
    "Replaced my old one with this and the difference is night and day. Wish I'd done it sooner.",
    "Build feels solid in the hand. Weighted nicely. Materials feel real and not the usual plasticky imitation.",
    "Office looks 10x more put together with this in it. People at video calls have asked about it twice.",
    "I'm picky about this stuff and the finish is actually as good as the photos. Maybe better.",
    "Great product, fair price, came when they said it would. That's all I want.",
    "Five stars, but only because I can't give six.",
    "Honestly I'd buy it again at twice the price. It's that good.",
    "Customer service was also fantastic — had a small question, got an answer in like an hour from a real person.",
    "Bought two — one for home, one for the office. Both perfect. Will probably buy a third.",
  ],
  4: [
    "Really nice product overall, took off a star because shipping was slower than I expected. The product itself is great.",
    "Love it but the box arrived with a small dent. Product was fine inside. Just wish the packaging held up better.",
    "Works as advertised. The only reason I'm not at 5 is the price is a bit steep — though I get why.",
    "Solid build. One small finishing imperfection on the underside but you'd never see it in normal use.",
    "Great so far. Three months in and no issues. We'll see how it holds up long term.",
    "Slightly heavier than I imagined from the photos. Not a deal-breaker but worth knowing.",
    "I had to read the instructions twice — they could be clearer — but once it was set up it's exactly what I wanted.",
    "Beautiful piece. Color is slightly different from the website photo in person, more on the warm side, which I actually prefer.",
    "Good quality, but I wish there were more color options. Would have liked the cream version.",
    "Not perfect but I'm happy. Would buy again.",
    "Took longer than expected to arrive but worth the wait.",
    "Mostly love it. Small ding off because the cord is a touch short for my setup.",
    "Definitely premium feel. Would 5-star if the warranty was longer.",
  ],
  3: [
    "It's fine. Does what it's supposed to. I don't have strong feelings about it either way.",
    "Looks great in photos. In person it's good, not great. Maybe my expectations were too high.",
    "Mixed feelings. Quality is there but I expected a bit more at this price point.",
    "Works fine but I had to assemble more of it than the listing implied. Not a huge deal.",
    "Arrived with a scratch but I didn't bother returning it. Otherwise it's good.",
    "Solid product but I'm not sure it's worth what I paid. Wait for a sale.",
    "The function is there. The form is slightly less impressive in person. Three stars feels right.",
    "I wanted to love it. I just like it.",
  ],
  2: [
    "Not what I expected. The materials feel cheaper than the photos suggest. Returning it.",
    "Product was okay but the customer service when I asked about a defect was painful. Took two weeks of emails.",
    "Showed up with damage and the replacement also had a chip. Two for two is not great.",
    "It works but it doesn't feel like the price tag. I'd shop around if I were doing it again.",
    "Disappointed honestly. Wanted to like it. Don't.",
  ],
  1: [
    "Arrived broken. Replacement also arrived broken. Done with this.",
    "Stopped working after three weeks. Not what I expected for the money.",
    "Doesn't match the description at all. Save your money.",
    "Returned it. Just not the quality the photos imply.",
  ],
};

export const titlePools = {
  5: [
    "Worth every dollar", "Genuinely impressive", "Buy it", "Better than I hoped",
    "Exactly what I wanted", "Best thing on my desk", "Don't think twice",
    "Couldn't be happier", "Holding up beautifully", "10/10 would buy again",
    "Quality is unreal", "Made my day", "Premium feel", "Looks even better in person",
  ],
  4: [
    "Really good with one small issue", "Almost perfect", "Great with minor caveats",
    "Happy overall", "Solid choice", "Would recommend",
    "Worth it", "Good purchase",
  ],
  3: [
    "It's fine", "Mixed feelings", "Decent but not amazing", "Just okay",
    "Three stars feels right", "Wanted more",
  ],
  2: [
    "Underwhelming", "Not for me", "Disappointed", "Returning it", "Wouldn't buy again",
  ],
  1: [
    "Save your money", "Broken on arrival", "Bad experience", "Avoid",
  ],
};

export function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function randomName() {
  return `${pick(firstNames)} ${pick(lastInitials)}`;
}

// Build a rating distribution that skews positive but is not all 5-stars.
// Returns a function that yields ratings 1..5.
export function makeRatingSampler(targetAvg = 4.5) {
  // Higher targetAvg pulls weights toward 5; lower toward middle.
  // We construct weights for ratings [1,2,3,4,5] that produce roughly targetAvg.
  const distros = {
    4.9: [0, 0, 1, 4, 95],
    4.8: [1, 1, 2, 7, 89],
    4.7: [1, 1, 3, 10, 85],
    4.6: [1, 2, 4, 14, 79],
    4.5: [2, 3, 5, 18, 72],
    4.4: [2, 3, 7, 22, 66],
    4.3: [3, 4, 9, 25, 59],
    4.2: [3, 5, 11, 27, 54],
    4.1: [4, 6, 13, 28, 49],
    4.0: [5, 7, 14, 28, 46],
    3.8: [6, 9, 18, 30, 37],
    3.5: [8, 12, 22, 30, 28],
  };
  // pick the closest key
  const key = Object.keys(distros)
    .map(Number)
    .sort((a, b) => Math.abs(a - targetAvg) - Math.abs(b - targetAvg))[0];
  const weights = distros[key];
  const total = weights.reduce((s, w) => s + w, 0);
  return () => {
    let r = Math.random() * total;
    for (let i = 0; i < 5; i++) {
      r -= weights[i];
      if (r <= 0) return i + 1;
    }
    return 5;
  };
}

// Spread dates over the last `days` days, biased toward more recent.
export function randomDateWithin(days = 365) {
  const now = Date.now();
  // Beta-ish skew toward recent
  const r = Math.pow(Math.random(), 1.4);
  return new Date(now - r * days * 86400 * 1000);
}

export function buildReview(rating) {
  return {
    reviewerName: randomName(),
    email: `${pick(firstNames).toLowerCase()}${Math.floor(Math.random() * 99)}@example.com`,
    title: pick(titlePools[rating]),
    comment: pick(commentPools[rating]),
    rating,
    helpful: {
      thumbsUp: Math.floor(Math.random() * (rating >= 4 ? 28 : 6)),
      thumbsDown: Math.floor(Math.random() * (rating <= 2 ? 5 : 2)),
    },
    photos: [],
    date: randomDateWithin(360),
  };
}
