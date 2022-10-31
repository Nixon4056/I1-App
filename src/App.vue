<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
export default {};
</script>
<style>
.backdrop {
  visibility: hidden;
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  transition: 0.3s all;
}
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,200;1,300;1,500&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: inherit;
}
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(
      419deg,
      rgba(71, 71, 71, 0.05),
      rgba(71, 71, 71, 0.05) 27%,
      hsla(0, 0%, 82%, 0.05) 0,
      hsla(0, 0%, 82%, 0.05)
    ),
    linear-gradient(
      474deg,
      rgba(63, 63, 63, 0.05),
      rgba(63, 63, 63, 0.05) 43%,
      hsla(0, 0%, 54%, 0.05) 0,
      hsla(0, 0%, 54%, 0.05)
    ),
    linear-gradient(
      503deg,
      rgba(58, 58, 58, 0.05),
      rgba(58, 58, 58, 0.05) 24%,
      hsla(0, 0%, 39%, 0.05) 0,
      hsla(0, 0%, 39%, 0.05)
    ),
    linear-gradient(
      416deg,
      rgba(47, 47, 47, 0.05),
      rgba(47, 47, 47, 0.05) 45%,
      hsla(0, 0%, 82%, 0.05) 0,
      hsla(0, 0%, 82%, 0.05)
    ),
    linear-gradient(270deg, #d136ca, #b4165f);
}
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
