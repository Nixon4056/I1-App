<template>
 <div class="button">
  <h2>wyloguj</h2>
  <login-icon></login-icon>
 </div>
</template>

<script>
import loginIcon from '../svg/LoginIcon.vue';
export default {
    components:{
        loginIcon
    }
};
</script>

<style scoped>
.button{
    background-color: white;
    border-radius: 20px;
    color: #BA1E76;
    padding: .3rem 1.5rem;
    cursor: pointer;
    transition: 0.3s all;
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25));
}
h2 {
 font-size: 0.8rem;
 font-weight: 300;
 margin: 0 0.3rem;
}
</style>
