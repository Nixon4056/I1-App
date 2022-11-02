<template>
  <div class="task prepared">
    <header>
      <div class="company" @click="listHandler('companies')">
        <div>
          <font-awesome-icon icon="fa-solid fa-industry" />
        </div>
        <h1>{{ getChoiceCompany.name }}</h1>
        <font-awesome-icon
          :class="{ rotated: companiesDropDown }"
          @click="companyPicked = false"
          class="arrowDown"
          icon="fa-solid fa-chevron-down"
        />
      </div>
      <div class="date">
        <div class="addTime">
          <font-awesome-icon icon="fa-regular fa-clock" />
          <h2>+</h2>
        </div>
      </div>
    </header>
    <dropdown-menu
      :companies="companies"
      v-if="companiesDropDown"
      @close="listHandler('companies')"
      company
    />
    <section>
      <div class="description__prepared">
        <textarea
          name="text"
          id="description"
          cols="30"
          rows="10"
          placeholder="Opis"
          v-model="description"
        ></textarea>
      </div>
      <div class="employee">
        <div class="choose__user" @click="listHandler('users')">
          <div :style="{backgroundColor : getChoiceUser.color}">
            <font-awesome-icon icon="fa-solid fa-user" />
          </div>
          <h1>{{ getChoiceUser.name }}</h1>
          <font-awesome-icon
            :class="{ rotated: usersDropDown }"
            class="arrowDown"
            icon="fa-solid fa-chevron-down"
          />
        </div>
        <btn-add @click="addTask"></btn-add>
      </div>
      <dropdown-menu
        :users="users"
        @close="listHandler('users')"
        v-if="usersDropDown"
        user
      />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companiesDropDown: false,
      usersDropDown: false,
      description: '',
      status: 1,
    };
  },
  methods: {
    listHandler(which) {
      if (which === 'users') {
        this.usersDropDown = !this.usersDropDown;
      }
      if (which === 'companies') {
        this.companiesDropDown = !this.companiesDropDown;
      }
    },
    addTask(){
      this.$emit('closeTask')
      this.$store.dispatch('tasks/addTask', {
        company: this.getChoiceCompany.name,
        description: this.description,
        employee:this.getChoiceUser,
        status: this.status
      })
      console.log(this.$store.getters['tasks/tasks'])
    }
  },
  computed: {
    getChoiceUser() {
      return this.$store.getters['users/getChoice'];
    },
    getChoiceCompany() {
      return this.$store.getters['companies/getChoice'];
    },
    companies() {
      return this.$store.getters['companies/getCompanies'];
    },
    users() {
      return this.$store.getters['users/getUsers'];
    },
  },
  mounted(){
    console.log(this.$store.getters['tasks/tasksId'])
  }
};
</script>

<style scoped>
.prepared {
  border: 2px #3866dc solid;
}
.addTime {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  padding: 2px 7px;
  border-radius: 5px;
  transition: 0.3s all;
}
.addTime svg {
  font-size: 0.7rem;
}
.addTime:hover {
  background-color: #f3f3f3;
}
.description__prepared {
  width: 100%;
}
.description__prepared textarea {
  font-size: 0.8rem;
  font-weight: 400;
  height: 2rem;
  max-height: 10rem;
  max-width: 70%;
}
.choose__user {
  position: relative;
}
.choose__user div {
  transition: 0.3s background-color;
}
.choose__user h1,
.company h1 {
  margin-right: 10px;
}
.arrowDown {
  transition: 0.3s rotate;
  color: #747474 !important;
  font-size: 0.8rem !important;
}
textarea,
input {
  border: none;
  border-bottom: 0px #d9d9d9 solid;
  transition: 0.3s all;
  color: #747474;
  -webkit-appearance: none;
  outline: none !important;
}
input {
  width: fit-content;
}
textarea,
input {
  transition: none !important;
}
textarea:hover,
input:hover {
  border-bottom: 1px #d9d9d9 solid;
}
textarea:active,
input:active {
  border-bottom: 1px #d9d9d9 solid;
}
textarea:active,
input:active {
  border-bottom: 1px #d9d9d9 solid;
}
.task {
  transition: 0.3s all;
  background-color: #ffffff;
  border-radius: 6px;
  width: 100%;
  padding: 5px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  position: relative;
}
header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.company {
  max-width: 80%;
  display: flex;
  align-items: center;
  justify-content: left;
}
.company div {
  padding: 5px;
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  background-color: #37a735;
  border-radius: 5px;
  margin-right: 10px;
}
.company h1 {
  font-size: 0.7rem;
  max-width: 120px;
}
.company div svg {
  color: white;
}
.date {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dateTimer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dateTimer {
  background-color: #d9d9d9;
  padding: 2px 7px;
  border-radius: 5px;
}
.dateTimer svg {
  font-size: 0.7rem;
}
.date h2 {
  font-size: 0.7rem;
  margin-left: 5px;
}
.date h3 {
  font-size: 0.6rem;
  font-weight: 400;
  margin-right: 5px;
}
section {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  gap: 5px;
  width: 100%;
}
.description h1 {
  font-size: 0.8rem;
  font-weight: 400;
  max-height: 1.2rem;
  overflow: hidden;
}
.employee {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
}
.employee div {
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
}
.employee div div {
  background-color: #3866dc;
  padding: 5px;
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-right: 10px;
}
.employee h1 {
  font-size: 0.9rem;
}
.employee div svg {
  color: white;
  font-size: 1rem;
}
.rotated {
  rotate: 180deg;
}
</style>
