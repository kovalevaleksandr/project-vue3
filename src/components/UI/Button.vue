<template>
  <button class="btn" @click="clicker">
    <span class="material-icons" :style="{ color: props.btnProps.color }">
      {{ props.btnProps.name }}
    </span>
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
const props = defineProps<{
  btnProps?: object;
  meaning?: string | number;
}>();
const emits = defineEmits(["clicker"]);
function clicker() {
  console.log("первый клик", props.meaning);
  emits("clicker", props.meaning);
}
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
