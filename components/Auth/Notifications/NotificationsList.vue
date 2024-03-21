<template>
  <TransitionGroup name="notifications" tag="ul" class="notifications-list">
    <NotificationItem
      v-for="notification in notifications"
      :notification="notification"
      :key="notification.id"
    />
  </TransitionGroup>
</template>

<script setup lang="ts">
const { notifications } = storeToRefs(useNotificationStore());
</script>

<style scoped>
.notifications-list {
  position: fixed;
  top: 80%;
  left: 0;
  height: 5rem;
  height: 5rem;
  z-index: 105;
  display: flex;
  flex-direction: column;
  gap: var(--sp-smallest);
}

.notificationst-enter-active,
.notifications-leave-active {
  transition: all 0.4s ease;
}

.notifications-leave-from,
.notifications-enter-to {
  transform: translateX(0);
}

.notifications-leave-to,
.notifications-enter-from {
  transform: translateX(-30rem);
}
</style>
