<template>
  <section>
    <base-kanban>
      <template #path>
        <router-link to="/dashboard">Informatyk1 Dashboard</router-link> / Printers
      </template>
      <template #kanban>
        <base-column></base-column>
        <base-column></base-column>
        <base-column></base-column>
        <base-column></base-column>
      </template>
    </base-kanban>
    <router-view/>
  </section>
</template>

<script>
export default {
  components:{
  }
}
</script>

<style scoped>

</style>