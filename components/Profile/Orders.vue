<template>
  <div class="orders">
    <div class="page-header">
      <h1 class="page-title">Orders</h1>
      <p class="page-subtitle">{{ orders?.length || 0 }} order{{ orders?.length !== 1 ? 's' : '' }} total</p>
    </div>

    <div v-if="orders?.length" class="order-list">
      <div v-for="(order, index) in orders" :key="order.invoiceNumber" class="order-card">
        <div class="order-card-header">
          <div class="order-header-left">
            <span class="order-number">Order #{{ order.invoiceNumber }}</span>
            <span class="order-date">{{ formatOrderDates(order) }}</span>
          </div>
          <span class="status-badge" :class="statusClass(order.status)">{{ order.status }}</span>
        </div>

        <div class="order-items">
          <div
            v-for="(item, itemIndex) in order.itemizedList.slice(0, maxVisibleCounts[index] - 1)"
            :key="itemIndex"
            class="order-item"
          >
            <img :src="`/ItemPics/${item.image}`" :alt="`Item ${itemIndex + 1}`" />
          </div>
          <div v-if="order.itemizedList.length > maxVisibleCounts[index] - 1" class="order-item more">
            <img src="/BlogPics/BlogPic1.webp" alt="More items" />
            <span class="more-count">+{{ order.itemizedList.length - (maxVisibleCounts[index] - 1) }}</span>
          </div>
        </div>

        <div class="order-card-footer">
          <p class="order-total"><strong>${{ order.totalCost.toFixed(2) }}</strong> total</p>
          <div class="order-actions">
            <button class="btn-secondary">Track Parcel</button>
            <NuxtLink :to="`/order/${order._id}`" class="btn-primary">View Order</NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="empty-state">
      <div class="empty-icon">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="4" stroke="#d1d5db" stroke-width="2"/>
          <path d="M10 12h12M10 17h8" stroke="#d1d5db" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <p class="empty-title">No orders yet</p>
      <p class="empty-sub">When you place an order, it will appear here.</p>
      <NuxtLink to="/" class="btn-primary">Start shopping</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ orders: { type: Array, required: true } });

const containerWidths = ref([]);
const maxVisibleCounts = ref([]);

const updateMaxVisibleCounts = () => {
  containerWidths.value.forEach((width, index) => {
    maxVisibleCounts.value[index] = Math.max(Math.floor(width / 80), 2);
  });
};

const formatOrderDates = (order) => {
  if (order.status === "Delivered") return `Delivered ${new Date(order.deliveryDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`;
  if (order.status === "Shipped") return `Shipped ${new Date(order.shippedDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}`;
  if (order.orderDate) return `Placed ${new Date(order.orderDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`;
  return order.status;
};

function statusClass(status) {
  const s = (status || "").toLowerCase();
  if (s.includes("deliver") || s.includes("complet")) return "badge-green";
  if (s.includes("ship") || s.includes("transit")) return "badge-blue";
  if (s.includes("cancel") || s.includes("refund")) return "badge-red";
  return "badge-gray";
}

onMounted(() => {
  containerWidths.value = Array(props.orders?.length).fill(0);
  maxVisibleCounts.value = Array(props.orders?.length).fill(3);
  const resizeListener = () => {
    const containers = document.querySelectorAll(".order-items");
    containerWidths.value = Array.from(containers).map(c => c.offsetWidth);
    updateMaxVisibleCounts();
  };
  window.addEventListener("resize", resizeListener);
  resizeListener();
  watch(containerWidths, updateMaxVisibleCounts);
});
</script>

<style scoped>
.orders {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-family: "Source Sans Pro", sans-serif;
}
.page-header { margin-bottom: 0.25rem; }
.page-title {
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 0.25rem;
}
.page-subtitle { font-size: 0.9375rem; color: #6b7280; margin: 0; }

.order-list { display: flex; flex-direction: column; gap: 1rem; }

.order-card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
}
.order-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid #f3f4f6;
}
.order-header-left {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}
.order-number {
  font-weight: 600;
  color: #111827;
  font-size: 0.9375rem;
}
.order-date { font-size: 0.8125rem; color: #9ca3af; }

.status-badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.2rem 0.625rem;
  border-radius: 99px;
}
.badge-green { background: #dcfce7; color: #166534; }
.badge-blue  { background: #dbeafe; color: #1e40af; }
.badge-red   { background: #fee2e2; color: #991b1b; }
.badge-gray  { background: #f3f4f6; color: #374151; }

.order-items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1rem 1.25rem;
}
.order-item {
  width: 64px;
  height: 64px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  position: relative;
}
.order-item img { width: 100%; height: 100%; object-fit: cover; }
.order-item.more { display: flex; align-items: center; justify-content: center; background: #f9fafb; }
.more-count {
  position: absolute;
  font-size: 0.75rem;
  font-weight: 700;
  color: #374151;
}

.order-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem 1.25rem;
  border-top: 1px solid #f3f4f6;
  background: #fafafa;
}
.order-total { font-size: 0.9375rem; color: #374151; margin: 0; }
.order-actions { display: flex; gap: 0.625rem; }

.btn-primary {
  background: #3f654c;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 7px;
  font-size: 0.875rem;
  font-weight: 600;
  font-family: "Source Sans Pro", sans-serif;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: background 0.15s;
}
.btn-primary:hover { background: #2e5039; }
.btn-secondary {
  background: #fff;
  color: #374151;
  border: 1px solid #e5e7eb;
  padding: 0.5rem 1rem;
  border-radius: 7px;
  font-size: 0.875rem;
  font-weight: 600;
  font-family: "Source Sans Pro", sans-serif;
  cursor: pointer;
  transition: background 0.15s;
}
.btn-secondary:hover { background: #f9fafb; }

/* Empty state */
.empty-state {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
}
.empty-icon { margin-bottom: 0.5rem; }
.empty-title { font-weight: 600; color: #374151; font-size: 1rem; margin: 0; }
.empty-sub { color: #9ca3af; font-size: 0.875rem; margin: 0; }

@media (max-width: 600px) {
  .order-card-footer { flex-direction: column; align-items: flex-start; gap: 0.75rem; }
  .order-actions { width: 100%; }
  .btn-primary, .btn-secondary { flex: 1; justify-content: center; }
}
</style>
