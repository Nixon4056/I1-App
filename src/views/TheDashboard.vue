<template>
  <section>
    <base-app>
      <template #header>
       <the-header></the-header>
      </template>
      <template #dashboard> 
        <router-view/>
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
  components:{
    BaseApp,
    TheHeader,
    TheNav
  }
}
</script>

<style scoped>
section{
  position: relative;
  width: 100%;
  height: 100vh;
}
</style>