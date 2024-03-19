<template>
  <div class="settings__control">
    <div class="settings__control-heading">
      <slot name="heading"></slot>
      <button v-if="hidden" @click="handleOpenClick">
        {{ open ? "Hide" : "Change" }}
      </button>
    </div>
    <div class="settings__control-content">
      <slot name="content"></slot>
    </div>
    <div
      class="settings__control-hidden-content"
      :class="{ open: open }"
      v-if="hidden"
    >
      <slot name="content-hidden"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  hidden: {
    type: Boolean,
    required: false,
    default: true,
  },
});

const open = ref(false);

const handleOpenClick = () => {
  open.value = !open.value;
};
</script>

<style scoped>
.settings__control-heading {
  display: flex;
  align-items: center;
}

.settings__control-heading > :deep(h3) {
  flex: 1;
}
.settings__control-hidden-content {
  max-height: 0;
  overflow: hidden;
}

.settings__control-hidden-content.open {
  min-height: 2rem;
  max-height: 20rem;
}
</style>
