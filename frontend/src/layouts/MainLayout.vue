<template>
  <q-layout view="lHh Lpr lFf" class="bg-gray-700">
    <NavBar></NavBar>
    <Sidebar></Sidebar>
    <q-page-container class="z-20">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  import NavBar from "./NavBar";
  import Sidebar from "./Sidebar";
  export default {
    name: "MainLayout",
    data() {
      return {
        leftDrawerOpen: false,
      };
    },
    components: {
      NavBar,
      Sidebar,
    },
  };
</script>
<style>
  @import "tailwindcss/base";

  @import "tailwindcss/components";
  .toggle-checkbox:checked {
    @apply: right-0 border-blue-500 bg-blue-400 r-0;
    right: 0;
  }
  .toggle-checkbox:checked + .toggle-label {
    @apply: bg-blue-400;
    background-color: #23487d;
  }
  .form-tail {
    @apply p-2 shadow rounded-lg bg-gray-100 outline-none cursor-pointer;
  }

  .form-tail:focus {
    @apply bg-gray-200 cursor-text;
  }
  .btn-primary-tail-rounded {
    @apply cursor-pointer text-white text-center font-semibold py-2 px-4 border  bg-blue-500  rounded-full mr-2;
  }
  .btn-primary-tail-rounded:hover {
    @apply bg-blue-400 text-white;
  }

  .btn-warning-tail-rounded {
    @apply cursor-pointer text-white text-center font-semibold py-2 px-4 border  bg-yellow-500  rounded-full mr-2;
  }
  .btn-warning-tail-rounded:hover {
    @apply bg-yellow-400 text-white;
  }

  .painel {
    @apply bg-gray-800 shadow rounded-lg;
  }

  @import "tailwindcss/utilities";
</style>
