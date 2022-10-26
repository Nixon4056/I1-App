<template>
 <header>
  <slot name="header"></slot>
 </header>
 <section>
  <slot name="dashboard"></slot>
 </section>
 <nav>
  <slot name="nav"></slot>
 </nav>
</template>

<script>
export default {};
</script>

<style scoped>
header {
 position: fixed;
 top: 0;
 right: 0;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 0.6rem 2.5rem;
 background-color: rgba(255, 255, 255, 0.3);
 border-bottom-left-radius: 35px;
 z-index: 2;
}
section {
 position: absolute;
 top: 0;
 width: 100%;
 padding-left: 5rem;
 z-index: 1;
 padding-top: 50px;
 font-size: 0.9rem;
}
nav {
 position: fixed;
 left: 0;
 top: 0;
 height: 100vh;
 display: flex;
 align-items: center;
 justify-content: top;
 flex-direction: column;
 padding: 2rem 0.5rem;
 background-color: rgba(255, 255, 255, 0.4);
 z-index: 2;
}
</style>
