<template>
  <div class="support">
    <div class="page-header">
      <h1 class="page-title">Support</h1>
      <p class="page-subtitle">Create a ticket and our team will get back to you.</p>
    </div>

    <div class="support-layout">
      <!-- Left: ticket list -->
      <div class="ticket-panel" :class="{ 'hidden-mobile': selectedTicket }">
        <div class="panel-header">
          <span class="panel-title">Your Tickets</span>
          <button class="btn-new" @click="openTicketModal">+ New ticket</button>
        </div>

        <div v-if="openTickets.length" class="ticket-group">
          <p class="group-label">Open</p>
          <div
            v-for="ticket in openTickets"
            :key="ticket._id"
            class="ticket-row"
            :class="{ active: selectedTicket?._id === ticket._id }"
            @click="selectTicket(ticket)"
          >
            <div class="ticket-row-info">
              <p class="ticket-row-title">{{ ticket.title }}</p>
              <p class="ticket-row-date">{{ formatDateTime(ticket.updatedAt) }}</p>
            </div>
            <div class="ticket-row-right">
              <span v-if="ticket.userUnread" class="unread-dot" />
              <span class="t-badge badge-green">Open</span>
            </div>
          </div>
        </div>

        <div v-if="closedTickets.length" class="ticket-group">
          <p class="group-label">Closed</p>
          <div
            v-for="ticket in closedTickets"
            :key="ticket._id"
            class="ticket-row"
            :class="{ active: selectedTicket?._id === ticket._id }"
            @click="selectTicket(ticket)"
          >
            <div class="ticket-row-info">
              <p class="ticket-row-title">{{ ticket.title }}</p>
              <p class="ticket-row-date">{{ formatDate(ticket.createdAt) }}</p>
            </div>
            <span class="t-badge badge-gray">Closed</span>
          </div>
        </div>

        <div v-if="!openTickets.length && !closedTickets.length" class="empty-tickets">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="3" y="3" width="22" height="22" rx="4" stroke="#d1d5db" stroke-width="1.75"/>
            <path d="M8.5 10h11M8.5 14.5h7" stroke="#d1d5db" stroke-width="1.75" stroke-linecap="round"/>
          </svg>
          <p>No tickets yet.</p>
        </div>
      </div>

      <!-- Right: conversation -->
      <div class="conv-panel" :class="{ 'hidden-mobile': !selectedTicket }">
        <template v-if="selectedTicket">
          <div class="conv-header">
            <button class="btn-back" @click="selectedTicket = null">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 2L4 7l5 5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Back
            </button>
            <div class="conv-header-right">
              <p class="conv-title">{{ selectedTicket.title }}</p>
              <span class="t-badge" :class="selectedTicket.status === 'open' ? 'badge-green' : 'badge-gray'">
                {{ selectedTicket.status }}
              </span>
            </div>
          </div>

          <div class="messages" ref="messagesEl">
            <div v-if="!selectedTicket.messages?.length" class="messages-empty">
              <p>No messages yet. Send one below.</p>
            </div>
            <div
              v-for="msg in selectedTicket.messages"
              :key="msg.timestamp"
              class="message"
              :class="{ 'message-user': msg.isUser }"
            >
              <div class="message-meta">
                <span class="message-sender">{{ msg.senderName }}</span>
                <span class="message-time">{{ formatDateTime(msg.timestamp) }}</span>
              </div>
              <p class="message-text">{{ msg.text }}</p>
            </div>
          </div>

          <div v-if="selectedTicket.status === 'open'" class="reply-box">
            <textarea
              v-model="newMessage"
              class="reply-input"
              placeholder="Type your message..."
              rows="3"
            />
            <div class="reply-actions">
              <button class="btn-primary" :disabled="!newMessage.trim()" @click="sendMessage">Send</button>
            </div>
          </div>
          <p v-else class="closed-notice">This ticket is closed and no longer accepting replies.</p>
        </template>

        <div v-else class="conv-empty">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M4 6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H10l-6 4V6z" stroke="#d1d5db" stroke-width="1.75" stroke-linejoin="round"/>
          </svg>
          <p>Select a ticket to view the conversation</p>
        </div>
      </div>
    </div>

    <!-- New ticket modal -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeTicketModal">
      <div class="modal">
        <div class="modal-header">
          <h2 class="modal-title">New Support Ticket</h2>
          <button class="modal-close" @click="closeTicketModal" aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
        <div class="modal-body">
          <div class="field">
            <label class="field-label">Subject</label>
            <input type="text" v-model="newTicket.title" class="field-input" placeholder="What's this about?" />
          </div>
          <div class="field">
            <label class="field-label">Description</label>
            <textarea v-model="newTicket.description" class="field-input field-textarea" placeholder="Describe your issue in detail..." rows="4" />
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn-secondary" @click="closeTicketModal">Cancel</button>
          <button class="btn-primary" :disabled="!newTicket.title.trim()" @click="submitTicket">Submit ticket</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const userStore = useUserStore();

