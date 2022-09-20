<template>
  <button class="btn">
    <span
      class="material-icons"
      :style="{ color: props.btnProps.color }"
      >{{ props.btnProps.name }}</span
    >
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
const props:any = defineProps({
  btnProps: {
    type: Object,
  },
})
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
