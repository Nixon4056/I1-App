<template>
  <div class="container">
    <div
      @mouseenter="showModal"
      @mouseleave="hideModal"
      class="plate"
      :class="{ plateHover: modal }"
    >
      <div :style="{ backgroundColor: filteredEmployee(employee).color }" class="initials">
        {{ filteredEmployee(employee).initials }}
      </div>
      <div v-if="!contentAdd" class="user">
        <h1>{{ filteredEmployee(employee).name }}</h1>
      </div>
      <div v-else class="addContent">
        <textarea
          v-model="commentContent"
          placeholder="Dodaj komentarz..."
          name="comment__adder"
          id="comment__adder"
        ></textarea>
        <save-buttons @save="addComment"></save-buttons>
      </div>
      <div v-if="!basic" class="prop">
        <h3>{{ timeHandler(date) }}</h3>
      </div>
    </div>
    <transition name="modal">
      <user-modal
        @mouseenter="modalEntered = true"
        @mouseleave="hideModal"
        v-if="modalIsVisible && modal"
        :user="filteredEmployee(employee)"
      ></user-modal>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    taskID: {
      type: Number,
      require: true,
      default: 0,
    },
    employee: {
      type: Number,
      default: 1667936042712
    },
    date: {
      type: Number,
      default: 0,
    },
    basic: {
      type: Boolean,
      default: false,
    },
    modal: {
      type: Boolean,
      default: false,
    },
    contentAdd: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      users: [],
      commentContent: '',
      showSave: false,
      modalIsVisible: false,
      modalEntered: false,
    };
  },
  methods: {
    filteredEmployee(id){
      return this.users.find((user) => user.id === id)
    },
    addComment() {
      const comment = {
        taskId: this.taskID,
        id: Date.now(),
        employee: this.employee,
        text: this.commentContent,
        date: Date.now(),
      }
      this.$store.dispatch('tasks/addComment', comment);
      this.commentContent = '';
    },
    showModal() {
      this.modalIsVisible = true;
    },
    hideModal() {
      setTimeout(() => {
        if (this.modalEntered === false) {
          this.modalIsVisible = false;
        }
        this.modalEntered = false;
      }, 300);
    },
    timeHandler(time){
      const now = Date.now();
      const minutes = 'Dodano ' + Math.round((now - time)/60000) + ' minut(y) temu';
      const hours = 'Dodano ' + Math.round((now - (minutes / 60))/60000) + ' minut(y) temu';
      if(minutes < 1){
        return 'Dodano mniej ni?? minut?? temu';
      }else{
        return minutes >= 60 ? hours : minutes;
      } 
    }
  },
  created() {
    this.users = this.$store.getters['users/getUsers'];
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  position: relative;
}
.plate {
  display: flex;
  align-items: flex-start;
  justify-content: left;
  gap: 10px;
  position: relative;
  transition: 0.3s background-color;
  padding: 2px 5px;
  border-radius: 3px;
}
.plateHover:hover {
  background-color: #f3f3f3;
}
.initials {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  font-size: 0.7rem;
  min-width: 25px;
  aspect-ratio: 1/1;
  color: white;
  border-radius: 50%;
}
h1 {
  font-size: 0.9rem;
  font-weight: 500;
}
h3 {
  font-weight: 300;
  font-size: 0.8rem;
}
.addContent {
  width: 100%;
}
.addContent textarea {
  width: 100%;
  height: fit-content;
  padding: 1rem;
  resize: none;
  outline: none !important;
  border: 1px #f3f3f3 solid;
  font-family: 'Poppins', sans-serif;
}

.modal-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.modal-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.modal-enter-active {
  transition: all 0.3s ease-out;
}

.modal-leave-active {
  transition: all 0.3s ease-in;
}

.modal-enter-to,
.modal-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