const showModal = ref(false);
const newTicket = ref({ title: "", description: "" });
const selectedTicket = ref(null);
const newMessage = ref("");
const messagesEl = ref(null);

const emit = defineEmits(["close-sidebar"]);

const { data: initialTickets, error: ticketsError } = await useFetch(`/api/tickets/${userStore.user._id}`);

const tickets = computed(() => Array.isArray(initialTickets.value) ? initialTickets.value : []);

const openTickets = computed(() =>
  tickets.value.filter(t => t.status === "open").sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
);
const closedTickets = computed(() =>
  tickets.value.filter(t => t.status === "closed").sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
);

const openTicketModal = () => {
  if (window.innerWidth < 768) emit("close-sidebar");
  showModal.value = true;
};

const closeTicketModal = () => {
  showModal.value = false;
  newTicket.value = { title: "", description: "" };
};

const submitTicket = async () => {
  if (!newTicket.value.title.trim()) return;
  try {
    const data = await $fetch("/api/tickets", {
      method: "POST",
      body: {
        userId: userStore.user._id,
        userName: userStore.user.name,
        title: newTicket.value.title,
        description: newTicket.value.description,
      },
    });
    initialTickets.value = [...tickets.value, data];
    closeTicketModal();
  } catch {}
};

const selectTicket = async (ticket) => {
  selectedTicket.value = ticket;
  if (ticket.userUnread) {
    selectedTicket.value.userUnread = false;
    try {
      await $fetch(`/api/tickets/${ticket._id}`, { method: "PUT", body: { userUnread: false } });
      initialTickets.value = tickets.value.map(t => t._id === ticket._id ? { ...t, userUnread: false } : t);
    } catch {}
  }
  await nextTick();
  if (messagesEl.value) messagesEl.value.scrollTop = messagesEl.value.scrollHeight;
};

const sendMessage = async () => {
  if (!newMessage.value.trim()) return;
  try {
    const response = await $fetch(`/api/tickets/${selectedTicket.value._id}`, {
      method: "PUT",
      body: { text: newMessage.value, senderName: userStore.user.name, isUser: true },
    });
    selectedTicket.value = response;
    newMessage.value = "";
    await fetchTickets();
    await nextTick();
    if (messagesEl.value) messagesEl.value.scrollTop = messagesEl.value.scrollHeight;
  } catch {}
};

const fetchTickets = async () => {
  try {
    const data = await $fetch(`/api/tickets/${userStore.user._id}`);
    initialTickets.value = Array.isArray(data) ? data : [];
  } catch {}
};

const formatDate = (d) => new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
const formatDateTime = (d) => new Date(d).toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit", hour12: true });
</script>

