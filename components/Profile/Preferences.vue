<template>
  <div class="preferences">
    <SubcomponentsNotificationPopup
      v-if="notificationMessage"
      :message="notificationMessage"
      :type="notificationType"
      @close-popup="notificationMessage = null"
    />

    <!-- Page header -->
    <div class="page-header">
      <h1 class="page-title">Profile</h1>
      <p class="page-subtitle">Manage your account details and preferences.</p>
    </div>

    <!-- Avatar card -->
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">Profile Photo</h2>
      </div>
      <div class="card-body avatar-section">
        <div class="avatar-wrapper" @click="triggerFileInput">
          <div class="avatar">
            <img
              v-if="userStore.user.profilePicture"
              :src="userStore.user.profilePicture"
              alt="Profile"
              class="avatar-img"
            />
            <span v-else class="avatar-initials">{{ initials }}</span>
          </div>
          <div class="avatar-overlay">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 12.5V14h1.5l7-7L9 5.5l-7 7zm11.3-8.8a1 1 0 0 0 0-1.41l-1.6-1.6a1 1 0 0 0-1.41 0L9 2l3 3 1.3-1.3z" fill="white"/>
            </svg>
          </div>
          <input type="file" ref="fileInput" class="file-input" @change="uploadImage" accept="image/*" />
        </div>
        <div class="avatar-info">
          <p class="avatar-name">{{ userStore.user.name }}</p>
          <p class="avatar-email">{{ userStore.user.email }}</p>
          <button class="btn-secondary-sm" @click="triggerFileInput">Change photo</button>
        </div>
      </div>
    </div>

    <!-- Account security -->
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">Account Security</h2>
      </div>
      <div class="card-body">
        <div class="form-grid cols-2">
          <div class="field">
            <label class="field-label">Email address</label>
            <input type="email" :value="userStore.user.email" disabled class="field-input disabled" />
          </div>
          <div class="field">
            <label class="field-label">New password</label>
            <input type="password" v-model="password" class="field-input" placeholder="Enter new password" />
          </div>
          <div class="field">
            <label class="field-label">Confirm new password</label>
            <input type="password" v-model="confirmPassword" class="field-input" placeholder="Confirm new password" />
          </div>
        </div>
        <div class="card-footer">
          <button class="btn-primary" @click="saveAccountChanges">Save changes</button>
        </div>
      </div>
    </div>

    <!-- Personal info -->
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">Personal Information</h2>
      </div>
      <div class="card-body">
        <div class="form-grid cols-3">
          <div class="field">
            <label class="field-label">Full name</label>
            <input type="text" v-model="userStore.user.name" class="field-input" />
          </div>
          <div class="field">
            <label class="field-label">Preferred name</label>
            <input type="text" v-model="userStore.user.preferredName" class="field-input" />
          </div>
          <div class="field">
            <label class="field-label">Date of birth</label>
            <input type="date" v-model="formattedDateOfBirth" class="field-input" />
          </div>
        </div>
        <div class="card-footer">
          <button class="btn-primary" @click="savePersonalChanges">Save changes</button>
        </div>
      </div>
    </div>

    <!-- Contact -->
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">Contact &amp; Address</h2>
      </div>
      <div class="card-body">
        <div class="form-grid cols-3">
          <div class="field">
            <label class="field-label">Phone number</label>
            <input type="tel" v-model="userStore.user.contact.phone" class="field-input" />
          </div>
          <div class="field col-span-2">
            <label class="field-label">Street address</label>
            <input type="text" v-model="userStore.user.contact.street" class="field-input" />
          </div>
          <div class="field">
            <label class="field-label">City</label>
            <input type="text" v-model="userStore.user.contact.city" class="field-input" />
          </div>
          <div class="field">
            <label class="field-label">State</label>
            <input type="text" v-model="userStore.user.contact.state" class="field-input" />
          </div>
          <div class="field">
            <label class="field-label">ZIP code</label>
            <input type="text" v-model="userStore.user.contact.zip" class="field-input" />
          </div>
        </div>
        <div class="card-footer">
          <button class="btn-primary" @click="saveContactChanges">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const userStore = useUserStore();
const fileInput = ref(null);
const password = ref("");
const confirmPassword = ref("");
const notificationMessage = ref("");
const notificationType = ref("info");

const initials = computed(() => {
  const name = userStore.user?.name || "";
  return name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase() || "U";
});

const formattedDateOfBirth = computed({
  get() {
    return userStore.user?.dateOfBirth
      ? new Date(userStore.user.dateOfBirth).toISOString().split("T")[0]
      : "";
  },
  set(value) {
    userStore.user.dateOfBirth = value ? new Date(value).toISOString() : null;
  },
});

const triggerFileInput = () => fileInput.value.click();

