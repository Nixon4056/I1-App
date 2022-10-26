<template>
  <header>
    <slot name="path"></slot> 
  </header>
  <section>
    <slot name="kanban"></slot>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
header{
  left: 0;
  padding: 1rem 0;
  font-weight: 300;
}
section{
  padding: 0.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: auto;
}
</style>