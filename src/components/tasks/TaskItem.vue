<template>
  <div class="task">
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
          {{description + id}}
        </h1>
      </div>
      <div class="employee">
        <div>
          <div>
            <font-awesome-icon icon="fa-solid fa-user" />
          </div>
          <h1>{{employee}}</h1>
        </div>
        <router-link :to="taskDetailsLink">
          <font-awesome-icon class="toggle_task" icon="fa-solid fa-bars" />
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ['company', 'description', 'employee', 'id'],
  computed:{
    taskDetailsLink(){
      return this.$route.path + '/' + this.id; //Task Details with ID
    }
  }
};
</script>

<style scoped>
.task {
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
.date,
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
  font-size: .8rem;
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
.toggle_task {
  bottom: 0;
  right: 0;
  color: #FFD12D;
  font-size: 1.2rem;
}
</style>
