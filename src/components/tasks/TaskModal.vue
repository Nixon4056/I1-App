<template>
 <base-modal>
  <template #header>
   <div>
    <the-company modal :text="task.company"></the-company>
   </div>
   <x-btn @click="$router.back()"></x-btn>
  </template>
  <template #inner1> </template>
  <template #inner2>
   <div class="details">
    <div>{{ task.id }}</div>
    <div>{{ task.title }}</div>
    <div>{{ task.description }}</div>
    <div>{{ task.employee.name }}</div>
    <div>{{ task.date }}</div>
    <div>{{ task.status }}</div>
   </div>
  </template>
 </base-modal>
</template>

<script>
export default {
 props: ["id"],
 data() {
  return {
   selectedTask: null,
  };
 },
 computed: {
  task() {
   return {
    id: this.selectedTask.id,
    company: this.selectedTask.company,
    title: this.selectedTask.title,
    description: this.selectedTask.description,
    employee: this.selectedTask.employee,
    date: this.selectedTask.date,
    status: this.selectedTask.status,
   };
  },
 },
 created() {
  this.selectedTask = this.$store.getters["tasks/tasks"].find(
   (task) => task.id == this.id
  );
 },
};
</script>

<style scoped>
.details{
  border: 1px grey solid;
}
</style>
