<template>
 <section class="login__section">
  <div class="backgroundImage">
   <img src="../assets/assets/LogoI1.png" alt="" />
  </div>
  <form @submit.prevent="submit">
   <div class="modal">
    <div class="logo">
     <the-logo big width="230px"></the-logo>
    </div>
    <div class="input__group">
     <div class="label"><h3>Login & hasło</h3></div>
     <input class="login" type="text" placeholder="Login" />
     <input class="password" type="text" placeholder="Hasło" />
    </div>
    <button type="submit" class="login__btn">
     <h1>Zaloguj</h1>
     <login-icon></login-icon>
    </button>
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
 </section>
</template>

<script>
import GoogleBtn from "../components/svg/GoogleBtn.vue";
import LoginIcon from "../components/svg/LoginIcon.vue";
export default {
 components: {
  GoogleBtn,
  LoginIcon,
 },
 methods: {
  test() {
   alert("test");
  },
 },
};
</script>

<style scoped>
.logo {
}
.login__section {
 display: flex;
 align-items: center;
 justify-content: left;
 padding: 0 8rem;
 width: 100%;
 height: 100vh;
 position: relative;
 overflow: hidden;
}
.modal {
 padding: 3rem 2rem;
 min-height: 60%;
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
 font-size: 1rem;
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
.backgroundImage {
 position: absolute;
 bottom: 3rem;
}
.backgroundImage img {
 width: 90%;
}
</style>
