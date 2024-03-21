<template>
  <li>
    <div class="notification" :class="notification.type">
      <p>{{ notification.text }}</p>
      <button
        @click="removeNotification(notification.id)"
        title="Close notification"
      >
        X
      </button>
    </div>
  </li>
</template>

<script setup lang="ts">
const { removeNotification } = useNotificationStore();
defineProps({
  notification: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.notification {
  display: flex;
  align-items: center;
  gap: var(--sp-small);
  padding: var(--pd-smallest) 0;
  padding-left: var(--pd-small);
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
  width: 30rem;
}

.notification > p {
  margin: 0;
  flex: 1;
}

.notification > button {
  transition: var(--transition);
}

.notification > button:hover {
  color: var(--cl-light);
}

.notification.error {
  background-color: var(--cl-red);
}

.notification.success {
  background-color: var(--cl-green);
}
</style>
