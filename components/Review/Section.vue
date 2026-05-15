<template>
  <div class="reviews-section">
    <!-- ── Summary header ─────────────────────────────────────────── -->
    <div class="summary">
      <div class="summary-left">
        <div class="rating-line">
          <span class="rating-value">{{ overallRating.toFixed(1) }}</span>
          <div class="rating-stars">
            <SubcomponentsStarRating :rating="overallRating" />
          </div>
        </div>
        <div class="review-count-line">
          Based on
          <strong>{{ totalReviews.toLocaleString() }}</strong>
          {{ totalReviews === 1 ? "review" : "reviews" }}
        </div>

        <div class="distribution">
          <button
            v-for="star in [5, 4, 3, 2, 1]"
            :key="star"
            class="dist-row"
            :class="{ active: activeFilter === star }"
            @click="toggleStarFilter(star)"
          >
            <span class="dist-label">{{ star }} star</span>
            <div class="dist-bar">
              <div
                class="dist-fill"
                :style="{ width: percentForStar(star) + '%' }"
              ></div>
            </div>
            <span class="dist-count">{{ ratingCounts[star] }}</span>
          </button>
        </div>
      </div>

      <div class="summary-right">
        <button class="write-review-btn" @click="openReviewModal">
          Write a review
        </button>
        <p class="summary-hint" v-if="totalReviews > 0">
          {{ percentRecommend }}% would recommend this product
        </p>
      </div>
    </div>

    <!-- ── Photo gallery from reviews ─────────────────────────────── -->
    <div v-if="reviewPhotos.length" class="photo-gallery">
      <p class="gallery-title">From the customers</p>
      <div class="gallery-row">
        <img
          v-for="(photo, idx) in reviewPhotos.slice(0, 8)"
          :key="idx"
          :src="photo"
          class="gallery-thumb"
          alt="Customer photo"
        />
      </div>
    </div>

    <!-- ── Toolbar: filter chips + sort ───────────────────────────── -->
    <div class="toolbar" v-if="totalReviews > 0">
      <div class="filter-chips">
        <button
          class="chip"
          :class="{ active: activeFilter === 'all' }"
          @click="activeFilter = 'all'"
        >
          All reviews
          <span class="chip-count">{{ totalReviews }}</span>
        </button>
        <button
          class="chip"
          :class="{ active: activeFilter === 'verified' }"
          @click="activeFilter = 'verified'"
        >
          Verified only
        </button>
        <button
          class="chip"
          :class="{ active: activeFilter === 'with-photos' }"
          @click="activeFilter = 'with-photos'"
          v-if="reviewPhotos.length"
        >
          With photos
        </button>
        <button
          v-if="typeof activeFilter === 'number'"
          class="chip filter-pill"
          @click="activeFilter = 'all'"
        >
          {{ activeFilter }}-star only
          <span class="chip-x">×</span>
        </button>
      </div>

      <div class="sort-wrap">
        <label class="sort-label">Sort</label>
        <select v-model="sortBy" class="sort-select">
          <option value="helpful">Most helpful</option>
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
          <option value="highest">Highest rated</option>
          <option value="lowest">Lowest rated</option>
        </select>
      </div>
    </div>

    <!-- ── Showing line ───────────────────────────────────────────── -->
    <div v-if="totalReviews > 0" class="showing-line">
      Showing
      <strong>{{ visibleStart }}–{{ visibleEnd }}</strong>
      of {{ filteredReviews.length.toLocaleString() }}
      {{ filteredReviews.length === 1 ? "review" : "reviews" }}
    </div>

    <!-- ── Reviews list ───────────────────────────────────────────── -->
    <div v-if="totalReviews === 0" class="empty-state">
      <div class="empty-illustration">★</div>
      <h3>No reviews yet</h3>
      <p>Be the first to share your thoughts on {{ props.itemName }}.</p>
      <button class="write-review-btn" @click="openReviewModal">
        Write the first review
      </button>
    </div>

    <div v-else-if="filteredReviews.length === 0" class="empty-state subtle">
      <p>No reviews match this filter.</p>
      <button class="link-btn" @click="activeFilter = 'all'">
        Clear filter
      </button>
    </div>

    <div v-else class="reviews-list">
      <article
        v-for="review in pagedReviews"
        :key="review._id"
        class="review-card"
      >
        <div class="review-head">
          <div class="avatar">{{ initialsOf(review.reviewerName) }}</div>
          <div class="head-meta">
            <div class="head-line-1">
              <span class="reviewer-name">{{
                censorName(review.reviewerName)
              }}</span>
              <span class="verified" title="Verified purchase">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12l2 2 4-4"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
                Verified
              </span>
            </div>
            <div class="head-line-2">
              <div class="card-stars">
                <span
                  v-for="i in 5"
                  :key="i"
                  class="star"
                  :class="{ filled: review.rating >= i }"
                  >★</span
                >
              </div>
              <span class="review-date">{{ formatDate(review.date) }}</span>
            </div>
          </div>
        </div>

        <h4 class="review-title" v-if="review.title">{{ review.title }}</h4>
        <p class="review-comment">{{ review.comment }}</p>

        <div v-if="review.photos && review.photos.length" class="review-photos">
          <img
            v-for="(photo, idx) in review.photos"
            :key="idx"
            :src="photo"
            alt="Review photo"
            class="review-photo"
          />
        </div>

        <div class="helpful-bar">
          <span class="helpful-prompt">Was this helpful?</span>
          <button
            class="vote-btn"
            :class="{ voted: hasVoted(review) }"
            :disabled="hasVoted(review)"
            @click="markHelpful(review, 'up')"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 22V11M2 13v7a2 2 0 002 2h3M7 11l3.5-7c.8-.6 2 0 2 1v4h6a2 2 0 012 2l-2 7a2 2 0 01-2 2H7"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {{ review.helpful?.thumbsUp || 0 }}
          </button>
          <button
            class="vote-btn"
            :class="{ voted: hasVoted(review) }"
            :disabled="hasVoted(review)"
            @click="markHelpful(review, 'down')"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M17 2v11M22 11V4a2 2 0 00-2-2h-3M17 13l-3.5 7c-.8.6-2 0-2-1v-4h-6a2 2 0 01-2-2l2-7a2 2 0 012-2h10"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {{ review.helpful?.thumbsDown || 0 }}
          </button>
        </div>
      </article>

      <div v-if="hasMore" class="load-more-wrap">
        <button class="load-more-btn" @click="loadMore">
          Show {{ Math.min(pageSize, filteredReviews.length - visibleEnd) }}
          more
        </button>
      </div>
    </div>

    <!-- ── Write Review Modal ─────────────────────────────────────── -->
    <transition name="fade">
      <div class="modal-overlay" v-if="showReviewModal" @click.self="closeReviewModal">
        <div class="modal">
          <div class="modal-header">
            <div class="item-info">
              <img
                v-if="props.itemImage"
                :src="props.itemImage"
                alt="Item Image"
                class="modal-item-image"
              />
              <div>
                <h3 class="modal-title">Rate {{ props.itemName }}</h3>
                <div class="step-pills">
                  <span
                    v-for="n in 3"
                    :key="n"
                    class="step-pill"
                    :class="{ on: reviewStep >= n }"
                  ></span>
                </div>
              </div>
            </div>
            <button class="close-button" @click="closeReviewModal">×</button>
          </div>

          <div class="modal-body">
            <div class="modal-body-wrapper" v-if="reviewStep === 1">
              <p class="step-heading">Your rating</p>
              <div v-if="showRequiredError" class="error-message">
                Please fill in every required field
              </div>

              <div class="star-rating-input">
                <span
                  v-for="i in 5"
                  :key="i"
                  class="star"
                  :class="{ filled: reviewForm.rating >= i }"
                  @click="reviewForm.rating = i"
                  >★</span
                >
              </div>

              <label class="input-label">Review title *</label>
              <input
                type="text"
                placeholder="Sum it up in one line"
                v-model="reviewForm.title"
              />

              <label class="input-label">Your review *</label>
              <textarea
                placeholder="What did you like? What could be better?"
                v-model="reviewForm.comment"
                rows="5"
              ></textarea>

              <button class="primary-btn" @click="goToNextStep">Next</button>
            </div>

            <div class="modal-body-wrapper" v-else-if="reviewStep === 2">
              <h4 class="step-heading">Add photos (optional)</h4>
              <p class="media-note">.jpg or .png, up to 2 MB each</p>

              <div class="photo-uploads">
                <div
                  v-for="(file, index) in reviewForm.photos"
                  :key="index"
                  class="photo-preview"
                >
                  <img :src="file" alt="Preview" />
                  <button class="remove-photo" @click="removePhoto(index)">
                    ×
                  </button>
                </div>
              </div>

              <input
                type="file"
                accept="image/*"
                @change="handlePhotoUpload"
                :disabled="reviewForm.photos.length >= 3"
              />
              <p class="limit-note">Up to 3 photos</p>

              <div class="btn-row">
                <button class="ghost-btn" @click="reviewStep = 1">Back</button>
                <button class="primary-btn" @click="goToNextStep">Next</button>
              </div>
            </div>

            <div class="modal-body-wrapper" v-else-if="reviewStep === 3">
              <h4 class="step-heading">About you</h4>
              <label class="input-label">Your name *</label>
              <input
                type="text"
                placeholder="Displayed publicly, last name censored"
                v-model="reviewForm.reviewerName"
              />

              <label class="input-label">Email *</label>
              <input
                type="email"
                placeholder="Never shown publicly"
                v-model="reviewForm.email"
              />

              <div class="btn-row">
                <button class="ghost-btn" @click="reviewStep = 2">Back</button>
                <button class="primary-btn" @click="submitReview">
                  Submit review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
