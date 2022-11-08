<template>
 <section class="login__section">
  <div class="backgroundImage">
   <img src="../assets/assets/LogoI1.png" alt="" />
  </div>
  <router-view v-slot="slotProps">
   <transition name="modal" mode="out-in">
    <component :is="slotProps.Component"></component>
   </transition>
  </router-view>
 </section>
</template>

<script>
export default {};
</script>

<style scoped>
a {
 width: 100%;
}
.login__section {
 display: flex;
 align-items: center;
 justify-content: left;
 padding: 0 10%;
 width: 100%;
 height: 100vh;
 position: relative;
 overflow: hidden;
}
.backgroundImage {
 position: absolute;
 bottom: 6rem;
}
.backgroundImage img {
 width: 90%;
}
.modal-enter-from {
  opacity: 0;
  transform: translateX(200px);
}

.modal-leave-to {
  opacity: 0;
  transform: translateX(-200px);
}

.modal-enter-active {
  transition: all 0.3s ease-out;
}

.modal-leave-active {
  transition: all 0.3s ease-in;
}

.modal-enter-to,
.modal-leave-from {
  opacity: 1;
  transform: translateX(0px);
}
</style>
