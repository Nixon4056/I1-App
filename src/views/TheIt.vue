<template>
  <section>
    <base-kanban>
      <template #path>
        <router-link to="/dashboard">Informatyk1 Dashboard</router-link> / IT
      </template>
      <template #kanban>
        <base-column
          v-for="(column, index) in columns"
          :key="column.name"
          @drop="onDrop($event, index + 1)"
          @dragenter.prevent
          @dragover.prevent
          :title="column.name"
          :counter="filteredTasks(index + 1).length"
        >
          <the-task
            v-for="task in filteredTasks(index + 1)"
            :draggable="true"
            @dragstart="startDrag($event, task)"
            :key="task.id"
            :id="task.id"
            :company="task.company"
            :title="task.title"
            :employee="filteredEmployee(task.employee)"
          >
          </the-task>
        </base-column>
      </template>
    </base-kanban>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </section>
</template>

<script>
export default {
  data() {
    return {
      taskIsAdding: false,
      tasks: [],
      users: [],
      columns: [],
    };
  },
  methods: {
    filteredEmployee(id){
      return this.users.find((user) => user.id === id)
    },
    filteredTasks(status) {
      return this.tasks.filter((task) => {
        if (task.status === status) {
          return true;
        }
        if (task.status === status) {
          return true;
        }
        if (task.status === status) {
          return true;
        }
        if (task.status === status) {
          return true;
        }
        return false;
      });
    },
    startDrag(event, item) {
      event.dataTransfer.dropEffect = 'move';
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('itemId', item.id);
    },
    onDrop(event, status) {
      const itemId = event.dataTransfer.getData('itemId');
      const item = this.tasks.find((task) => task.id == itemId);
      item.status = status;
    },
  },
  created() {
    this.users = this.$store.getters['users/getUsers'];
    this.tasks = this.$store.getters['tasks/tasks'];
    this.columns = this.$store.getters['columns/columns'];
  },
};
</script>

<style scoped>
.route-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.route-enter-active {
  transition: all 0.2s ease-out;
}

.route-leave-active {
  transition: all 0.2s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
