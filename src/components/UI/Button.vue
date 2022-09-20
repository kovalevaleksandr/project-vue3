<template>
  <button class="btn" @click="openModal">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "v-btn",
  methods: {
    openModal() {
      this.$emit("openModal");
    },
  },
};
</script>

<style scoped lang="scss">
.btn {
  background-color: #ffffff;
  color: #000000;
  font-family: "JetBrains Mono Medium", sans-serif;
  border: 1px solid #000000;
}
</style>
