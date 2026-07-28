<template>
  <main class="exclude-root">
    <h1>Analytics opt-out</h1>
    <p>
      {{
        ready
          ? "This browser is excluded from analytics. Your pageviews will not be tracked on any of Thomas's sites for as long as this browser's localStorage holds the flag."
          : "Setting flag…"
      }}
    </p>
    <p class="hint">Repeat this step once per device + browser.</p>
  </main>
</template>

<script setup lang="ts">
import posthog from "posthog-js";

const ready = ref(false);

onMounted(() => {
  try {
    window.localStorage.setItem("ph_exclude", "thomas");
  } catch {
    // localStorage blocked — session opt-out still applies below.
  }
  if (posthog && typeof posthog.opt_out_capturing === "function") {
    try {
      posthog.opt_out_capturing();
    } catch {
      // Flag persists for next load if provider is not ready yet.
    }
  }
  ready.value = true;
});

useSeoMeta({
  title: "Analytics opt-out",
  robots: "noindex",
});
</script>

<style scoped>
.exclude-root {
  padding: 4rem 2rem;
  max-width: 560px;
  margin: 0 auto;
  min-height: 60vh;
}
.exclude-root h1 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.exclude-root p {
  line-height: 1.6;
}
.exclude-root .hint {
  margin-top: 1rem;
  opacity: 0.75;
}
</style>