const props = defineProps({
  itemId: { type: String, required: true },
  itemName: { type: String, required: true },
  itemImage: { type: String, required: false, default: "" },
});

const PAGE_SIZE = 6;

const { data: initialReviews } = await useFetch(
  () => `/api/reviews/${props.itemId}`,
  { default: () => [], server: true, lazy: false }
);

const reviews = ref(Array.isArray(initialReviews.value) ? initialReviews.value : []);
const totalReviews = ref(reviews.value.length);
const overallRating = ref(
  reviews.value.length
    ? parseFloat(
        (
          reviews.value.reduce((a, r) => a + (r.rating || 0), 0) /
          reviews.value.length
        ).toFixed(1)
      )
    : 0
);
const votedReviews = ref([]);

const activeFilter = ref("all"); // 'all' | 'verified' | 'with-photos' | 1..5
const sortBy = ref("helpful");
const pageSize = ref(PAGE_SIZE);
const visibleCount = ref(PAGE_SIZE);

const showReviewModal = ref(false);
const reviewStep = ref(1);
const reviewForm = reactive({
  rating: 0,
  title: "",
  comment: "",
  photos: [],
  reviewerName: "",
  email: "",
});
const showRequiredError = ref(false);

const ratingCounts = computed(() => {
  const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  for (const r of reviews.value) {
    if (r.rating >= 1 && r.rating <= 5) counts[r.rating]++;
  }
  return counts;
});

