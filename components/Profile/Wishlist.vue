<template>
  <div class="wishlist">
    <div class="page-header">
      <h1 class="page-title">Wishlist</h1>
      <p class="page-subtitle">{{ items.length }} item{{ items.length !== 1 ? 's' : '' }} saved</p>
    </div>

    <div v-if="items.length > 0" class="wishlist-grid">
      <div v-for="(item, index) in items" :key="index" class="wishlist-card">
        <div class="card-image" @click="goToItem(item.item)">
          <img :src="`/ItemPics/${item.image}`" :alt="item.name" />
          <div class="card-overlay">
            <span class="overlay-label">View item</span>
          </div>
        </div>
        <div class="card-body">
          <p class="card-name">{{ item.name }}</p>
          <div class="card-actions">
            <button class="btn-view" @click="goToItem(item.item)">View</button>
            <button class="btn-remove" @click.stop="deleteItem(item.item)" aria-label="Remove from wishlist">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="empty-state">
      <div class="empty-icon">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 27S3 19.667 3 11.5A6.5 6.5 0 0 1 16 7a6.5 6.5 0 0 1 13 4.5C29 19.667 16 27 16 27z" stroke="#d1d5db" stroke-width="2" stroke-linejoin="round"/>
        </svg>
      </div>
      <p class="empty-title">Nothing saved yet</p>
      <p class="empty-sub">Items you heart will show up here.</p>
      <NuxtLink to="/" class="btn-primary">Browse products</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const userStore = useUserStore();
const router = useRouter();

const items = computed(() => userStore.user.wishlist || []);

const goToItem = (id) => router.push(`/item/${id}`);

const deleteItem = async (id) => {
  userStore.user.wishlist = userStore.user.wishlist.filter(item => item.item !== id);
  try {
    const response = await $fetch(`/api/users/${userStore.user._id}`, {
      method: "PUT",
      body: userStore.user,
    });
    userStore.setUser(response);
  } catch {}
};
</script>

<style scoped>
.wishlist {
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

.wishlist-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1rem;
}

.wishlist-card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  transition: box-shadow 0.15s;
}
.wishlist-card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}

.card-image {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  cursor: pointer;
}
.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s ease;
}
.wishlist-card:hover .card-image img {
  transform: scale(1.04);
}
.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.15s;
}
.card-image:hover .card-overlay {
  opacity: 1;
}
.overlay-label {
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  font-family: "Source Sans Pro", sans-serif;
}

.card-body {
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}
.card-name {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #374151;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
}
.card-actions {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  flex-shrink: 0;
}
.btn-view {
  font-size: 0.75rem;
  font-weight: 600;
  font-family: "Source Sans Pro", sans-serif;
  color: #3f654c;
  background: #f0f5f2;
  border: none;
  padding: 0.3rem 0.625rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.15s;
}
.btn-view:hover { background: #e1ede6; }
.btn-remove {
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  cursor: pointer;
  color: #9ca3af;
  transition: all 0.15s;
}
.btn-remove:hover {
  background: #fee2e2;
  border-color: #fca5a5;
  color: #dc2626;
}

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

.btn-primary {
  margin-top: 0.5rem;
  background: #3f654c;
  color: #fff;
  border: none;
  padding: 0.5rem 1.25rem;
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

@media (max-width: 600px) {
  .wishlist-grid {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
}
</style>
