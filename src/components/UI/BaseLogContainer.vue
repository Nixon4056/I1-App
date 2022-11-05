<template>
  <div class="logs__container">
    <header>
      <h1>Pokaż:</h1>
      <basic-btn @activeHandler="activeButton" :buttons="buttons"></basic-btn>
    </header>
    <section>
      <comments-logs :comments="buttons[0].active" :logs="buttons[1].active" :task="task"></comments-logs>
    </section>
  </div>
</template>

<script>
export default {
  props:['task'],
  data(){
    return{
      buttons: [
        {
          id: 1,
          text: 'Komentarze',
          active: false,
        },
        {
          id: 2,
          text: 'Historia',
          active: false,
        },
        {
          id: 3,
          text: 'Wszystko',
          active: true,
        },
      ]
    };
  },
  methods:{
    activeButton(id){
      this.buttons.forEach(button => {
        if(button.id !== id){
          button.active = false
        }
      });
      this.buttons.find((button) => button.id === id).active = true
    }
  }
}
</script>

<style scoped>
h1{
  font-size: .85rem;
  font-weight: 400;
}
.logs__container{
}
header{
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 10px;
  margin: 10px 0;
}
</style>