const percentRecommend = computed(() => {
  if (!totalReviews.value) return 0;
  const positive = reviews.value.filter((r) => r.rating >= 4).length;
  return Math.round((positive / totalReviews.value) * 100);
});

function percentForStar(star) {
  if (!totalReviews.value) return 0;
  return Math.round((ratingCounts.value[star] / totalReviews.value) * 100);
}

const reviewPhotos = computed(() => {
  return reviews.value.flatMap((r) => r.photos || []).filter(Boolean);
});

const filteredReviews = computed(() => {
  let list = reviews.value;
  if (typeof activeFilter.value === "number") {
    list = list.filter((r) => r.rating === activeFilter.value);
  } else if (activeFilter.value === "with-photos") {
    list = list.filter((r) => r.photos && r.photos.length);
  }
  // 'verified' is a no-op for now (every review is treated as verified)

  const sorted = [...list];
  switch (sortBy.value) {
    case "newest":
      sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
      break;
    case "oldest":
      sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
      break;
    case "highest":
      sorted.sort((a, b) => b.rating - a.rating);
      break;
    case "lowest":
      sorted.sort((a, b) => a.rating - b.rating);
      break;
    case "helpful":
    default:
      sorted.sort((a, b) => {
        const aUp = a.helpful?.thumbsUp || 0;
        const bUp = b.helpful?.thumbsUp || 0;
        if (bUp !== aUp) return bUp - aUp;
        return new Date(b.date) - new Date(a.date);
      });
  }
  return sorted;
});

