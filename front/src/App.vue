<template>
  <SLayout class="dark">
    <template #header><Navbar></Navbar></template>
    <template #sidebar> <Sidebar></Sidebar> </template>
    <template #mainpage>
      <router-view></router-view>
    </template>
  </SLayout>
</template>

<script>
// import Main from "./views/layouts/Main.vue";
import { Provides } from "./provides/index";
import Navbar from "./views/layouts/Navbar.vue";
import Sidebar from "./views/layouts/Sidebar.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    Navbar,
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    Provides();

    // const { isLogged } = useAuth;
  },
};
</script>
<style>
@import "../node_modules/slifer/src/assets/styles/slifer-style.css";
</style>
