<template>
  <input type="text" class="input" :value="modelValue" @input="updateInput" />
</template>

<script>
export default {
  name: "v-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped lang="scss"></style>
