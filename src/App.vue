<template>
 <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:wght@200;300;400;500;600&display=swap');
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}
#app {
 font-family: "Poppins", sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 color: white;
 height: 100vh;
 width: 100%;
 background-image: linear-gradient(
   419deg,
   rgba(71, 71, 71, 0.05),
   rgba(71, 71, 71, 0.05) 27%,
   hsla(0, 0%, 82%, 0.05) 0,
   hsla(0, 0%, 82%, 0.05)
  ),
  linear-gradient(
   474deg,
   rgba(63, 63, 63, 0.05),
   rgba(63, 63, 63, 0.05) 43%,
   hsla(0, 0%, 54%, 0.05) 0,
   hsla(0, 0%, 54%, 0.05)
  ),
  linear-gradient(
   503deg,
   rgba(58, 58, 58, 0.05),
   rgba(58, 58, 58, 0.05) 24%,
   hsla(0, 0%, 39%, 0.05) 0,
   hsla(0, 0%, 39%, 0.05)
  ),
  linear-gradient(
   416deg,
   rgba(47, 47, 47, 0.05),
   rgba(47, 47, 47, 0.05) 45%,
   hsla(0, 0%, 82%, 0.05) 0,
   hsla(0, 0%, 82%, 0.05)
  ),
  linear-gradient(270deg, #d136ca, #b4165f);
}
</style>
