<template>
  <div class="sidebar" :class="{ visible: isSidebarVisible }">
    <!-- User identity -->
    <div class="sidebar-identity">
      <div class="avatar">
        <img
          v-if="userStore.user?.profilePicture"
          :src="userStore.user.profilePicture"
          alt="Profile"
          class="avatar-img"
        />
        <span v-else class="avatar-initials">{{ initials }}</span>
      </div>
      <div class="identity-text">
        <p class="identity-name">{{ userStore.user?.name || "Account" }}</p>
        <p class="identity-email">{{ userStore.user?.email }}</p>
      </div>
    </div>

    <div class="divider" />

    <!-- Nav items -->
    <nav class="nav">
      <button
        v-for="section in computedSections"
        :key="section.name"
        class="nav-item"
        :class="{
          active: isActive(section.name, false),
          logout: section.name === 'logout',
        }"
        @click="section.name === 'logout' ? handleLogout() : toggleDropdown(section.name)"
      >
        <span class="nav-icon" v-html="section.icon" />
        <span class="nav-label">{{ section.title }}</span>
        <span v-if="section.hasDropdown" class="nav-chevron" :class="{ open: dropdowns[section.name] }">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </button>
      <!-- Sub-items -->
      <template v-for="section in computedSections" :key="section.name + '_subs'">
        <div v-if="section.hasDropdown && dropdowns[section.name]" class="sub-menu">
          <button
            v-for="sub in section.subSections"
            :key="sub.name"
            class="sub-item"
            :class="{ active: currentSection === sub.name }"
            @click="setActiveSection(sub.name)"
          >
            {{ sub.title }}
          </button>
        </div>
      </template>
    </nav>
  </div>
</template>

<script setup>
const router = useRouter();
const dropdowns = ref({});
const userStore = useUserStore();

const props = defineProps({
  isSidebarVisible: Boolean,
  currentSection: String,
});

const emit = defineEmits(["toggle-sidebar", "change-section"]);

const initials = computed(() => {
  const name = userStore.user?.name || "";
  return name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase() || "U";
});

