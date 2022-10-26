<template>
 <div class="column">
  <header>
   <span>W SERWISIE</span>
   <div class="counter__container">1</div>
  </header>
  <div class="task__container">
   <slot></slot>
  </div>
 </div>
</template>

<script>
export default {};
</script>

<style scoped>
.column {
 width: 100%;
 max-width: 500px;
 min-width: 200px;
 height: auto;
 background-color: #f3f3f3;
 color: #747474;
 border-radius: 10px;
 gap: 10px;
 padding: 10px;
 margin: 0 5px;
 display: flex;
 align-items: center;
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
</style>
