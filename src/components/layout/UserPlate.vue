<template>
  <div class="container">
    <div
      @mouseenter="showModal"
      @mouseleave="hideModal"
      class="plate"
      :class="{ plateHover: basic }"
    >
      <div :style="{ backgroundColor: employee.color }" class="initials">
        {{ employee.initials }}
      </div>
      <div v-if="!contentAdd" class="user">
        <h1>{{ employee.name }}</h1>
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
        <h3>{{ prop }}</h3>
      </div>
    </div>
    <transition name="modal">
      <user-modal
        @mouseenter="modalEntered = true"
        @mouseleave="hideModal"
        v-if="modalIsVisible && basic"
        :user="employee"
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
      type: Object,
    },
    prop: {
      type: String,
      default: '',
    },
    basic: {
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
      commentContent: '',
      showSave: false,
      modalIsVisible: false,
      modalEntered: false,
    };
  },
  methods: {
    addComment() {
      this.$store.commit('tasks/addComment', {
        id: this.taskID,
        content: {
          employee: 3422,
          text: this.commentContent,
          date: '5 Lis',
        },
      });
      this.commentContent = '';
    },
    showModal() {
      this.modalIsVisible = true;
    },
    hideModal() {
      setTimeout(() => {
        if(this.modalEntered === false){
          this.modalIsVisible = false;
        }
        this.modalEntered = false;
      }, 200);
    },
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
  transform: translateY(-30px);
}

.modal-leave-to {
  opacity: 0;
  transform: translateY(30px);
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
