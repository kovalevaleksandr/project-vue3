<template>
  <button class="btn">
    <i
        class="material-icons"
        :style="{ color: props.color }"
    >
      {{ props.name }}
    </i>
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
const props = defineProps<{
  name?: string;
  color?: string;
}>();
</script>

<style scoped lang="scss">
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  border-radius: 5px;
  padding: 5px 15px;
  font-family: "JetBrains Mono Medium", sans-serif;
  background-color: #1a73e8;
  color: #ffffff;
  cursor: pointer;
}
</style>
