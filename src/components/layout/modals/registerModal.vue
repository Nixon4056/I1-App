<template>
 <div class="register">
  <form @submit.prevent="register">
   <div class="modal">
    <div class="logo">
     <the-logo big width="230px"></the-logo>
    </div>
    <div class="input__group">
     <div class="label"><h3>Wypełnij Forlumarz</h3></div>
     <input
      @blur="clearValidity('name')"
      :class="{ invalid: !name.isValid }"
      class="name"
      type="text"
      placeholder="Imię"
      v-model.trim="name.val"
     />
     <p v-if="!name.isValid">Wpisz Imię.</p>
     <input
      @blur="clearValidity('surname')"
      :class="{ invalid: !surname.isValid }"
      class="surname"
      type="text"
      placeholder="Nazwisko"
      v-model.trim="surname.val"
     />
     <p v-if="!surname.isValid">Wpisz Nazwisko.</p>
     <input
      @blur="clearValidity('email')"
      :class="{ invalid: !email.isValid }"
      class="email"
      type="text"
      placeholder="Email"
      v-model.trim="email.val"
     />
     <p v-if="!email.isValid">Wpisz Email.</p>
     <input
      @blur="clearValidity('password')"
      :class="{ invalid: !password.isValid }"
      class="password"
      type="password"
      minlength="8"
      placeholder="Hasło"
      v-model="password.val"
     />
     <p v-if="!password.isValid">Wpisz Hasło.</p>
     <div class="color__rectangle">
      <div
       @click="colorPickerVisible = true"
       :style="{ backgroundColor: colorPicked }"
       class="color__picked"
      ></div>
      <h1>Wybierz kolor</h1>
      <div @click="applyColor" class="applyBtn" v-if="colorPickerVisible">
       <h1>Zastosuj</h1>
      </div>
     </div>
     <ColorPicker
      v-if="colorPickerVisible"
      default-format="hex"
      alphaChannel="hide"
      @color-change="updateColor"
     />
    </div>
    <div class="buttons__container">
     <button class="login__btn">
      <h1>Zarejestruj</h1>
      <login-icon></login-icon>
     </button>
     <p v-if="!formIsValid">Wprowadź dane.</p>
    </div>
    <div class="google_auth">
     <div class="auth__text">
      <div></div>
      <h3>lub zarejestruj przez</h3>
      <div></div>
     </div>
     <google-btn width="80px"></google-btn>
    </div>
   </div>
  </form>
 </div>
</template>

<script>
import GoogleBtn from "../../svg/GoogleBtn.vue";
import LoginIcon from "../../svg/LoginIcon.vue";
import { ColorPicker } from "vue-accessible-color-picker";
export default {
 components: {
  GoogleBtn,
  LoginIcon,
  ColorPicker,
 },
 data() {
  return {
   colorPicked: "black",
   colorPickerVisible: false,
   name: {
    val: "",
    isValid: true,
   },
   surname: {
    val: "",
    isValid: true,
   },
   email: {
    val: "",
    isValid: true,
   },
   password: {
    val: "",
    isValid: true,
   },
   formIsValid: true,
  };
 },
 methods: {
  //COLORPICKER
  applyColor() {
   this.colorPickerVisible = false;
  },
  updateColor(eventData) {
   this.colorPicked = eventData.cssColor;
  },
  validateForm() {
   this.formIsValid = true;
   if (this.name.val === "") {
    this.name.isValid = false;
    this.formIsValid = false;
   }
   if (this.surname.val === "") {
    this.surname.isValid = false;
    this.formIsValid = false;
   }
   if (this.email.val === "") {
    this.email.isValid = false;
    this.formIsValid = false;
   }
   if (this.password.val === "") {
    this.password.isValid = false;
    this.formIsValid = false;
   }
  },
  clearValidity(input) {
   this[input].isValid = true;
  },
  register() {
   this.validateForm();

   if (!this.formIsValid) {
    return;
   }
   const data = {
    id: Date.now(),
    name: this.name.val + " " + this.surname.val,
    initials: (this.name.val[0] + this.surname.val[0]).toUpperCase(),
    email: this.email.val,
    standing: "not assigned",
    color: this.colorPicked,
    admin: false,
    kanbans: ["dashboard"],
   };
   this.$store.dispatch("users/register", data);
   this.$router.replace("/auth/login");
  },
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
.color__rectangle {
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-bottom: 5px;
}
.color__rectangle div {
}
.color__rectangle h1 {
 font-size: 0.8rem;
 font-weight: 400;
 text-align: center;
}
.color__picked {
 width: 1.5rem;
 border-radius: 6px;
 border: 3px white solid;
 aspect-ratio: 1/1;
 background-color: black;
 cursor: pointer;
 transition: 0.2s all;
}
.color__picked:hover {
 border-radius: 50%;
 transform: scale(1.2);
}
.applyBtn {
 cursor: pointer;
 color: #ba1e76;
 background-color: white;
 padding: 0.1rem 0.4rem;
 border-radius: 3px;
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
 font-size: 0.8rem;
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
p {
 width: 100%;
 color: rgba(179, 23, 23, 0.486) !important;
 font-size: 0.7rem;
 margin-top: -0.4rem;
}
.invalid {
 color: rgba(179, 23, 23, 0.486) !important;
 border: 1px solid rgba(179, 23, 23, 0.486) !important;
}
</style>
