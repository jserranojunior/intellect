<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
/*eslint-disable*/
export default {
  name: "App",
};
</script>
<style>
@import "tailwindcss/base";

@import "tailwindcss/components";
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

.painel-tail {
  @apply m-0 p-5 bg-white w-full shadow rounded-lg;
}

@import "tailwindcss/utilities";
</style>
