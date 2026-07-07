<template>
  <!-- Express PayPal is disabled. All checkout runs through the on-site card
       form so no external payment processor is invoked. -->
</template>

<script setup>
defineProps({ totalAmount: { type: Number, default: 0 } });
defineEmits(["orderCompleted"]);
</script>