const iconDashboard = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="1" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="9" y="1" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="1" y="9" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="9" y="9" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5"/></svg>`;
const iconProfile = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5.5" r="2.5" stroke="currentColor" stroke-width="1.5"/><path d="M2.5 13c0-2.485 2.462-4.5 5.5-4.5s5.5 2.015 5.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
const iconOrders = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M5 6h6M5 9h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
const iconWishlist = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 13S2 9.333 2 5.5A3.5 3.5 0 0 1 8 3.5a3.5 3.5 0 0 1 6 2c0 3.833-6 7.5-6 7.5z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`;
const iconPayment = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="3.5" width="14" height="9" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M1 6.5h14" stroke="currentColor" stroke-width="1.5"/><rect x="3" y="9" width="3" height="1.5" rx="0.75" fill="currentColor"/></svg>`;
const iconSupport = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 5.5C3 3.015 5.239 1 8 1s5 2.015 5 4.5c0 1.8-1.05 3.36-2.625 4.2L10 12H6l-.375-2.3C4.05 8.86 3 7.3 3 5.5z" stroke="currentColor" stroke-width="1.5"/><path d="M8 14v-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
const iconLogout = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 2H13a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M7 11l3-3-3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 8H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
const iconAdmin = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1l1.545 3.13L13 4.636l-2.5 2.436.59 3.438L8 8.75l-3.09 1.76.59-3.438L3 4.636l3.455-.506L8 1z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`;

const sections = [
  { name: "dashboard", hasDropdown: false, title: "Dashboard", icon: iconDashboard },
  { name: "profile", hasDropdown: false, title: "Profile", icon: iconProfile },
  { name: "orders", hasDropdown: false, title: "Orders", icon: iconOrders },
  { name: "wishlist", hasDropdown: false, title: "Wishlist", icon: iconWishlist },
  { name: "payment", hasDropdown: false, title: "Payment & Shipping", icon: iconPayment },
  { name: "support", hasDropdown: false, title: "Support", icon: iconSupport },
  { name: "logout", hasDropdown: false, title: "Logout", icon: iconLogout },
];

const adminSections = [
  { name: "dashboard", hasDropdown: false, title: "Dashboard", icon: iconDashboard },
  { name: "profile", hasDropdown: false, title: "Profile", icon: iconProfile },
  { name: "orders", hasDropdown: false, title: "Orders", icon: iconOrders },
  { name: "wishlist", hasDropdown: false, title: "Wishlist", icon: iconWishlist },
  { name: "payment", hasDropdown: false, title: "Payment & Shipping", icon: iconPayment },
  { name: "support", hasDropdown: false, title: "Support", icon: iconSupport },
  { name: "logout", hasDropdown: false, title: "Logout", icon: iconLogout },
  {
    name: "admin",
    hasDropdown: true,
    title: "Admin",
    icon: iconAdmin,
    subSections: [
      { name: "tickets", title: "Tickets" },
      { name: "edit-orders", title: "Edit Orders" },
      { name: "edit-users", title: "Edit Users" },
      { name: "edit-blogs", title: "Edit Blogs" },
    ],
  },
];

const computedSections = computed(() =>
  userStore.user?.role === "admin" ? adminSections : sections
);

const isActive = (name, isSub = false) => {
  if (isSub) return props.currentSection === name;
  const hasActiveChild = isSubsectionActive(name);
  return props.currentSection === name || hasActiveChild;
};

const toggleDropdown = (name) => {
  const section = computedSections.value.find(s => s.name === name);
  if (section?.hasDropdown) {
    dropdowns.value[name] = !dropdowns.value[name];
  } else {
    setActiveSection(name);
  }
};

const isSubsectionActive = (parentName) =>
  computedSections.value
    .find(s => s.name === parentName)
    ?.subSections?.some(sub => props.currentSection === sub.name) ?? false;

const setActiveSection = (name) => {
  emit("change-section", name);
  Object.keys(dropdowns.value).forEach(k => (dropdowns.value[k] = false));
  if (window.innerWidth <= 768) emit("toggle-sidebar");
};

const handleLogout = () => {
  userStore.logout();
  router.push("/");
};
</script>

<style scoped>
.sidebar {
  width: 240px;
  min-width: 240px;
  background: #fff;
  border-right: 1px solid #e5e7eb;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0 1rem;
  font-family: "Source Sans Pro", sans-serif;
}

/* Identity */
.sidebar-identity {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0 1.25rem 0;
  margin-bottom: 1.25rem;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #e8f0ec;
  flex-shrink: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.avatar-initials {
  font-size: 0.875rem;
  font-weight: 600;
  color: #3f654c;
  font-family: "Poppins", sans-serif;
}
.identity-text {
  min-width: 0;
}
.identity-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: "Poppins", sans-serif;
}
.identity-email {
  font-size: 0.75rem;
  color: #9ca3af;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.divider {
  height: 1px;
  background: #f3f4f6;
  margin: 0 1.25rem 0.75rem;
}

/* Nav */
.nav {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 0.75rem;
  gap: 1px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 0.75rem;
  border-radius: 8px;
  border: none;
  background: transparent;
  width: 100%;
  text-align: left;
  cursor: pointer;
  color: #6b7280;
  font-size: 0.875rem;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 500;
  transition: all 0.15s ease;
  position: relative;
}
.nav-item:hover {
  background: #f9fafb;
  color: #374151;
}
.nav-item.active {
  background: #f0f5f2;
  color: #3f654c;
  font-weight: 600;
}
.nav-item.logout {
  margin-top: auto;
  color: #9ca3af;
}
.nav-item.logout:hover {
  color: #ef4444;
  background: #fef2f2;
}

.nav-icon {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
}
.nav-label {
  flex: 1;
}
.nav-chevron {
  display: flex;
  align-items: center;
  transition: transform 0.2s ease;
}
.nav-chevron.open {
  transform: rotate(180deg);
}

/* Sub-menu */
.sub-menu {
  display: flex;
  flex-direction: column;
  padding: 0.25rem 0 0.25rem 2.75rem;
  gap: 1px;
}
.sub-item {
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  border: none;
  background: transparent;
  text-align: left;
  cursor: pointer;
  color: #9ca3af;
  font-size: 0.8125rem;
  font-family: "Source Sans Pro", sans-serif;
  transition: all 0.15s ease;
}
.sub-item:hover {
  background: #f9fafb;
  color: #374151;
}
.sub-item.active {
  color: #3f654c;
  font-weight: 600;
}

@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 200;
    transform: translateX(-100%);
    transition: transform 0.25s ease;
    box-shadow: 4px 0 24px rgba(0,0,0,0.08);
  }
  .sidebar.visible {
    transform: translateX(0);
  }
}
</style>
