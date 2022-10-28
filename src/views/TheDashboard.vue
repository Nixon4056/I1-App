<template>
  <section>
    <base-app>
      <template #header>
        <the-header></the-header>
      </template>
      <template #dashboard>
        <router-view v-slot="slotProps">
          <transition name="route" mode="out-in">
            <component :is="slotProps.Component"></component>
          </transition>
        </router-view>
      </template>
      <template #nav>
        <the-nav></the-nav>
      </template>
    </base-app>
  </section>
</template>

<script>
import BaseApp from '../components/UI/BaseApp.vue';
import TheHeader from '../components/layout/TheHeader.vue';
import TheNav from '../components/layout/TheNav.vue';
export default {
  components: {
    BaseApp,
    TheHeader,
    TheNav,
  },
};
</script>

<style scoped>
section {
  position: relative;
  width: 100%;
  height: 100vh;
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
