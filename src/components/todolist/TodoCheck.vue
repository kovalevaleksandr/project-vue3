<template>
  <input class="checkbox" type="checkbox" :value="modelValue" @change="$emit('update:modelValue', $event.target.checked)">
</template>

<script setup lang="ts">
const props = defineProps<{
  value: boolean,
}>()
defineEmits(
    ["update:modelValue"]
)
</script>

<style scoped>

</style>