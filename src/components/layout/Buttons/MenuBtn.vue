<template>
 <div v-if="link" class="link">
  <router-link :to="destination">
   <font-awesome-icon class="toggle_task" icon="fa-solid fa-bars" />
  </router-link>
 </div>
</template>

<script>
export default {
 props: {
    destination: {
        title: 'destination',
        type: String,
        default: '/',
        require: false,
    },
    link: {
        title: 'link',
        type: Boolean,
        default: false,
        require: false,
    },
}
};
</script>

<style scoped>
div {
  background-color: transparent;
  transition: 0.3s all;
  padding: 3px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 3px;
}
div:hover {
  background-color: #f0f0f0;
}
.toggle_task {
 bottom: 0;
 right: 0;
 color: #ffd12d;
 font-size: 1.2rem;
 aspect-ratio: 1/1;
}
</style>
