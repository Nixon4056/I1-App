<template>
  <base-modal>
    <template #header>
      <div>
        <the-company modal :text="task.company"></the-company>
      </div>
      <x-btn @click="$router.back()"></x-btn>
    </template>
    <template #inner1>
      <div class="title">
        <h1>TITLE<div>{{ task.title }}</div></h1>
      </div>
      <div class="description">
        <h1>Opis</h1>
        <div>{{ task.description }}</div>
      </div>
    </template>
    <template #inner2>
      <div>test</div>
      <div class="details">
        <div class="row responsible">
          <h1>Osoba przypisana</h1>
          <div>{{ task.employee.name }}</div>
        </div>
        <div class="row user">
          <h1>Osoba zgłaszająca</h1>
          <div>{{ task.employee.name }}</div>
        </div>
        <div class="row date">
          <h1>Termin</h1>
          <div>{{ task.date }}</div>
        </div>
        <div class="row status">
          <h1>Status</h1>
          <div>{{ task.status }}</div>
        </div>
      </div>
    </template>
  </base-modal>
</template>

<script>
export default {
  props: ['id'],
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
    this.selectedTask = this.$store.getters['tasks/tasks'].find(
      (task) => task.id == this.id
    );
  },
};
</script>

<style scoped>
.details {
  border: 1px #f3f3f3 solid;
  border-radius: 5px;
  padding: 1rem;
}
</style>
