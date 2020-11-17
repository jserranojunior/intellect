<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
  import { mapActions } from "vuex";
  /*eslint-disable*/
  export default {
    name: "App",
    beforeMount() {
      console.log(process.env.NAME);
      this.ActionAuthenticated();
    },
    methods: {
      ...mapActions("Auth", ["ActionAuthenticated"]),
    },
  };
</script>
