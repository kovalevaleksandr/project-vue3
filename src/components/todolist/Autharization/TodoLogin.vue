<template>
  <form class="form-login">
    <label class="form-login__item login">
      <input
          class="form-login__input"
          type="text"
          placeholder="Логин">
    </label>
    <label
        class="form-login__item">
      <input
          class="form-login__input"
          :type="props.typeInputPassword"
          placeholder="Пароль">

      <i
          class="password__icon"
          @click="showPassword"
      >
        <img
            class="img"
            src="@/assets/images/password/show-pass.svg"
            alt="watch"
            v-if="typeInputPassword === 'Password'"
        >
        <img
            class="img"
            src="@/assets/images/password/show-pass-crossed.svg"
            alt="watch"
            v-else
        >
      </i>
    </label>
    <Button class="form-login__btn">
      Войти
    </Button>
  </form>
</template>
<script setup lang="ts">
import Button from "@/components/UI/Button.vue"
import {ref} from "vue";

const emit = defineEmits([
  "showPassword"
]);

const props = defineProps<{
  typeInputPassword: string
}>();

const showPassword = () => {
 emit('showPassword')
}

</script>
<style scoped lang="scss">
.form-login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__item {
    display: flex;
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #DBE0E9;
    border-radius: 2px;
    padding: .8rem 1.2rem;
    margin-bottom: 2.8rem;

    &:last-of-type {
      margin-bottom: 6rem;
    }
  }

  &__btn {
    width: 100%;
    padding: .8rem 16rem;
    background: #1859FF;
    border-radius: 2px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
  }

  &__input {
    flex: 1;
  }
}

.password {

  &__icon {
    width: 2.1rem;
    height: 2.1rem;
    position: relative;
    margin-left: .4rem;
    cursor: pointer;
  }
}

</style>