<style scoped>
.support {
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

/* Layout */
.support-layout {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

/* Ticket panel */
.ticket-panel {
  width: 280px;
  flex-shrink: 0;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid #f3f4f6;
}
.panel-title {
  font-family: "Poppins", sans-serif;
  font-size: 0.9375rem;
  font-weight: 600;
  color: #111827;
}
.btn-new {
  font-size: 0.75rem;
  font-weight: 600;
  font-family: "Source Sans Pro", sans-serif;
  background: #3f654c;
  color: #fff;
  border: none;
  padding: 0.3rem 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.15s;
  white-space: nowrap;
}
.btn-new:hover { background: #2e5039; }

.ticket-group { padding: 0.5rem 0; }
.group-label {
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #9ca3af;
  padding: 0.375rem 1.25rem 0.25rem;
  margin: 0;
}
.ticket-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.625rem 1.25rem;
  cursor: pointer;
  border-left: 3px solid transparent;
  transition: background 0.1s;
}
.ticket-row:hover { background: #f9fafb; }
.ticket-row.active {
  background: #f0f5f2;
  border-left-color: #3f654c;
}
.ticket-row-info { flex: 1; min-width: 0; }
.ticket-row-title {
  font-size: 0.8125rem;
  font-weight: 600;
  color: #374151;
  margin: 0 0 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ticket-row-date { font-size: 0.75rem; color: #9ca3af; margin: 0; }
.ticket-row-right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}
.unread-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #3f654c;
  flex-shrink: 0;
}

.empty-tickets {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem 1rem;
  color: #9ca3af;
  font-size: 0.875rem;
}

/* Conversation panel */
.conv-panel {
  flex: 1;
  min-width: 0;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 480px;
}

.conv-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid #f3f4f6;
}
.btn-back {
  display: none;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #6b7280;
  font-family: "Source Sans Pro", sans-serif;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem 0;
  flex-shrink: 0;
}
.btn-back:hover { color: #374151; }
.conv-header-right {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  flex: 1;
  min-width: 0;
}
.conv-title {
  font-family: "Poppins", sans-serif;
  font-size: 0.9375rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Messages */
.messages {
  flex: 1;
  padding: 1.25rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-height: 200px;
  max-height: 400px;
}
.messages-empty {
  color: #9ca3af;
  font-size: 0.875rem;
  text-align: center;
  padding: 2rem 0;
}
.message {
  background: #f9fafb;
  border: 1px solid #f3f4f6;
  border-radius: 10px;
  padding: 0.75rem 1rem;
  max-width: 80%;
  align-self: flex-start;
}
.message.message-user {
  background: #f0f5f2;
  border-color: #d1e7da;
  align-self: flex-end;
}
.message-meta {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 0.25rem;
}
.message-sender {
  font-size: 0.75rem;
  font-weight: 700;
  color: #374151;
}
.message-time { font-size: 0.6875rem; color: #9ca3af; }
.message-text { font-size: 0.875rem; color: #374151; margin: 0; line-height: 1.5; }

/* Reply */
.reply-box {
  padding: 1rem 1.25rem;
  border-top: 1px solid #f3f4f6;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}
.reply-input {
  width: 100%;
  padding: 0.625rem 0.875rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.9375rem;
  font-family: "Source Sans Pro", sans-serif;
  color: #111827;
  resize: none;
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;
  box-sizing: border-box;
}
.reply-input:focus {
  border-color: #3f654c;
  box-shadow: 0 0 0 3px rgba(63,101,76,0.1);
}
.reply-actions { display: flex; justify-content: flex-end; }
.closed-notice {
  padding: 1rem 1.25rem;
  border-top: 1px solid #f3f4f6;
  font-size: 0.875rem;
  color: #9ca3af;
  margin: 0;
}

/* Empty conv state */
.conv-empty {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  color: #9ca3af;
  font-size: 0.9375rem;
  padding: 3rem;
}

/* Badges */
.t-badge {
  font-size: 0.6875rem;
  font-weight: 600;
  padding: 0.175rem 0.5rem;
  border-radius: 99px;
  white-space: nowrap;
  flex-shrink: 0;
}
.badge-green { background: #dcfce7; color: #166534; }
.badge-gray  { background: #f3f4f6; color: #374151; }

/* Buttons */
.btn-primary {
  background: #3f654c;
  color: #fff;
  border: none;
  padding: 0.5rem 1.25rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  font-family: "Source Sans Pro", sans-serif;
  cursor: pointer;
  transition: background 0.15s;
}
.btn-primary:hover:not(:disabled) { background: #2e5039; }
.btn-primary:disabled { opacity: 0.45; cursor: not-allowed; }
.btn-secondary {
  background: #fff;
  color: #374151;
  border: 1px solid #e5e7eb;
  padding: 0.5rem 1.25rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  font-family: "Source Sans Pro", sans-serif;
  cursor: pointer;
  transition: background 0.15s;
}
.btn-secondary:hover { background: #f9fafb; }

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 500;
  padding: 1rem;
}
.modal {
  background: #fff;
  border-radius: 14px;
  width: 100%;
  max-width: 480px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
}
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #f3f4f6;
}
.modal-title {
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
}
.modal-close {
  background: none;
  border: none;
  cursor: pointer;
  color: #9ca3af;
  display: flex;
  align-items: center;
  padding: 0.25rem;
  transition: color 0.15s;
}
.modal-close:hover { color: #374151; }
.modal-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.625rem;
  padding: 1rem 1.5rem;
  border-top: 1px solid #f3f4f6;
}

/* Fields */
.field { display: flex; flex-direction: column; gap: 0.375rem; }
.field-label { font-size: 0.8125rem; font-weight: 600; color: #374151; letter-spacing: 0.01em; }
.field-input {
  padding: 0.625rem 0.875rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.9375rem;
  font-family: "Source Sans Pro", sans-serif;
  color: #111827;
  background: #fff;
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;
  width: 100%;
  box-sizing: border-box;
}
.field-input:focus {
  border-color: #3f654c;
  box-shadow: 0 0 0 3px rgba(63,101,76,0.1);
}
.field-textarea { resize: vertical; }

/* Mobile */
@media (max-width: 768px) {
  .support-layout { flex-direction: column; }
  .ticket-panel { width: 100%; }
  .hidden-mobile { display: none; }
  .btn-back { display: flex; }
}
</style>
