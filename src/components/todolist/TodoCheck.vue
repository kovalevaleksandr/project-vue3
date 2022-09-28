<template>
  <label class="checkbox">
    <input
        class="checkbox__input"
        type="checkbox"
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
    >
    <i class="checkbox-icon"><img class="img" src="@/assets/images/check.svg" alt="V"></i>
  </label>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean,
}>()
const emits = defineEmits(
    ["update:modelValue"]
)
</script>

<style scoped lang="scss">
.checkbox {
  cursor: pointer;

  &__input {
    display: none;
  }

  .checkbox-icon {
  }
}


</style>