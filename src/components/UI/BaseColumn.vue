<template>
  <div class="column">
    <header>
      <span>{{ title }}</span>
      <div class="counter__container">{{ counter }}</div>
    </header>
    <div class="task__container">
      <slot></slot>
      <pre-task @closeTask="hide" v-if="opened"></pre-task>
    </div>
    <div class="adder">
      <btn-add v-if="title === 'PRZYJĘTO'" @click="open"></btn-add>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'counter'],
  data(){
    return{
      opened: false,
    }
  },
  methods:{
    open(){
      this.opened = true
    },
    hide(){
      this.opened = false
    }
  }
};
</script>

<style scoped>
.column {
  width: 100%;
  max-width: 500px;
  min-width: 250px;
  height: auto;
  background-color: #f3f3f3;
  color: #747474;
  border-radius: 10px;
  gap: 10px;
  padding: 7px;
  margin: 0 5px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
}
header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: medium;
}
.counter__container {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
}
.task__container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 5px;
}
</style>
