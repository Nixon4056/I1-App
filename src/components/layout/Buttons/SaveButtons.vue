<template>
  <div class="buttons__container">
    <div @click="$emit('save')" class="save">Zapisz</div>
    <div v-if="cancelBtn" @click="$emit('cancel')" class="cancel">Anuluj</div>
  </div>
</template>

<script>
export default {
  emits:['cancel', 'save'],
  props: {
    cancelBtn: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.buttons__container {
  display: flex;
  align-items: center;
  justify-content: left;
}
.save,
.cancel {
  padding: 0.2rem 0.5rem;
  transition: 0.2s background-color;
  border-radius: 3px;
  width: fit-content;
  cursor: pointer;
}
.save {
  background-color: #37a735;
  color: white;
  margin-right: 0.2rem;
}
.save:hover {
  background-color: #51c94e;
}
.cancel {
  color: inherit;
  background-color: transparent;
}
.cancel:hover {
  background-color: #f3f3f3;
}
</style>
