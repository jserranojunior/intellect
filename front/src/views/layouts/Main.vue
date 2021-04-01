<template>
  <div class="bg-gray-900 min-h-screen">
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <div class="">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Sidebar from "./Sidebar.vue";
import { inject } from "vue";

export default {
  name: "Main",
  components: {
    Navbar,
    Sidebar,
  },
  setup() {
    const useAuth = inject("auth");
    const { isLogged } = useAuth;
    isLogged();
  },
};
</script>
