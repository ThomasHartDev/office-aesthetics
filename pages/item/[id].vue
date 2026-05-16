<template>
  <div class="wrapper">
    <div v-if="!item" class="not-found">
      <h1>Product not found</h1>
      <NuxtLink to="/">Back to shop</NuxtLink>
    </div>
    <!-- Top Section: Image, Basic Info, Cart -->
    <EcommerceProductPageTopSectionOld v-else :item="item" />

    <!-- Info Graphic Section with Background Image and Dark Overlay -->
    <div v-if="item" class="info-graphic">
      <div class="info-text">
        <h2>@aestheticas</h2>
        <h3>A taste of luxury</h3>
      </div>
    </div>

    <div v-if="item" class="review-section">
      <ReviewSection
        :itemId="item._id"
        :itemName="item.name"
        :itemImage="item.image"
      />
    </div>

    <!-- FAQ Section -->
    <!-- <section class="FAQ">
      <WebSectionsFAQ />
    </section> -->
  </div>
</template>

<script setup>
const { data: item, error: itemError } = await useFetch(
  `/api/items/${useRoute().params.id}`
);

// Simplified SEO meta without variants
useSeoMeta({
  title: item.value?.metaTitle || "",
  description: item.value?.metaDescription || item.value?.preview || "",
  image: item.value?.image || "",
});

// Structured data for the product, no variant logic
const structuredData = computed(() => ({
  "@context": "https://schema.org/",
  "@type": "Product",
  name: item.value?.name || "",
  description: item.value?.description || item.value?.preview || "",
  image: item.value?.image || "",
  sku: item.value?.sku || null,
  brand: { "@type": "Brand", name: "National Auto Hub" },
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: item.value?.price || 0,
    priceValidUntil: "2024-12-31",
    itemCondition: "https://schema.org/NewCondition",
    availability:
      item.value?.stock > 0
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
    seller: { "@type": "Organization", name: "National Auto Hub" },
  },
}));

useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify(structuredData.value),
    },
  ],
});

const emit = defineEmits(["hide-loading"]);
emit("hide-loading");
</script>

<style scoped>
.wrapper {
  font-family: "Roboto", sans-serif;
  background: white;
}
.not-found {
  max-width: 600px;
  margin: 6rem auto;
  text-align: center;
  font-family: "Poppins", sans-serif;
}
.not-found h1 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #111;
}
.not-found a {
  color: #3f654c;
  font-weight: 600;
}

.info-graphic {
  position: relative;
  width: 100%;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/Backgrounds/OfficePic5.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Dark overlay */
.info-graphic::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.info-text {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 1rem;
  color: white;
}

.info-text h2,
.info-text h3 {
  margin: 1rem 0;
  font-family: "Poppins", serif;
}

.info-text h2 {
  font-size: 1.2rem;
  font-weight: lighter;
}

.info-text h3 {
  font-size: 2rem;
}

.FAQ {
  background: white;
}
</style>
