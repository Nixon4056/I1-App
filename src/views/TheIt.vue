<template>
  <section>
    <base-kanban>
      <template #path>
        <router-link to="/dashboard">Informatyk1 Dashboard</router-link> / IT
      </template>
      <template #kanban>
        <base-column 
          @drop="onDrop($event, 1)"
          @dragenter.prevent
          @dragover.prevent
          title="PRZYJĘTE">
          <the-task
            v-for="task in filteredTasks(1)"
            :draggable="true"
            @dragstart="startDrag($event, task)"
            :key="task.id"
            :company="task.company"
            :description="task.description"
            :employee="task.employee"
          >
          </the-task>
        </base-column>
        <base-column 
          @drop="onDrop($event, 2)"
          @dragenter.prevent
          @dragover.prevent
          title="W REALIZACJI">
          <the-task
            v-for="task in filteredTasks(2)"
            :draggable="true"
            @dragstart="startDrag($event, task)"
            :key="task.id"
            :company="task.company"
            :description="task.description"
            :employee="task.employee"
          >
          </the-task>
        </base-column>
        <base-column 
          @drop="onDrop($event, 3)"
          @dragenter.prevent
          @dragover.prevent
          title="ZREALIZOWANO">
          <the-task
            v-for="task in filteredTasks(3)"
            :draggable="true"
            @dragstart="startDrag($event, task)"
            :key="task.id"
            :company="task.company"
            :description="task.description"
            :employee="task.employee"
          >
          </the-task>
        </base-column>
        <base-column 
          @drop="onDrop($event, 4)"
          @dragenter.prevent
          @dragover.prevent
          title="ODŁOŻONO">
          <the-task
            v-for="task in filteredTasks(4)"
            :draggable="true"
            @dragstart="startDrag($event, task)"
            :key="task.id"
            :company="task.company"
            :description="task.description"
            :employee="task.employee"
          >
          </the-task>
        </base-column>
      </template>
    </base-kanban>
    <router-view />
  </section>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    filteredTasks(status) {
      return this.tasks.filter((task) => {
        if(task.status === status){
          return true
        }
        if(task.status === status){
          return true
        }
        if(task.status === status){
          return true
        }
        if(task.status === status){
          return true
        }
        return false
      })
    },
    startDrag(event, item){
      console.log(event)
      event.target.style.backgroundColor = 'red'
      event.dataTransfer.dropEffect = 'move'
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.setData('itemId', item.id)
    },
    onDrop(event, status){
      const itemId = event.dataTransfer.getData('itemId');
      const item = this.tasks.find((task) => task.id == itemId);
      item.status = status;
    }
  },
  created() {
    this.tasks = this.$store.getters['tasks/tasks'];
    console.log(this.tasks)
  },
};
</script>

<style scoped></style>
