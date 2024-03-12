<template>
  <div class="form-control">
    <label :class="{ move: inputVal || movedLabel }" :for="name">{{
      label
    }}</label>
    <input v-model.trim="inputVal" :type="type" :name="name" :id="name" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
    default: "text",
  },
  movedLabel: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const inputVal = ref("");
</script>

<style scoped>
.form-control {
  display: flex;
  flex-direction: column;
  position: relative;
}

label {
  position: absolute;
  transition: all 0.3s ease;
  color: var(--cl-grey);
}

label.move {
  transform: translateY(-20px);
  font-size: calc(var(--fs-smallest) - 0.4rem);
  padding-left: 0;
  color: var(--cl-dark);
}

input {
  outline: none;
  border: none;
  border-bottom: 2px solid grey;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

input:focus {
  border-color: var(--cl-accent);
  background-color: rgb(249, 249, 249);
}
</style>
