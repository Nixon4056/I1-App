<template>
 <div v-if="!modal" class="company">
  <div>
   <font-awesome-icon icon="fa-solid fa-industry" />
  </div>
  <h1>{{ text }}</h1>
 </div>
 <div v-else class="companyModal">
  <div>
   <font-awesome-icon icon="fa-solid fa-industry" />
  </div>
  <h1>{{ text }}</h1>
 </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            require: true,
            default: 'COMPANY NAME CANT RESOLVE'
        },
        modal: {
            type: Boolean,
            require: true,
            default: false
        },
    }
};
</script>

<style scoped>
.company {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.company div {
  padding: 5px;
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  background-color: #37a735;
  border-radius: 5px;
  margin-right: 10px;
}
.company h1 {
  font-size: 0.7rem;
  max-width: 120px;
}
.company div svg {
  color: white;
}
.companyModal {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.companyModal div {
  padding: 5px;
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  background-color: #37a735;
  border-radius: 5px;
  margin-right: 10px;
}
.companyModal h1 {
  font-size: 1rem;
  max-width: unset;
  font-weight: 300;
}
.companyModal div svg {
  color: white;
}
</style>
