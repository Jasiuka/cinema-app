<template>
  <div class="auth-component">
    <div class="auth-component__tabs">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="{ active: tab === activeTab }"
        @click="handleTabChange(tab)"
      >
        {{ tab }}
      </button>
    </div>
    <keep-alive>
      <component :is="authComponent" :handle-tab-change="handleTabChange">
      </component>
    </keep-alive>
  </div>
</template>

<script setup>
import { LoginForm, SignupForm, ForgotForm } from "#components";
const authComponent = computed(() => {
  switch (activeTab.value.toUpperCase()) {
    case "LOGIN":
      return LoginForm;
    case "SIGNUP":
      return SignupForm;
    case "FORGOT":
      return ForgotForm;
  }
});

const activeTab = ref("Login");
const tabs = ["Login", "Signup"];

function handleTabChange(tab) {
  activeTab.value = tab;
}
</script>

<style scoped>
.auth-component__tabs {
  display: flex;
  align-items: center;
}

.auth-component__tabs > button {
  text-transform: uppercase;
  flex: 1;
  font-size: var(--fs-small);
  transition: all 0.3s ease;
  padding: calc(var(--pd-smallest) - 0.4rem) var(--pd-smallest);
  border: 2px solid var(--cl-accent);
}

.auth-component__tabs > button:first-of-type {
  border-radius: var(--border-radius) 0 0 var(--border-radius);
}

.auth-component__tabs > button:nth-of-type(2) {
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
}

.auth-component__tabs > button.active {
  background-color: var(--cl-accent);
  color: var(--cl-light);
}

.auth-component__tabs > button:not(.active):hover {
  background-color: var(--cl-accent-light);
  border-color: var(--cl-accent-light);
}

.auth-component {
  min-height: 35rem;
  min-width: 25rem;
  max-width: 25rem;
  display: flex;
  flex-direction: column;
}

:deep(form) {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
