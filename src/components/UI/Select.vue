<template>
  <select
    class="select"
    v-model="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
  >
    <option class="select__option--disabled" disabled value="">
      Выберите из списка
    </option>
    <option
      class="select__option"
      v-for="option of options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string
  options: object[]
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: String,
  options: () => []
})

const emits = defineEmits(["update:modelValue"]);
</script>
<style scoped lang="scss">
.select {
  display: block;
  border: 1px solid #aaaaaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  padding: 5px;
}
</style>
