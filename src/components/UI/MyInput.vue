<template>
  <input
      type="text"
      class="input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
<script setup lang="ts">

const props = defineProps<{
  modelValue: [String, Number],
}>()

const emits = defineEmits(
    ["update:modelValue"]
)
</script>
<style scoped lang="scss">
.input {
  display: block;
  height: 100%;
}
</style>
