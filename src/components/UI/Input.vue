<template>
  <input
      type="text"
      class="input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
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
<style scoped lang="scss">
.input {
  display: block;
  border: 1px solid #1a73e8;
  border-radius: 5px;
  height: 100%;
  padding: 5px;


}
</style>
