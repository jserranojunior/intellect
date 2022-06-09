<template>
  <div>
    <layoutDefault>
      <template #header>
        <navbar></navbar>
      </template>
      <template #mainpage>
        <router-view></router-view>
      </template>
      <template #sidebar>
        <sidebar></sidebar>
      </template>
    </layoutDefault>
  </div>
</template>
<script  lang="ts">
import layoutDefault from "./layouts/default.vue";
import navbar from "./layouts/Navbar.vue";
import sidebar from "./layouts/Sidebar.vue";

export default {
  components: {
    layoutDefault,
    navbar,
    sidebar,
  },
};
</script>