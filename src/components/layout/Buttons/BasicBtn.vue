<template>
  <div class="buttons__container" :style="{justifyContent : align}">
    <div
      @click="$emit('activeHandler', button.id)"
      :class="{ active: button.active }"
      class="button"
      v-for="button in buttons"
      :key="button"
    >
      {{ button.text }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['buttons', 'align'],
};
</script>

<style scoped>
.buttons__container {
  display: flex;
  align-items: center;
  justify-content: left;
}
.button {
  padding: 0.2rem 0.5rem;
  transition: 0.2s all;
  border-radius: 3px;
  width: fit-content;
  cursor: pointer;
}
.button {
  background-color: #f3f3f3;
  margin-right: 0.5rem;
}
.button:hover {
  background-color: #929292;
  color: white;
}
.active {
  background-color: #929292;
  color: white;
}
</style>
