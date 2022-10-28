<template>
  <Teleport to="#app">
    <base-modal>
      <template #header>
        <div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
        </div>
        <x-btn></x-btn>
      </template>
    </base-modal>
  </Teleport>
</template>

<script>
export default {
  props:['id'],
  data(){
    return{
      selectedTask: null,
    };
  },
  computed:{
    company(){
      return this.selectedTask.company
    }
  },
  created() {
    this.selectedTask = this.$store.getters['tasks/tasks'].find(
      (task) => task.id === this.id
    );
  },
};
</script>

<style scoped></style>
