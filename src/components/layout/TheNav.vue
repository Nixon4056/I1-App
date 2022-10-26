<template>
 <div class="logo">
    <the-logo></the-logo>
 </div>
 <ul class="links">
  <router-link to="/dashboard/printers"><li><nav-icons type="printer"/></li></router-link>
  <router-link to="/dashboard/serwis"><li><nav-icons type="serwis"/></li></router-link>
  <router-link to="/dashboard/it"><li><nav-icons type="it"/></li></router-link>
  <router-link to="/dashboard/docs"><li><nav-icons type="docs"/></li></router-link>
  <router-link to="/dashboard/zabbix"><li><nav-icons type="z"/></li></router-link>
  
  
  
  
 </ul>
</template>

<script>
export default {
};
</script>

<style scoped>
.logo{
    margin-bottom: 100px;
}
ul {
 text-decoration: none;
 list-style: none;
}
li{
    margin: .7rem 0;
}
</style>
