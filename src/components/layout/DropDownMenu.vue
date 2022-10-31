<template>
<!--   <Teleport> -->
    <section
      class="menu__container"
      :style="{ top: offset.yOffset + 'px', left: offset.xOffset + 'px' }"
    >
      <ul class="links">
        <li>Nikodem Wicon</li>
        <li>Mariusz Moszczynski</li>
        <li>Łukasz Grabowski</li>
        <li>Dawid Necel</li>
        <li>Mateusz Koszałka</li>
        <li>Olaf Holcer</li>
      </ul>
    </section>
<!--   </Teleport> -->
</template>

<script>
export default {
  props: ['renderTo', 'offset'],
  methods: {
    position() {},
  },
  mounted() {
    console.log(this.offset.yOffset);
    console.log(this.offset.parent);
  },
};
</script>

<style scoped>
.menu__container {
  background-color: white;
}
.links {
  display: flex;
  align-items: flex-start;
  justify-content: left;
  flex-direction: column;
  list-style: none;
}
.links li {
  color: #747474;
}
</style>
