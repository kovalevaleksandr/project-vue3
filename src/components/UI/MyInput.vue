<template>
  <input
      type="text"
      class="input"
      :value="modelValue"
      @input="getValue"
  />
</template>
<script setup lang="ts">

const props = defineProps<{
  modelValue: string,
}>()

const emits = defineEmits([
    "update:modelValue",
    ]
)
const getValue = (event: { target: { value: any; }; }) => {
  emits("update:modelValue", event.target.value)
}
</script>
<style scoped lang="scss">
.input {
  display: block;
  height: 100%;
}
</style>
