<template>
  <footer class="footer">
<div class="footer__container">
  <div class="footer__wrapper">
    <p>Exceed To-Do list </p>
  </div>
</div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.footer {
  padding: 23px 0;
  background: #F0F0F0;
  box-shadow: inset 0px -1px 0px #F0F0F0;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #606060;

  &__container {
    max-width: 1040px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>