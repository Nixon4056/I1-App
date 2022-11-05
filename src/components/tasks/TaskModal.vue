<template>
  <base-modal>
    <template #header>
      <div>
        <the-company modal :text="task.company"></the-company>
        <div class="title">
          <h1>{{ task.title }}</h1>
        </div>
      </div>
      <x-btn @click="back"></x-btn>
    </template>
    <template #inner1>
      <div class="description inner1Section">
        <h1>Opis</h1>
        <div
          @click="DescriptionEditorHandler(true)"
          v-if="!editDescription"
          class="descriptionHandler"
        >
          <h1>{{ task.description }}</h1>
        </div>
        <div v-else class="description__change">
          <textarea
            v-model="newDescription"
            name="description"
            id="description"
            :placeholder="
              !task.description ? 'Dodaj opis...' : task.description
            "
          ></textarea>
          <save-buttons
            @save="changeDescription"
            @cancel="DescriptionEditorHandler(false)"
            cancelBtn
          ></save-buttons>
        </div>
      </div>
      <div class="sub__task__adder inner1Section">
        <h1>Zlecenia dodatkowe</h1>
        <!-- <base-subtasks-container></base-subtasks-container> -->
      </div>
      <div class="sub__task__adder inner1Section">
        <h1>Aktywność</h1>
        <base-log-container :task="task"></base-log-container>
      </div>
    </template>
    <template #inner2>
      <div>test</div>
      <div class="details">
        <div class="row responsible">
          <h1>Osoba przypisana</h1>
          <user-plate basic :employee="task.employee"></user-plate>
        </div>
        <div class="row user">
          <h1>Osoba zgłaszająca</h1>
          <user-plate basic :employee="task.employee"></user-plate>
        </div>
        <div class="row date">
          <h1>Termin</h1>
          <div>{{ task.date }}</div>
        </div>
        <div class="row status">
          <h1>Status</h1>
          <div>{{ status }}</div>
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
      newDescription: '',
      selectedTask: null,
      editDescription: false,
    };
  },
  methods: {
    DescriptionEditorHandler(condition) {
      this.editDescription = condition;
      this.newDescription =
        this.task.description === 'Dodaj opis...'
          ? this.newDescription
          : this.task.description;
    },

    changeDescription() {
      this.$store.commit('tasks/changeDescription', {
        id: this.selectedTask.id,
        newDescription: !this.newDescription ? 'Dodaj opis...' : this.newDescription,
      });
      this.editDescription = false;
    },
    back() {
      this.$router.back();
      this.DescriptionEditorHandler(false);
    },
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
        comments: this.selectedTask.comments,
        logs: this.selectedTask.logs,
      };
    },
    status(){
          if(this.task.status == 1){
            return 'Przyjęto'
          }else if(this.task.status == 2){
            return 'W realizacji'
          }else if(this.task.status == 3){
            return 'zrealizowano'
          }else{
            return 'Odłożono'
          }
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
.title {
  margin: 1rem 0;
  font-size: 1.6rem;
}
.description {
  margin: 1rem 0;
}
.inner1Section{
  margin: 1rem 0;
}
.inner1Section h1 {
  font-size: 1rem;
  max-width: 100%;
}
.row {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  margin: 1rem 0;
}
.row h1 {
  min-width: 150px;
}
.descriptionHandler {
  transition: 0.3s all;
  margin: 0 -0.5rem;
  padding: 0.2rem 0.5rem;
  border-radius: 3px;
  cursor: pointer;
}
.descriptionHandler h1 {
  font-weight: 400;
  word-wrap: break-word;
}
.descriptionHandler:hover {
  background-color: #f3f3f3;
}
#description {
  width: 100%;
  height: fit-content;
  padding: 1rem;
  resize: none;
  outline: none !important;
  border: 1px #f3f3f3 solid;
  font-family: 'Poppins', sans-serif;
}
</style>
