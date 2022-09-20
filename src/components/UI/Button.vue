<template>
  <button class="btn">
    <span
      class="material-icons"
      :style="{ color: btnProps.color }"
      >{{ btnProps.name }}</span
    >
    <slot></slot>
  </button>
</template>
<script lang="ts">
export default {
  name: "v-btn",
  props: {
    btnProps: {
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  padding: 5px 15px;
  font-family: "JetBrains Mono Medium", sans-serif;
  background-color: #1a73e8;
  color: #ffffff;
}
</style>
