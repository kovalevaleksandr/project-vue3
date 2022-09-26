<template>
  <div
    class="modal"
    v-if="props.show"
    @click.stop="hideDialog"
  >
    <div class="modal__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  show: boolean
}>(), {
  show: false
})
const emits = defineEmits(
    ["update:show"]
);
const hideDialog = () :void => {
  emits('update:show', false)
}


</script>

<style scoped lang="scss">
.modal {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;

  &__content {
    margin: auto;
    background-color: #ffffff;
  }
}
</style>
