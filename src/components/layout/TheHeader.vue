<template>
    <div>
      <user-icon></user-icon>
      <h2>Mateusz Koszałka</h2>
    </div>
    <router-link to="/auth"><login-btn></login-btn></router-link>
</template>

<script>
export default {

}
</script>

<style scoped>

div{
  display: flex;
  align-items: center;
  margin: 0 2rem;
}
h2{
    font-size: .8rem;
    font-weight: 300;
    margin: 0 .3rem;
}
</style>