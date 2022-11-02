<template>
  <div class="modal">
    <header>
      <slot name="header"></slot>
    </header>
    <section class="inner1">
      <slot name="inner1"></slot>
    </section>
    <section class="inner2">
      <slot name="inner2"></slot>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.modal {
  z-index: 6;
  background-color: white;
  color: #747474;
  position: absolute;
  width: 85%;
  height: 70%;
  left: 7.5%;
  top: 15%;
  border-radius: 10px;
  padding: 2%;
  display: grid;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  grid-template-rows: 10% 1fr;
  gap: 0px 0px;
  grid-template-areas:
    'header header'
    '. .';
  overflow: hidden;
}
.inner1{
  overflow-y: scroll;
}
::-webkit-scrollbar {
  width: 5px;
}
.inner1,
.inner2{
  padding: 0 1rem;
}
header {
  grid-area: header;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
header,
section{
  padding: 0 .5rem;
}
</style>
