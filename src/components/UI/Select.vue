<template>
  <select>
    <option disabled value="">Выберите из списка</option>
    <option v-for="option of options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
  },
  options: {
    type: Array,
    default: () => [],
  },
})

const emits = defineEmits(
    ["update:modelValue"]
)

// function changeOption(event:any):void {
//   emits("update:modelValue", event.target.value);
// }

</script>
<style scoped lang="scss"></style>
