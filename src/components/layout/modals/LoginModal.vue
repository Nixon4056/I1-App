<template>
 <div class="login">
  <form @submit.prevent="submit">
   <div class="modal">
    <div class="logo">
     <the-logo big width="230px"></the-logo>
    </div>
    <div class="input__group">
     <div class="label"><h3>Login & hasło</h3></div>
     <input class="login" type="text" placeholder="Email" />
     <input class="password" type="text" placeholder="Hasło" />
    </div>
    <div class="buttons__container">
     <button type="submit" class="login__btn">
      <h1>Zaloguj</h1>
      <login-icon></login-icon>
     </button>
      <div @click="registerPage" class="login__btn">
       <h1>Zarejestruj</h1>
       <login-icon></login-icon>
      </div>
    </div>
    <div class="google_auth">
     <div class="auth__text">
      <div></div>
      <h3>lub zaloguj przez</h3>
      <div></div>
     </div>
     <google-btn width="80px"></google-btn>
    </div>
   </div>
  </form>
 </div>
</template>

<script>
import GoogleBtn from '../../svg/GoogleBtn.vue';
import LoginIcon from '../../svg/LoginIcon.vue';
export default {
  props: ['register'],
  components: {
    GoogleBtn,
    LoginIcon,
  },
  data() {
    return {};
  },
  methods: {
    registerPage(){
        this.$router.replace('register')
    }
  },
};
</script>

<style scoped>
a {
  width: 100%;
}
.modal {
  padding: 3rem 2rem;
  min-height: 70%;
  display: flex;
  align-items: center;
  justify-content: top;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.7);
  gap: 20px;
  z-index: 10;
  border-radius: 15px;
  border-width: 0px 1px 1px 0px;
  border-style: solid;
  border-color: #ffffff;
  box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(8px);
}
.label h3 {
  font-size: 0.7rem;
  font-weight: 300;
}
.input__group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}
input {
  outline: none !important;
  border: 1px white solid;
  border-radius: 3px;
  background-color: transparent;
  padding: 0.6rem;
  width: 100%;
  color: white;
}
input::placeholder {
  color: white;
  font-family: Poppins;
}
.buttons__container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  flex-direction: column;
}
.login__btn {
  font-family: Poppins;
  text-align: center;
  background-color: white;
  color: #ba1e76;
  padding: 0.3rem 1.4rem;
  width: 100%;
  cursor: pointer;
  border-radius: 3px;
  transition: 0.3s all;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  outline: none !important;
  border: none;
}
.login__btn:hover {
  background-color: rgb(226, 226, 226);
}
.login__btn:hover svg {
  transform: translateX(3px);
}
.login__btn h1 {
 font-size: .8rem;
 font-weight: 500;
}
.google_auth {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 5px;
}
.auth__text {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 15px;
}
.auth__text div {
  height: 1px;
  width: 100%;
  background-color: #ba1e76;
}
.google_auth .auth__text h3 {
  font-weight: 300;
  color: #ba1e76;
  font-size: 0.75rem;
  white-space: nowrap;
}
</style>