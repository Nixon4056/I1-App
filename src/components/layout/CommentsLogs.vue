<template>
  <div class="container">
    <div v-if="comments" class="comments">
      <!-- DATABASE CHANGE THIS -->
      <user-plate
        :taskID="task.id"
        contentAdd
        basic
        :employee="getEmployeeByID(task.employee)"
      ></user-plate>
      <div class="comment" v-for="comment in task.comments" :key="comment.id">
        <user-plate
          v-if="comment.id"
          :employee="getEmployeeByID(comment.employee)"
          :date="comment.date"
        ></user-plate>
        <div class="description">
          {{ comment.text }}
        </div>
      </div>
    </div>
    <div v-else-if="logs" class="logs">
      <div class="log" v-for="log in task.logs" :key="log.id">
        <user-plate
          :employee="getEmployeeByID(log.employee)"
          :date="log.date"
        ></user-plate>
        <div class="description">
          {{ log.text }}
        </div>
      </div>
    </div>
    <div v-else class="logs__comments">
      <div class="comments">
        <div class="comment" v-for="comment in task.comments" :key="comment.id">
          <user-plate
            v-if="comment.id"
            :employee="getEmployeeByID(comment.employee)"
            :date="comment.date"
          ></user-plate>
          <div class="description">
            {{ comment.text }}
          </div>
        </div>
      </div>
      <div class="logs">
        <div class="log" v-for="log in task.logs" :key="log.id">
          <user-plate
            :employee="getEmployeeByID(log.employee)"
            :date="log.date"
          ></user-plate>
          <div class="description">
            {{ log.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      require: true,
    },
    comments: {
      type: Boolean,
      default: false,
    },
    logs: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    getEmployeeByID(id) {
      console.log(id)
      const users = this.$store.getters['users/getUsers'];
      return users.find((user) => user.id === id).id;
    },
  },
  created(){
    /* console.log(this.task.logs)
    console.log(this.task.comments) */
  }
};
</script>

<style scoped>
.comment, .log {
  margin: 1rem 0;
}
.description {
  margin-left: 40px;
}
</style>
