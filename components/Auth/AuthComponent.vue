<template>
  <div class="auth-component">
    <div class="auth-component__tabs">
      <button v-for="tab in tabs" :key="tab" @click="handleTabChange(tab)">
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

const activeTab = ref("login");
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
</style>
