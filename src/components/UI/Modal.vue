<template>
  <div class="modal" v-if="show" @click.stop="hideDialog">
    <div class="modal__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-modal",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
    },
  },
};
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
    color: #000000;
    margin: auto;
    background-color: #ffffff;
    width: 100%;
    max-width: 300px;
    padding: 30px;
  }
}
</style>
