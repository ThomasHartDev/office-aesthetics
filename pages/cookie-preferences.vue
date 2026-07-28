<template>
  <main style="max-width:560px;margin:0 auto;padding:3rem 1.25rem;line-height:1.6">
    <h1>Cookie preferences</h1>
    <p>Essential cookies keep the shop working. Optional cookies power email/ads tools (Klaviyo, Meta).</p>
    <p>Status: <strong>{{ status }}</strong></p>
    <button type="button" @click="accept">Accept optional cookies</button>
    <button type="button" @click="reject" style="margin-left:0.5rem">Reject optional</button>
  </main>
</template>
<script setup lang="ts">
const status = ref('loading')
onMounted(() => {
  try {
    status.value = localStorage.getItem('optional_cookies') === '1' ? 'optional accepted' : 'optional rejected / unset'
  } catch {
    status.value = 'unavailable'
  }
})
function accept() {
  localStorage.setItem('optional_cookies', '1')
  status.value = 'optional accepted'
  location.reload()
}
function reject() {
  localStorage.setItem('optional_cookies', '0')
  status.value = 'optional rejected / unset'
  location.reload()
}
</script>
