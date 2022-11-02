<template>
  <section v-if="company" class="menu__container">
    <ul class="links">
      <li>
        <input
          @input="filter($event.target.value.toUpperCase(), companies)"
          placeholder="Wpisz nazwe firmy"
          type="text"
        />
      </li>
      <li
        @click="setOutput('companies', company)"
        v-for="company in filteredListCompanies"
        :key="company.id"
      >
        {{ company.name }}
      </li>
    </ul>
  </section>
  <section v-if="user" class="menu__container">
    <ul class="links">
      <li>
        <input
          @input="filter($event.target.value.toUpperCase(), users)"
          placeholder="Wpisz Usera"
          type="text"
        />
      </li>
      <li
        @click="setOutput('users', user)"
        v-for="user in filteredListUsers"
        :key="user.id"
      >
        {{ user.name }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  emits: ['close'],
  props: {
    companies: {},
    users: {},
    company: {
      type: Boolean,
      default: false,
    },
    user: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      userPicked: false,
      companyPicked: false,
      filteredListCompanies: '',
      filteredListUsers: this.users,
    };
  },
  methods: {
    setOutput(list, data) {
      this.$store.commit(`${list}/setChoice`, data);
      this.$emit('close');
    },
    listHandler(which) {
      if (which === 'users') {
        this.usersDropDown = !this.usersDropDown;
      }
      if (which === 'companies') {
        this.companiesDropDown = !this.companiesDropDown;
      }
    },
    filter(ev, list) {
      if (list === this.companies) {
        this.filteredListCompanies = list.filter((l) =>
          l.name.toUpperCase().match(ev)
        );
      } else {
        this.filteredListUsers = list.filter((l) =>
          l.name.toUpperCase().match(ev)
        );
      }
    },
  },
  computed: {},
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
  transition: 0.3s all;
  padding: 0 ;
}
.links li:hover {
  background-color: #3866dc;
  color: white;
}
.links li:first-child:hover {
  background-color: unset !important;
  color: inherit !important;
}
textarea,
input {
  border: none;
  border-bottom: 0px #d9d9d9 solid;
  transition: 0.3s all;
  color: #747474;
  -webkit-appearance: none;
  outline: none !important;
}
input {
  width: fit-content;
}
textarea,
input {
  transition: none !important;
}
textarea:hover,
input:hover {
  border-bottom: 1px #d9d9d9 solid;
}
textarea:active,
input:active {
  border-bottom: 1px #d9d9d9 solid;
}
textarea:active,
input:active {
  border-bottom: 1px #d9d9d9 solid;
}
</style>
