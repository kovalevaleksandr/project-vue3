<template>
  <form
      class="form-login"
      @submit.prevent="checkForm"
  >
    <div class="form-login__item">
      <label
          class="form-login__item"
          :class="{'login--error' : ERRORS.length}"
      >
            <MyInput
                class="form-login__input"
                v-model="AUTH_LOGIN"
                type="text"
                placeholder="Логин"
                @input="hideError"
            />
      </label>
      <p class="login--error-message" v-if="ERRORS.length">{{ERRORS}}</p>
    </div>

   <div class="password">
     <label
         class="form-login__item"
         :class="{'login--error' : ERRORS.length}"
     >
       <MyInput
           class="form-login__input"
           v-model="AUTH_PASSWORD"
           :type="props.typeInputPassword"
           placeholder="Пароль"
           @input="hideError"
       />
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
     <p class="login--error-message" v-if="ERRORS.length">{{ERRORS}}</p>
   </div>
    <Button class="form-login__btn">
      Войти
    </Button>
  </form>
</template>
<script setup lang="ts">
import {ref} from "vue";
import Button from "@/components/UI/Button.vue"
import MyInput from "@/components/UI/MyInput.vue";
import {validEmail, validPassword} from "@/services/Regex"

const AUTH_LOGIN = ref('')
const AUTH_PASSWORD = ref('')
const ERRORS = ref('')
const emit = defineEmits([
  "showPassword"
]);

const props = defineProps<{
  typeInputPassword: string
}>();

const checkForm = () => {
  ERRORS.value = '';
  if(!AUTH_LOGIN.value || !AUTH_PASSWORD.value) {
    ERRORS.value = ("Пустое поле");
  } else if (!validEmail(AUTH_LOGIN.value)) {
    ERRORS.value = ("Неверный эмейл");
  } else if (!validPassword(AUTH_PASSWORD.value)) {
    ERRORS.value = ("Неверный пароль");
  }
  if(!ERRORS.value.length) {
    console.log('good')
  }
  console.log(ERRORS.value)
};

const showPassword = () => {
 emit('showPassword')
}

const hideError = () :void => {
  ERRORS.value = []
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

.login {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  &--error {
    border: 1px solid #D60103;

    &-message {
      position: absolute;
      left: .4rem;
      bottom: .8rem;
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 20px;
      color: #D60103;
    }
  }
}

.password {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 6rem;

  &__icon {
    width: 2.1rem;
    height: 2.1rem;
    position: relative;
    margin-left: .4rem;
    cursor: pointer;
  }
}

</style>