const pagedReviews = computed(() =>
  filteredReviews.value.slice(0, visibleCount.value)
);
const visibleStart = computed(() =>
  filteredReviews.value.length === 0 ? 0 : 1
);
const visibleEnd = computed(() =>
  Math.min(visibleCount.value, filteredReviews.value.length)
);
const hasMore = computed(
  () => visibleCount.value < filteredReviews.value.length
);

function loadMore() {
  visibleCount.value += pageSize.value;
}

function toggleStarFilter(star) {
  activeFilter.value = activeFilter.value === star ? "all" : star;
}

watch([activeFilter, sortBy], () => {
  visibleCount.value = pageSize.value;
});

function initVotedReviews() {
  if (typeof window === "undefined") return;
  const stored = localStorage.getItem("helpfulVotes");
  votedReviews.value = stored ? JSON.parse(stored) : [];
}

onMounted(() => {
  initVotedReviews();
});

async function fetchReviews() {
  try {
    const data = await $fetch(`/api/reviews/${props.itemId}`);
    reviews.value = Array.isArray(data) ? data : [];
    calculateStats();
  } catch (err) {
    console.error("Failed to fetch reviews", err);
  }
}

function calculateStats() {
  totalReviews.value = reviews.value.length;
  if (!totalReviews.value) {
    overallRating.value = 0;
    return;
  }
  const sum = reviews.value.reduce((acc, r) => acc + (r.rating || 0), 0);
  overallRating.value = parseFloat((sum / totalReviews.value).toFixed(1));
}

function hasVoted(review) {
  return votedReviews.value.includes(review._id);
}

async function markHelpful(review, type) {
  try {
    if (!review.helpful) review.helpful = { thumbsUp: 0, thumbsDown: 0 };
    if (type === "up") review.helpful.thumbsUp++;
    else review.helpful.thumbsDown++;

    await $fetch(`/api/reviews/${review._id}`, {
      method: "PUT",
      body: { helpful: review.helpful },
    });

    votedReviews.value.push(review._id);
    localStorage.setItem("helpfulVotes", JSON.stringify(votedReviews.value));
  } catch (err) {
    console.error("Error marking helpful", err);
  }
}

function openReviewModal() {
  resetReviewForm();
  showReviewModal.value = true;
  reviewStep.value = 1;
}
function closeReviewModal() {
  showReviewModal.value = false;
}
function resetReviewForm() {
  reviewForm.rating = 0;
  reviewForm.title = "";
  reviewForm.comment = "";
  reviewForm.photos = [];
  reviewForm.reviewerName = "";
  reviewForm.email = "";
  showRequiredError.value = false;
}

function goToNextStep() {
  if (reviewStep.value === 1) {
    if (!reviewForm.rating || !reviewForm.title || !reviewForm.comment) {
      showRequiredError.value = true;
      return;
    }
    showRequiredError.value = false;
    reviewStep.value = 2;
  } else if (reviewStep.value === 2) {
    reviewStep.value = 3;
  }
}

function handlePhotoUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  if (file.size > 2 * 1024 * 1024) {
    alert("File is too large. Max 2 MB.");
    return;
  }
  const reader = new FileReader();
  reader.onload = () => reviewForm.photos.push(reader.result);
  reader.readAsDataURL(file);
  event.target.value = "";
}

function removePhoto(index) {
  reviewForm.photos.splice(index, 1);
}

