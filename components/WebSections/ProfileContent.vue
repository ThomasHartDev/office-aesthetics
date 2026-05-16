<template>
  <div class="profile-layout">
    <!-- Mobile header bar -->
    <div class="mobile-topbar">
      <button class="menu-btn" @click="$emit('toggle-sidebar')" aria-label="Open menu">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3 5h14M3 10h14M3 15h14" stroke="#374151" stroke-width="1.75" stroke-linecap="round"/>
        </svg>
      </button>
      <span class="mobile-section-label">{{ sectionLabel }}</span>
    </div>

    <!-- Mobile overlay -->
    <div v-if="isSidebarVisible" class="mobile-overlay" @click="$emit('close-sidebar')" />

    <!-- Main content -->
    <main class="content">
      <transition name="fade" mode="out-in">
        <ProfileDashboard v-if="currentSection === 'dashboard'" />
        <ProfilePreferences v-else-if="currentSection === 'profile'" />
        <ProfileOrders v-else-if="currentSection === 'orders'" :orders="orders" />
        <ProfileWishlist v-else-if="currentSection === 'wishlist'" @close-sidebar="$emit('close-sidebar')" />
        <ProfileTicketSupport v-else-if="currentSection === 'support'" />
        <ProfileAdminTickets
          v-else-if="currentSection === 'tickets' && userStore.user.role === 'admin'"
          @close-sidebar="$emit('close-sidebar')"
        />
        <ProfileAdminEditOrders
          v-else-if="currentSection === 'edit-orders' && userStore.user.role === 'admin'"
          @close-sidebar="$emit('close-sidebar')"
        />
        <ProfileAdminEditUsers
          v-else-if="currentSection === 'edit-users' && userStore.user.role === 'admin'"
          @close-sidebar="$emit('close-sidebar')"
        />
        <ProfileAdminEditBlogs
          v-else-if="currentSection === 'edit-blogs' && userStore.user.role === 'admin'"
        />
        <!-- Payment placeholder -->
        <div v-else-if="currentSection === 'payment'" class="placeholder-section">
          <h2>Payment &amp; Shipping</h2>
          <p>Manage your saved payment methods and shipping addresses.</p>
        </div>
      </transition>
    </main>
  </div>
</template>

<script setup>
const userStore = useUserStore();

const props = defineProps({
  isSidebarVisible: Boolean,
  currentSection: String,
});

const { data: orders } = useFetch(`/api/orders/${userStore.user._id}`);

const emit = defineEmits(["toggle-sidebar", "change-section", "close-sidebar"]);

const sectionLabels = {
  dashboard: "Dashboard",
  profile: "Profile",
  orders: "Orders",
  wishlist: "Wishlist",
  payment: "Payment & Shipping",
  support: "Support",
  admin: "Admin",
  tickets: "Tickets",
  "edit-orders": "Edit Orders",
  "edit-users": "Edit Users",
  "edit-blogs": "Edit Blogs",
};

const sectionLabel = computed(() => sectionLabels[props.currentSection] || "Profile");
</script>

<style scoped>
.profile-layout {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  background: #f8f9fa;
  min-height: 100vh;
  font-family: "Source Sans Pro", sans-serif;
}

/* Mobile top bar */
.mobile-topbar {
  display: none;
  align-items: center;
  gap: 1rem;
  padding: 0.875rem 1.25rem;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 100;
}
.menu-btn {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.25rem;
}
.mobile-section-label {
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  font-family: "Poppins", sans-serif;
}
.mobile-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  z-index: 190;
}

/* Content */
.content {
  flex: 1;
  padding: 2rem;
  max-width: 960px;
  width: 100%;
}

.placeholder-section {
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid #e5e7eb;
}
.placeholder-section h2 {
  font-family: "Poppins", sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin: 0 0 0.5rem;
}
.placeholder-section p {
  color: #6b7280;
  margin: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .mobile-topbar {
    display: flex;
  }
  .content {
    padding: 1.25rem;
  }
}
</style>
