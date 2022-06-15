<template>
  <div class="text-neutral rounded-xl w-full z-10">
    <div class="p-2 flex flex-wrap justify-between my-auto items-center mx-2">
      <label for="my-drawer" class="btn btn-sm drawer-button cursor-pointer">
        <svg
          viewBox="0 0 100 80"
          width="18"
          height="18"
          class="fill-current text-neutral-content"
        >
          <rect width="100" height="20" />
          <rect y="30" width="100" height="20" />
          <rect y="60" width="100" height="20" /></svg
      ></label>
      <div class>
        <nav :class="'flex flex-wrap my-auto'">
        <router-link   class="btn  btn-sm mx-1" :to="'/'">Home</router-link>
        <router-link   class="btn  btn-sm mx-1" :to="'/login'">Login</router-link>
         <router-link   class="btn  btn-sm mx-1" :to="'/financeiro'">Financeiro</router-link>

        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// const { auth, ola, Logout } = useAuth()
export default {
  name: "Navbar",
};
</script>