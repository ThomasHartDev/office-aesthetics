<template>
  <div class="dashboard">
    <!-- Page header -->
    <div class="page-header">
      <h1 class="page-title">Welcome back, {{ firstName }}</h1>
      <p class="page-subtitle">Here's what's happening with your account.</p>
    </div>

    <!-- Stats row -->
    <div class="stats-row">
      <div class="stat-card">
        <div class="stat-icon orders-icon">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="2" y="2" width="14" height="14" rx="3" stroke="#3f654c" stroke-width="1.5"/>
            <path d="M5.5 7h7M5.5 10h5" stroke="#3f654c" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="stat-body">
          <p class="stat-label">Total Orders</p>
          <p class="stat-value">{{ orders?.length || 0 }}</p>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon wishlist-icon">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 15S2.5 11 2.5 6.5A4 4 0 0 1 9 4a4 4 0 0 1 6.5 2.5C15.5 11 9 15 9 15z" stroke="#3f654c" stroke-width="1.5" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="stat-body">
          <p class="stat-label">Wishlist Items</p>
          <p class="stat-value">{{ userStore.user.wishlist?.length || 0 }}</p>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon viewed-icon">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M1.5 9S4.5 3.5 9 3.5 16.5 9 16.5 9 13.5 14.5 9 14.5 1.5 9 1.5 9z" stroke="#3f654c" stroke-width="1.5"/>
            <circle cx="9" cy="9" r="2" stroke="#3f654c" stroke-width="1.5"/>
          </svg>
        </div>
        <div class="stat-body">
          <p class="stat-label">Recently Viewed</p>
          <p class="stat-value">{{ userStore.user.recentlyViewedItems?.length || 0 }}</p>
        </div>
      </div>
    </div>

    <!-- Recent orders -->
    <div class="section-card">
      <div class="card-header">
        <h2 class="card-title">Recent Orders</h2>
        <span class="card-count" v-if="recentOrders.length">{{ recentOrders.length }} order{{ recentOrders.length !== 1 ? 's' : '' }}</span>
      </div>
      <div v-if="recentOrders.length" class="order-list">
        <div v-for="order in recentOrders" :key="order._id" class="order-row">
          <div class="order-images">
            <img
              v-for="(item, i) in order.itemizedList.slice(0, 3)"
              :key="i"
              :src="`/ItemPics/${item.image}`"
              :alt="item.name"
              class="order-thumb"
            />
            <span v-if="order.itemizedList.length > 3" class="order-more">+{{ order.itemizedList.length - 3 }}</span>
          </div>
          <div class="order-meta">
            <p class="order-number">#{{ order.invoiceNumber }}</p>
            <p class="order-date">{{ formatDate(order.createdAt) }}</p>
          </div>
          <span class="order-badge" :class="statusClass(order.status)">{{ order.status }}</span>
          <p class="order-total">${{ order.totalCost?.toFixed(2) }}</p>
          <NuxtLink :to="`/order/${order._id}`" class="order-link">View</NuxtLink>
        </div>
      </div>
      <div v-else class="empty-state">
        <p>No orders yet. <NuxtLink to="/" class="empty-link">Start shopping</NuxtLink></p>
      </div>
    </div>

    <!-- Wishlist preview -->
    <div class="section-card" v-if="userStore.user.wishlist?.length">
      <div class="card-header">
        <h2 class="card-title">Wishlist</h2>
        <span class="card-count">{{ userStore.user.wishlist.length }} item{{ userStore.user.wishlist.length !== 1 ? 's' : '' }}</span>
      </div>
      <div class="wishlist-preview">
        <div
          v-for="(item, i) in userStore.user.wishlist.slice(0, 6)"
          :key="i"
          class="wishlist-thumb"
          @click="$router.push(`/item/${item.item}`)"
        >
          <img :src="`/ItemPics/${item.image}`" :alt="item.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const userStore = useUserStore();
const router = useRouter();
const { data: orders } = useFetch(`/api/orders/${userStore.user._id}`);

const firstName = computed(() => {
  const name = userStore.user?.name || "";
  return name.split(" ")[0] || "there";
});

const recentOrders = computed(() => (orders.value || []).slice(0, 5));

function formatDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function statusClass(status) {
  const s = (status || "").toLowerCase();
  if (s.includes("deliver") || s.includes("complet")) return "badge-green";
  if (s.includes("ship") || s.includes("transit")) return "badge-blue";
  if (s.includes("cancel") || s.includes("refund")) return "badge-red";
  return "badge-gray";
}
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Page header */
.page-header {
  margin-bottom: 0.25rem;
}
.page-title {
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 0.25rem;
}
.page-subtitle {
  font-size: 0.9375rem;
  color: #6b7280;
  margin: 0;
}

/* Stats */
.stats-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.stat-card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}
.stat-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #f0f5f2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.stat-label {
  font-size: 0.8125rem;
  color: #9ca3af;
  margin: 0 0 0.125rem;
  font-weight: 500;
}
.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin: 0;
  font-family: "Poppins", sans-serif;
}

/* Cards */
.section-card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
}
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #f3f4f6;
}
.card-title {
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
}
.card-count {
  font-size: 0.8125rem;
  color: #9ca3af;
  background: #f3f4f6;
  padding: 0.25rem 0.625rem;
  border-radius: 99px;
}

/* Orders */
.order-list {
  display: flex;
  flex-direction: column;
}
.order-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.875rem 1.5rem;
  border-bottom: 1px solid #f9fafb;
  transition: background 0.1s;
}
.order-row:last-child {
  border-bottom: none;
}
.order-row:hover {
  background: #fafafa;
}
.order-images {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.order-thumb {
  width: 36px;
  height: 36px;
  border-radius: 6px;
  object-fit: cover;
  border: 1px solid #e5e7eb;
}
.order-more {
  font-size: 0.75rem;
  color: #9ca3af;
  background: #f3f4f6;
  width: 36px;
  height: 36px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}
.order-meta {
  flex: 1;
  min-width: 0;
}
.order-number {
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  margin: 0;
}
.order-date {
  font-size: 0.75rem;
  color: #9ca3af;
  margin: 0;
}
.order-badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.2rem 0.625rem;
  border-radius: 99px;
  white-space: nowrap;
}
.badge-green { background: #dcfce7; color: #166534; }
.badge-blue  { background: #dbeafe; color: #1e40af; }
.badge-red   { background: #fee2e2; color: #991b1b; }
.badge-gray  { background: #f3f4f6; color: #374151; }

.order-total {
  font-size: 0.875rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
  white-space: nowrap;
}
.order-link {
  font-size: 0.8125rem;
  color: #3f654c;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
}
.order-link:hover {
  text-decoration: underline;
}

/* Wishlist preview */
.wishlist-preview {
  display: flex;
  gap: 0.75rem;
  padding: 1.25rem 1.5rem;
  flex-wrap: wrap;
}
.wishlist-thumb {
  width: 72px;
  height: 72px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
}
.wishlist-thumb:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.wishlist-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Empty */
.empty-state {
  padding: 2rem 1.5rem;
  color: #9ca3af;
  font-size: 0.9375rem;
}
.empty-link {
  color: #3f654c;
  font-weight: 600;
  text-decoration: none;
}
.empty-link:hover { text-decoration: underline; }

@media (max-width: 640px) {
  .stats-row {
    grid-template-columns: 1fr;
  }
  .order-row {
    padding: 0.75rem 1rem;
    flex-wrap: wrap;
    gap: 0.625rem;
  }
  .card-header {
    padding: 1rem;
  }
}
</style>
