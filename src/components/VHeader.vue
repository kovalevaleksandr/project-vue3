<template>
  <header class="header">
    <div class="header__container">
      <div class="header__wrapper">
        <div class="header__logo">
          <router-link class="header__nav-item" to="/">
            <img src="@/assets/images/logo.svg" alt="logo" class="header__logo-img">
          </router-link>
        </div>
        <nav class="header__nav">
          <router-link class="header__nav-item" to="/">Todo</router-link>
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

  &__container {
    max-width: 1840px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }

  &__wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  &__logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;

    &-img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  &__nav {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 2rem;

    &-item {
      margin-right: 3rem;
    }
  }


}
</style>