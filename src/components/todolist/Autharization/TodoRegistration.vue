<template>
  <form class="form-reg">
    <label class="form-reg__item">
      <input type="text" placeholder="Имя">
    </label>
    <label class="form-reg__item">
      <input type="text" placeholder="Логин">
    </label>
    <label class="form-reg__item">
      <input
          class="form-reg__input"
          :type="props.typeInputPassword"
          placeholder="Пароль"
      >
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
    <label class="form-reg__item">
      <input :type="props.typeInputPassword" placeholder="Повтор пароля">
    </label>
    <Button class="form-reg__btn">Регистрация</Button>
  </form>
</template>
<script setup lang="ts">
import Button from "@/components/UI/Button.vue"

const emits = defineEmits([
  "showPassword"
]);

const props = defineProps<{
  typeInputPassword: string
}>();

const showPassword = () :void => {
  emits("showPassword")
}
</script>
<style lang="scss" scoped>
.form-reg {
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