<template>
 <div class="notFound__container">
  <div class="content">
   <h1>Oops!</h1>
   <h2>404 - nie znaleziono strony.</h2>
   <h3>Strona której szukasz nie znajduję się na naszych serverach</h3>
   <div class="buttons__container">
    <basic-btn
     @activeHandler="redirect"
     align="center"
     :buttons="buttons"
    ></basic-btn>
   </div>
  </div>
 </div>
</template>

<script>
export default {
 data() {
  return {
   buttons: [
    {
     id: 1,
     text: "Wstecz",
    },
    {
     id: 2,
     text: "DashBoard",
    },
   ],
  };
 },
 methods:{
    redirect(id){
        if(id === 1){
            this.$router.back()
        }else{
            this.$router.push('/dashboard')
        }
    }
 }
};
</script>

<style BasicBtn scoped>
.notFound__container {
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 height: 100vh;
 width: 100%;
 overflow: hidden;
 /* background-image: url('../../src/assets/assets/404.png');
 background-size: cover;
 background-position: center;
 background-repeat: no-repeat; */
}
.content {
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 gap: 10px;
}
.content h1 {
 font-size: 8rem;
 text-shadow: 5px 6px 6px rgba(0, 0, 0, 0.25);
}
.content h2 {
 font-size: 1rem;
 text-align: center;
 font-weight: 500;
}
.content h3 {
 font-size: 0.8rem;
 text-align: center;
 font-weight: 300;
}
.buttons__container {
 color: #b4165f;
}
</style>
