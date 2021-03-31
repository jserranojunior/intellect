<template>
  <div>
    APP
    <Main>
      <template v-slot:main>
        <router-view></router-view>
      </template>
    </Main>
  </div>
</template>

<script>
import Main from "@/views/layouts/Main.vue";
import { Provides } from "@/provides/index.js";
export default {
  name: "App",
  setup() {
    Provides();

    // const { isLogged } = useAuth;
  },
  components: {
    Main,
  },
};
</script>
