<template>
  <section>
    <base-kanban>
      <template #path>
        <router-link to="/dashboard">Informatyk1 Dashboard</router-link> / IT
      </template>
      <template #kanban>
        <base-column title="PRZYJĘTE">
          <draggable
            tag="ul"
            ghost-class="moving-card"
            :list="filteredTasks(1)"
            :group="tasks"
            :animation="200"
          >
            <the-task
              v-for="task in filteredTasks(1)"
              :key="task.id"
              :company="task.company"
              :description="task.description"
              :employee="task.employee"
            >
            </the-task>
          </draggable>
        </base-column>
        <base-column title="PRZYJĘTE2">
          <draggable
            tag="ul"
            ghost-class="moving-card"
            :list="filteredTasks(2)"
            :group="tasks"
            :animation="200"
          >
            <the-task
              v-for="task in filteredTasks(2)"
              :key="task.id"
              :company="task.company"
              :description="task.description"
              :employee="task.employee"
            >
            </the-task>
          </draggable>
        </base-column>
      </template>
    </base-kanban>
    <router-view />
  </section>
</template>

<script>
import Draggable from 'vuedraggable';
export default {
  components: {
    Draggable,
  },
  data() {
    return {
      tasks: [],
      newTasks: [],
    };
  },
  methods: {
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
    /*     startDrag(event, item) {
      console.log(event);
      event.target.style.backgroundColor = 'red';
      event.dataTransfer.dropEffect = 'move';
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('itemId', item.id);
    },
    onDrop(event, status) {
      const itemId = event.dataTransfer.getData('itemId');
      const item = this.tasks.find((task) => task.id == itemId);
      item.status = status;
    }, */
  },
  created() {
    this.tasks = this.$store.getters['tasks/tasks'];
  },
};
</script>

<style scoped>
.moving-card {
  background-color: black;
}
</style>
