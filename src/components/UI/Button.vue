<template>
  <button class="btn">
    <i
        class="btn__icon material-icons"
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
  cursor: pointer;

  &__icon {
    margin-right: .8rem;
  }
}
</style>
