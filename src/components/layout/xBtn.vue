<template>
  <div>
    <font-awesome-icon icon="fa-solid fa-xmark" />
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
div {
  background-color: transparent;
  transition: 0.3s all;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 6px;
}
div:hover {
  background-color: #d9d9d9;
}
svg {
  font-size: 1.7rem;
  aspect-ratio: 1/1;
}
</style>