const uploadImage = async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  const oldProfilePicture = userStore.user.profilePicture;
  try {
    const formData = new FormData();
    formData.append("file", file);
    const response = await $fetch("/api/aws/upload", { method: "POST", body: formData });
    if (response?.url) {
      const userResponse = await $fetch(`/api/users/${userStore.user._id}`, {
        method: "PUT",
        body: { profilePicture: response.url },
      });
      userStore.setUser(userResponse);
      if (oldProfilePicture) {
        try {
          await $fetch("/api/aws/upload", { method: "DELETE", body: { key: oldProfilePicture.split("/").pop() } });
        } catch {}
      }
      showNotification("Profile photo updated!", "success");
    }
  } catch {
    showNotification("Failed to upload photo.", "error");
  }
};

const saveAccountChanges = async () => {
  if (password.value !== confirmPassword.value) {
    showNotification("Passwords don't match", "error");
    return;
  }
  try {
    const userResponse = await $fetch(`/api/users/${userStore.user._id}`, {
      method: "PUT",
      body: { password: password.value },
    });
    userStore.setUser(userResponse);
    password.value = "";
    confirmPassword.value = "";
    showNotification("Password updated!", "success");
  } catch {
    showNotification("Error updating password.", "error");
  }
};

const savePersonalChanges = async () => {
  try {
    const userResponse = await $fetch(`/api/users/${userStore.user._id}`, { method: "PUT", body: userStore.user });
    userStore.setUser(userResponse);
    showNotification("Personal info updated!", "success");
  } catch {
    showNotification("Error saving changes.", "error");
  }
};

const saveContactChanges = async () => {
  try {
    const userResponse = await $fetch(`/api/users/${userStore.user._id}`, { method: "PUT", body: userStore.user });
    userStore.setUser(userResponse);
    showNotification("Contact info updated!", "success");
  } catch {
    showNotification("Error saving changes.", "error");
  }
};

const showNotification = (message, type) => {
  notificationMessage.value = message;
  notificationType.value = type;
};
</script>

<style scoped>
.preferences {
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
.page-subtitle {
  font-size: 0.9375rem;
  color: #6b7280;
  margin: 0;
}

/* Card */
.card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
}
.card-header {
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
.card-body {
  padding: 1.5rem;
}
.card-footer {
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid #f3f4f6;
  display: flex;
  justify-content: flex-end;
}

/* Avatar section */
.avatar-section {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.avatar-wrapper {
  position: relative;
  cursor: pointer;
  flex-shrink: 0;
}
.avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: #e8f0ec;
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
  font-size: 1.25rem;
  font-weight: 700;
  color: #3f654c;
  font-family: "Poppins", sans-serif;
}
.avatar-overlay {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: rgba(0,0,0,0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.15s;
}
.avatar-wrapper:hover .avatar-overlay {
  opacity: 1;
}
.file-input { display: none; }
.avatar-name {
  font-weight: 600;
  color: #111827;
  margin: 0 0 0.25rem;
  font-size: 1rem;
}
.avatar-email {
  color: #9ca3af;
  margin: 0 0 0.75rem;
  font-size: 0.875rem;
}
.avatar-info { display: flex; flex-direction: column; }

/* Form grid */
.form-grid {
  display: grid;
  gap: 1rem 1.25rem;
}
.cols-2 { grid-template-columns: repeat(2, 1fr); }
.cols-3 { grid-template-columns: repeat(3, 1fr); }
.col-span-2 { grid-column: span 2; }

/* Fields */
.field { display: flex; flex-direction: column; gap: 0.375rem; }
.field-label {
  font-size: 0.8125rem;
  font-weight: 600;
  color: #374151;
  letter-spacing: 0.01em;
}
.field-input {
  padding: 0.625rem 0.875rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.9375rem;
  font-family: "Source Sans Pro", sans-serif;
  color: #111827;
  background: #fff;
  transition: border-color 0.15s, box-shadow 0.15s;
  outline: none;
  width: 100%;
  box-sizing: border-box;
}
.field-input:focus {
  border-color: #3f654c;
  box-shadow: 0 0 0 3px rgba(63, 101, 76, 0.1);
}
.field-input.disabled {
  background: #f9fafb;
  color: #9ca3af;
  cursor: not-allowed;
}

/* Buttons */
.btn-primary {
  background: #3f654c;
  color: #fff;
  border: none;
  padding: 0.625rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9375rem;
  font-weight: 600;
  font-family: "Source Sans Pro", sans-serif;
  cursor: pointer;
  transition: background 0.15s;
}
.btn-primary:hover { background: #2e5039; }

.btn-secondary-sm {
  background: #f3f4f6;
  color: #374151;
  border: 1px solid #e5e7eb;
  padding: 0.4rem 0.875rem;
  border-radius: 6px;
  font-size: 0.8125rem;
  font-weight: 600;
  font-family: "Source Sans Pro", sans-serif;
  cursor: pointer;
  transition: background 0.15s;
  align-self: flex-start;
}
.btn-secondary-sm:hover { background: #e5e7eb; }

@media (max-width: 768px) {
  .cols-2, .cols-3 { grid-template-columns: 1fr; }
  .col-span-2 { grid-column: span 1; }
  .card-body { padding: 1rem; }
  .avatar-section { flex-direction: column; align-items: flex-start; }
  .card-footer { justify-content: stretch; }
  .btn-primary { width: 100%; }
}
</style>
