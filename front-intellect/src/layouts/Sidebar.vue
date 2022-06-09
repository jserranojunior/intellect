<template>
  <ul class="menu p-4 overflow-y-auto w-80 bg-neutral text-neutral-content">
    asd
    <!--
    <li>
      <NuxtLink to="/"
        class="px-4 py-2 text-sm font-semibold rounded-lg focus:shadow-outline mx-1 md:mt-0 text-neutral-content hover:bg-neutral-focus focus:bg-neutral-focus">
        Home</NuxtLink>
    </li>
    <li v-if="auth && !auth.token">
      <NuxtLink to="/loginPage"
        class="px-4 py-2 text-sm font-semibold rounded-lg focus:shadow-outline mx-1 md:mt-0 text-neutral-content hover:bg-neutral-focus focus:bg-neutral-focus">
        Login</NuxtLink>
    </li>
    <li v-if="auth.token">
      <NuxtLink to="/financeiro"
        class="px-4 py-2 text-sm font-semibold rounded-lg focus:shadow-outline mx-1 md:mt-0 text-neutral-content hover:bg-neutral-focus focus:bg-neutral-focus">
        Financeiro</NuxtLink>
    </li>
    <li v-if="auth.token"><a
        class="px-4 py-2 text-sm font-semibold rounded-lg focus:shadow-outline mx-1 md:mt-0 text-neutral-content focus:bg-neutral-focus hover:text-bg-gray-300"
        href="#" @click="Logout()">Sair</a></li>
        -->
  </ul>
</template>
// const { auth, ola, Logout } = useAuth()
<script lang="ts">
export default {
  name: "Sidebar",
};
</script>