async function submitReview() {
  if (!reviewForm.reviewerName || !reviewForm.email) {
    alert("Please fill in your name and email.");
    return;
  }
  try {
    const newReview = {
      itemId: props.itemId,
      reviewerName: reviewForm.reviewerName,
      email: reviewForm.email,
      title: reviewForm.title,
      comment: reviewForm.comment,
      rating: reviewForm.rating,
      photos: reviewForm.photos,
      helpful: { thumbsUp: 0, thumbsDown: 0 },
      date: new Date(),
    };
    await $fetch("/api/reviews", { method: "POST", body: newReview });
    showReviewModal.value = false;
    await fetchReviews();
  } catch (err) {
    console.error("Error submitting review", err);
    alert("Error submitting review");
  }
}

function formatDate(date) {
  const d = new Date(date);
  const now = new Date();
  const diff = (now - d) / 86400000;
  if (diff < 1) return "Today";
  if (diff < 2) return "Yesterday";
  if (diff < 7) return `${Math.floor(diff)} days ago`;
  if (diff < 30) return `${Math.floor(diff / 7)} weeks ago`;
  if (diff < 365)
    return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
  return d.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function censorName(name) {
  if (!name) return "";
  const parts = name.split(" ");
  return parts
    .map((p) => (p.length <= 1 ? p : p[0] + p.slice(1).replace(/[^.]/g, "*")))
    .join(" ");
}

function initialsOf(name) {
  if (!name) return "?";
  return name
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() || "")
    .join("");
}
</script>

<style scoped>
.reviews-section {
  margin: 2.5rem auto;
  max-width: 1280px;
  padding: 0 2rem;
  color: #1f2937;
  font-family: inherit;
}

/* ── Summary ─────────────────────────────────────────────────────── */
.summary {
  display: grid;
  grid-template-columns: minmax(280px, 1fr) auto;
  gap: 2.5rem;
  align-items: end;
  padding-bottom: 2rem;
  margin-bottom: 1.75rem;
  border-bottom: 1px solid #e5e7eb;
}
.summary-left {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 18rem;
}
.rating-line {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}
.rating-value {
  font-size: 3rem;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #111;
}
.rating-stars {
  width: 7rem;
}
.review-count-line {
  font-size: 0.95rem;
  color: #6b7280;
}
.review-count-line strong {
  color: #111;
  font-weight: 600;
}
.distribution {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 0.4rem;
}
.dist-row {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: transparent;
  border: none;
  padding: 0.3rem 0.45rem;
  border-radius: 6px;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: #374151;
  transition: background 0.15s;
}
.dist-row:hover {
  background: #f9fafb;
}
.dist-row.active {
  background: #fff4ee;
}
.dist-label {
  width: 3.5rem;
  font-size: 0.9rem;
  color: #4b5563;
}
.dist-bar {
  flex: 1;
  height: 7px;
  background: #f3f4f6;
  border-radius: 999px;
  overflow: hidden;
}
.dist-fill {
  height: 100%;
  background: #ea5520;
  border-radius: 999px;
  transition: width 0.4s ease;
}
.dist-count {
  width: 3rem;
  text-align: right;
  font-size: 0.9rem;
  color: #6b7280;
  font-variant-numeric: tabular-nums;
}
.summary-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.65rem;
}
.write-review-btn {
  background: #111;
  color: #fff;
  border: none;
  padding: 0.8rem 1.4rem;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  border-radius: 4px;
  letter-spacing: 0.01em;
  transition: background 0.15s, transform 0.15s;
}
.write-review-btn:hover {
  background: #ea5520;
}
.write-review-btn:active {
  transform: translateY(1px);
}
.summary-hint {
  font-size: 0.85rem;
  color: #6b7280;
  margin: 0;
}

/* ── Photo gallery ───────────────────────────────────────────────── */
.photo-gallery {
  margin-bottom: 1.5rem;
}
.gallery-title {
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #6b7280;
  margin: 0 0 0.6rem;
}
.gallery-row {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
}
.gallery-thumb {
  width: 84px;
  height: 84px;
  object-fit: cover;
  border-radius: 6px;
  flex-shrink: 0;
}

