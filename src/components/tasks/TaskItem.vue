<template>
  <div v-if="!prepared" class="task">
    <header>
      <div class="company">
        <div>
          <font-awesome-icon icon="fa-solid fa-industry" />
        </div>
        <h1>{{company}}</h1>
      </div>
      <div class="date">
        <h3>za 2 dni</h3>
        <div class="dateTimer">
          <font-awesome-icon icon="fa-regular fa-clock" />
          <h2>23 Paź</h2>
        </div>
      </div>
    </header>
    <section>
      <div class="description">
        <h1>
          {{description}}
        </h1>
      </div>
      <div class="employee">
        <div>
          <div>
            <font-awesome-icon icon="fa-solid fa-user" />
          </div>
          <h1>{{employee}}</h1>
        </div>
        <menu-btn link :destination="taskDetailsLink" /> <!-- TOGGLE TASK DETAILS -->
      </div>
    </section>
  </div>
  <!-- BLANK TASK ---------------------------------------------------------------------------------- -->
  <div v-else class="task prepared">
    <header>
      <div class="company">
        <div>
          <font-awesome-icon icon="fa-solid fa-industry" />
        </div>
        <h1><input type="text" placeholder="Firma"></h1>
      </div>
      <div class="date">
        <h3></h3>
        <div class="addTime">
          <font-awesome-icon icon="fa-regular fa-clock" />
          <h2>+</h2>
        </div>
      </div>
    </header>
    <section>
      <div class="description__prepared">
        <textarea name="text" id="description" cols="30" rows="10" placeholder="Opis"></textarea>
      </div>
      <div class="employee">
        <div class="choose__user">
          <div>
            <font-awesome-icon icon="fa-solid fa-user" />
          </div>
          <h1>$user</h1>
          <font-awesome-icon @click="openDropDownMenu($event)" class="arrowDown" icon="fa-solid fa-chevron-down" />
          <drop-down-menu :offset="offset" v-if="menuIsVisible" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    company: {
        type: String,
        default: 'error',
        require: true,
    },
    description: {
        type: String,
        default: 'error',
        require: true,
    },
    employee: {
        type: String,
        default: 'error',
        require: true,
    },
    id: {
        type: String,
        default: 'error',
        require: true,
    },
    prepared: {
        type: Boolean,
        default: false,
        require: true,
    },
  },
  data(){
    return{
      menuIsVisible: false,
      offset: null,
    };
  },
  methods:{
    openDropDownMenu(event){
      this.menuIsVisible = !this.menuIsVisible
      console.log(event.screenX) 
      console.log(event.screenY) 
      this.offset = {
        parent: event.target.parentElement.parentElement.parentElement.parentElement,
        xOffset: event.screenX,
        yOffset: event.screenY,
      }
      
    }
  },
  computed:{
    taskDetailsLink(){
      return this.$route.path + '/task/' + this.id; //Task Details with ID
    }
  }
};
</script>
<style scoped>
.prepared{
  border: 2px #3866dc solid;
}
.addTime{
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  padding: 2px 7px;
  border-radius: 5px;
  transition: 0.3s all;
}
.addTime svg{
  font-size: .7rem;
}
.addTime:hover{
  background-color: #f3f3f3;
}
.description__prepared{
  width: 100%;
}
.description__prepared textarea {
  font-size: 0.8rem;
  font-weight: 400;
  height: 2rem;
  max-height: 10rem;
  max-width: 70%;
}
.choose__user{
  position: relative;
}
.choose__user h1{
  margin-right: 10px;
}
.arrowDown{
  color: #747474 !important;
  font-size: .8rem !important;
}
</style>
<style scoped> /* TASK */
textarea,
input{
  border: none;
  border-bottom: 0px #d9d9d9 solid;
  transition: 0.3s all;
  color: #747474;
  -webkit-appearance: none;
  outline: none !important;
}
textarea,
input{
  transition: none !important;
}
textarea:hover,
input:hover{
  border-bottom: 1px #d9d9d9 solid;
}
textarea:active,
input:active{
  border-bottom: 1px #d9d9d9 solid;
}
textarea:active,
input:active{
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
  overflow: hidden;
}
header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.company {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
.company h1{
  font-size: .7rem;
  max-width: 120px;
}
.company div svg {
  color: white;
}
.date{
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
.dateTimer svg{
  font-size: .7rem;
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
.employee div{
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
}
.employee div div{
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
</style>
