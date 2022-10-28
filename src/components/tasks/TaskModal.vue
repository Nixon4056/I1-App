<template>
  <Teleport to="#app">
    <base-modal>
      <template #header>
        <div>
          <div>{{task.id}}</div>
          <div>{{task.company}}</div>
          <div>{{task.title}}</div>
          <div>{{task.description}}</div>
          <div>{{task.employee}}</div>
          <div>{{task.date}}</div>
          <div>{{task.status}}</div>
        </div>
        <x-btn @click="$router.back()"></x-btn>
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
    task(){
      return {
        id: this.selectedTask.id,
        company: this.selectedTask.company,
        title: this.selectedTask.title,
        description: this.selectedTask.description,
        employee: this.selectedTask.employee,
        date: this.selectedTask.date,
        status: this.selectedTask.status,
      }
    },
  },
  created() {
    console.log(this.id)
    this.selectedTask = this.$store.getters['tasks/tasks'].find(
      (task) => task.id === this.id
    );
  },
};
</script>

<style scoped></style>
