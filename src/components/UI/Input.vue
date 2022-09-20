<script setup lang="ts">
defineProps({
  modelValue: {
    type: [String, Number]
  },
})
defineEmits(
    ["update:modelValue"]
)
</script>
<template>
  <input
      type="text"
      class="input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
<style scoped lang="scss"></style>
