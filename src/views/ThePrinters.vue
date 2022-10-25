<template>
  <section>
    <base-kanban>
      <template #path>
        <router-link to="/dashboard">Informatyk1 Dashboard</router-link> / Printers
      </template>
      <template #kanban>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
      </template>
    </base-kanban>
    <router-view/>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>