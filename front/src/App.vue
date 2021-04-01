<template>
  <div>
    <Main>
      <template #main>
        <router-view></router-view>
      </template>
    </Main>
  </div>
</template>

<script>
import Main from "@/views/layouts/Main.vue";
import { Provides } from "@/provides/index";
export default {
  name: "App",
  components: {
    Main,
  },
  setup() {
    Provides();

    // const { isLogged } = useAuth;
  },
};
</script>