/* ── Toolbar ─────────────────────────────────────────────────────── */
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}
.filter-chips {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.chip {
  background: #fff;
  border: 1px solid #e5e7eb;
  padding: 0.45rem 0.85rem;
  border-radius: 999px;
  font-size: 0.85rem;
  color: #374151;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.15s;
}
.chip:hover {
  border-color: #d1d5db;
  background: #f9fafb;
}
.chip.active {
  background: #111;
  color: #fff;
  border-color: #111;
}
.chip-count {
  background: rgba(255, 255, 255, 0.18);
  padding: 0.05rem 0.45rem;
  border-radius: 999px;
  font-size: 0.75rem;
}
.chip:not(.active) .chip-count {
  background: #f3f4f6;
  color: #6b7280;
}
.filter-pill {
  background: #fff4ee;
  border-color: #ea5520;
  color: #ea5520;
}
.chip-x {
  font-size: 1rem;
  line-height: 1;
  opacity: 0.7;
}
.sort-wrap {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.sort-label {
  font-size: 0.85rem;
  color: #6b7280;
}
.sort-select {
  border: 1px solid #e5e7eb;
  background: #fff;
  border-radius: 4px;
  padding: 0.4rem 0.6rem;
  font-size: 0.9rem;
  color: #111;
  cursor: pointer;
}
.sort-select:hover {
  border-color: #d1d5db;
}

.showing-line {
  font-size: 0.85rem;
  color: #6b7280;
  margin-bottom: 1rem;
}
.showing-line strong {
  color: #111;
  font-weight: 600;
}

/* ── Empty state ─────────────────────────────────────────────────── */
.empty-state {
  text-align: center;
  padding: 3.5rem 1rem;
  background: #fafafa;
  border-radius: 8px;
}
.empty-state.subtle {
  padding: 2rem 1rem;
}
.empty-illustration {
  font-size: 2.5rem;
  color: #e5e7eb;
  margin-bottom: 0.5rem;
}
.empty-state h3 {
  margin: 0 0 0.4rem;
  font-size: 1.15rem;
  font-weight: 600;
  color: #111;
}
.empty-state p {
  color: #6b7280;
  margin: 0 0 1.25rem;
  font-size: 0.95rem;
}
.link-btn {
  background: none;
  border: none;
  color: #ea5520;
  font: inherit;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* ── Reviews list ────────────────────────────────────────────────── */
.reviews-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.review-card {
  padding: 1.25rem 1.4rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fff;
  transition: border-color 0.15s;
}
.review-card:hover {
  border-color: #d1d5db;
}
.review-head {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  margin-bottom: 0.75rem;
}
.avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #fef0e8;
  color: #ea5520;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  flex-shrink: 0;
}
.head-meta {
  flex: 1;
  min-width: 0;
}
.head-line-1 {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
}
.reviewer-name {
  font-weight: 600;
  color: #111;
  font-size: 0.95rem;
}
.verified {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  color: #16a34a;
  font-size: 0.78rem;
  font-weight: 500;
}
.head-line-2 {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-top: 0.2rem;
}
.card-stars {
  letter-spacing: 1px;
  font-size: 0.95rem;
}
.card-stars .star {
  color: #e5e7eb;
}
.card-stars .star.filled {
  color: #ea5520;
}
.review-date {
  font-size: 0.8rem;
  color: #9ca3af;
}
.review-title {
  font-size: 1rem;
  font-weight: 600;
  color: #111;
  margin: 0 0 0.3rem;
}
.review-comment {
  font-size: 0.95rem;
  color: #374151;
  line-height: 1.55;
  margin: 0;
}
.review-photos {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.75rem;
  flex-wrap: wrap;
}
.review-photo {
  width: 72px;
  height: 72px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
}
.helpful-bar {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 1rem;
  padding-top: 0.85rem;
  border-top: 1px solid #f3f4f6;
}
.helpful-prompt {
  font-size: 0.85rem;
  color: #6b7280;
  margin-right: 0.15rem;
}
.vote-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: #fff;
  border: 1px solid #e5e7eb;
  padding: 0.35rem 0.7rem;
  font-size: 0.85rem;
  color: #374151;
  cursor: pointer;
  border-radius: 999px;
  transition: all 0.15s;
}
.vote-btn:hover:not(:disabled) {
  border-color: #d1d5db;
  background: #f9fafb;
}
.vote-btn:disabled,
.vote-btn.voted {
  opacity: 0.55;
  cursor: not-allowed;
}

.load-more-wrap {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}
.load-more-btn {
  background: #fff;
  color: #111;
  border: 1px solid #111;
  padding: 0.8rem 2.2rem;
  font-size: 0.92rem;
  font-weight: 500;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.15s;
}
.load-more-btn:hover {
  background: #111;
  color: #fff;
}

/* ── Modal ────────────────────────────────────────────────────────── */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
.modal {
  background: #fff;
  width: 600px;
  max-width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);
}
.modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}
.item-info {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}
.modal-item-image {
  width: 56px;
  height: 56px;
  object-fit: cover;
  border-radius: 6px;
}
.modal-title {
  margin: 0 0 0.4rem;
  font-size: 1.05rem;
  font-weight: 600;
  color: #111;
}
.step-pills {
  display: flex;
  gap: 0.35rem;
}
.step-pill {
  width: 1.5rem;
  height: 4px;
  border-radius: 4px;
  background: #e5e7eb;
}
.step-pill.on {
  background: #ea5520;
}
.close-button {
  background: none;
  border: none;
  font-size: 1.65rem;
  line-height: 1;
  cursor: pointer;
  color: #9ca3af;
  padding: 0;
}
.close-button:hover {
  color: #111;
}
.modal-body-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}
.step-heading {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: #111;
}
.media-note,
.limit-note {
  font-size: 0.85rem;
  color: #6b7280;
  margin: -0.25rem 0 0;
}
.error-message {
  background: #fee2e2;
  color: #b91c1c;
  padding: 0.6rem 0.85rem;
  border-radius: 6px;
  font-size: 0.9rem;
}
.star-rating-input {
  display: flex;
  gap: 0.25rem;
  font-size: 2rem;
}
.star-rating-input .star {
  cursor: pointer;
  color: #e5e7eb;
  transition: color 0.1s;
}
.star-rating-input .star:hover,
.star-rating-input .star.filled {
  color: #ea5520;
}
.input-label {
  font-weight: 500;
  font-size: 0.9rem;
  color: #374151;
}
.modal input[type="text"],
.modal input[type="email"],
.modal textarea {
  width: 100%;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 0.6rem 0.75rem;
  font: inherit;
  font-size: 0.95rem;
  color: #111;
  background: #fff;
}
.modal input:focus,
.modal textarea:focus {
  outline: none;
  border-color: #ea5520;
}
.modal textarea {
  resize: vertical;
  min-height: 6rem;
}
.photo-uploads {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.photo-preview {
  position: relative;
}
.photo-preview img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
}
.remove-photo {
  position: absolute;
  top: -6px;
  right: -6px;
  background: #111;
  border: none;
  color: #fff;
  font-size: 0.85rem;
  width: 20px;
  height: 20px;
  cursor: pointer;
  border-radius: 50%;
  line-height: 1;
}
.btn-row {
  display: flex;
  justify-content: flex-end;
  gap: 0.6rem;
  margin-top: 0.6rem;
}
.primary-btn,
.ghost-btn {
  padding: 0.7rem 1.4rem;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: all 0.15s;
}
.primary-btn {
  background: #111;
  color: #fff;
  align-self: flex-end;
}
.primary-btn:hover {
  background: #ea5520;
}
.ghost-btn {
  background: #fff;
  color: #111;
  border-color: #e5e7eb;
}
.ghost-btn:hover {
  border-color: #d1d5db;
  background: #f9fafb;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .summary {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    align-items: stretch;
  }
  .summary-right {
    align-items: stretch;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .write-review-btn {
    flex-shrink: 0;
  }
  .summary-hint {
    text-align: right;
  }
}

@media (max-width: 480px) {
  .reviews-section {
    padding: 0 1rem;
  }
  .summary-right {
    flex-direction: column;
    align-items: stretch;
  }
  .write-review-btn {
    width: 100%;
  }
  .summary-hint {
    text-align: center;
  }
  .toolbar {
    flex-direction: column;
    align-items: stretch;
  }
  .sort-wrap {
    justify-content: flex-end;
  }
  .review-card {
    padding: 1rem;
  }
  .helpful-bar {
    flex-wrap: wrap;
  }
}
</style>
