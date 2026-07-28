// plugins/posthog.client.ts
//
// Canonical PostHog provider for the Thomas network, Nuxt 3 port.
// Single multi-host PostHog project — filter by $host in the dashboard.
// Self-exclude: visit /exclude once per browser (localStorage ph_exclude=thomas).

import posthog from "posthog-js";

function isExcluded(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem("ph_exclude") === "thomas";
  } catch {
    return false;
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const KEY = config.public.NEXT_PUBLIC_POSTHOG_KEY as string | undefined;
  const HOST =
    (config.public.NEXT_PUBLIC_POSTHOG_HOST as string | undefined) ??
    "https://us.i.posthog.com";

  if (!KEY) return;

  posthog.init(KEY, {
    api_host: HOST,
    capture_pageview: false,
    capture_pageleave: true,
    persistence: "localStorage+cookie",
  });

  if (isExcluded()) {
    posthog.opt_out_capturing();
  }

  const router = useRouter();
  router.afterEach((to) => {
    if (!posthog.__loaded) return;
    if (isExcluded()) return;
    const url = window.origin + to.fullPath;
    posthog.capture("$pageview", { $current_url: url });
  });

  nuxtApp.provide("posthog", posthog);
});
