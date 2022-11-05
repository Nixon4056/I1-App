<template>
  <div class="modal">
    <div class="box1 box" :style="{backgroundColor: user.color}">
      <div class="initials" :style="{backgroundColor: user.color}"><h1>{{ user.initials }}</h1></div>
      <div>
        <h1>{{ user.name }}</h1>
        <h1>{{ user.standing }}</h1>
      </div>
    </div>
    <div class="box2 box">
      <a :href="'mailto:' + user.email"><h1><font-awesome-icon icon="fa-solid fa-envelope" />{{ user.email }}</h1></a>
      <div class="buttons">
        <basic-btn :buttons="buttons" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      buttons: [
        {
          id: 1,
          text: 'Wyświetl Profil',
          active: false,
        },
        {
          id: 2,
          text: 'Przypisane Zlecenia',
          active: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.modal {
  z-index: 100;
  position: absolute;
  left: -400px;
  top: calc(50% - 100px);
  width: 400px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  border: .5px #f3f3f3 solid;
  overflow: hidden;
}
a{
  transition: 0.3s color;
}
a:hover{
  color: #929292;
  text-decoration: underline
;
}
.box {
  width: 100%;
  height: 100%;
}
.box1 {
  padding: 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 20px;
  color: white;
}
h1{
  font-weight: 400;
  font-size: .9rem;
}
.box2 {
  padding: 1rem 2rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  flex-direction: column;
  gap: 20px;
  background-color: white;
}
.initials {
  position: absolute;
  left: 5%;
  top: 10%;
  min-width: 120px;
  padding: 20px;
  aspect-ratio: 1/1;
  color: white;
  display: flex;
  align-content: center;
  justify-content: center;
  border-radius: 50%;
  border: 3px white solid;
}
.initials h1{
  align-self: center;
  font-size: 2.5rem;
  font-weight: 500;
}
.buttons{
  display: flex;
  justify-content: space-between;
}
svg{
  margin-right: 10px;
}
</style>
