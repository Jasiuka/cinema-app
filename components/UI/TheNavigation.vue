<template>
  <nav class="navigation">
    <div class="navigation__container">
      <div class="navigation__logo">LOGO</div>
      <ul class="navigation__list">
        <li class="navigation__item">
          <NuxtLink to="/" class="navigation__link">Main</NuxtLink>
        </li>
        <li class="navigation__item">
          <NuxtLink to="/" class="navigation__link">Now Playing</NuxtLink>
        </li>
        <li class="navigation__item">
          <NuxtLink to="/" class="navigation__link">Upcoming</NuxtLink>
        </li>
        <li class="navigation__item">
          <NuxtLink to="/" class="navigation__link">Link</NuxtLink>
        </li>
        <li class="navigation__item">
          <NuxtLink to="/" class="navigation__link">Link</NuxtLink>
        </li>
        <li v-if="!user.name" class="navigation__item">
          <button
            class="naivgation__button"
            @click="openModal(ModalComponents.AUTH)"
          >
            Login
          </button>
        </li>
        <li v-else class="navigation__item">
          <BaseDropdown>
            <template #display>
              <Icon size="1.5rem" name="material-symbols:person" />
              {{ user.name }}
            </template>
            <template #list-items>
              <li class="dropdown__item" v-for="item in items">
                <NuxtLink v-if="item.type === 'link'" :to="item.link">{{
                  item.text
                }}</NuxtLink>
                <button v-else>{{ item.text }}</button>
              </li>
              <li class="dropdown__item">
                <Button
                  :button-style="ButtonStyle.INHERITED"
                  @click="handleLogout"
                  title="Logout"
                  type="button"
                  >Logout</Button
                >
              </li>
            </template>
          </BaseDropdown>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useModalStore } from "../../stores/modalStore";
import { useAuthStore } from "#imports";
import { ButtonStyle, ModalComponents, type DropdownList } from "~/types";
const { openModal } = useModalStore();
const { logout } = useAuthStore();
const { user } = storeToRefs(useAuthStore());

const handleLogout = async () => {
  await logout();
};

const items: DropdownList = [
  { text: "Settings", link: "/settings", type: "link" },
  { text: "History", link: "/history", type: "link" },
];
</script>

<style scoped>
.navigation,
.navigation__list {
  display: flex;
  align-items: center;
  position: relative;
}
.navigation {
  gap: var(--sp-largest);
  background-color: var(--cl-accent);
  padding: var(--pd-small) var(--pd-medium);
  z-index: 10;
  min-width: 100%;
}

.navigation__container {
  max-width: var(--max-width);
  min-width: var(--max-width);
  display: flex;
  margin: 0 auto;
  gap: calc(var(--sp-largest) * 2);
}

.navigation__list {
  gap: var(--sp-medium);
  z-index: 5;
  min-height: 100%;
  width: 100%;
}

.navigation__item {
  min-height: 100%;
}

.navigation__item:last-child {
  margin-right: 0;
  margin-left: auto;
}
</style>
