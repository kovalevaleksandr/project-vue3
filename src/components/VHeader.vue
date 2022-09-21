<template>
<header class="header">
  <div class="header__container">
    <div class="header__wrapper">
      <div class="header__logo">
        <img src="@/assets/images/logo.svg" alt="logo" class="header__img">
      </div>
      <nav>
        <router-link to="/">Fetch Table</router-link>
        <router-link to="/todolist">TODOList</router-link>
      </nav>
      <div class="header__login">
        <span>login</span>
      </div>
    </div>
  </div>
</header>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.header {
  padding: 23px 0;
  background: #FFFFFF;
  box-shadow: inset 0px -1px 0px #F0F0F0;
  margin-bottom: 60px;

  &__container{
    max-width: 1840px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
  }
}
</style>