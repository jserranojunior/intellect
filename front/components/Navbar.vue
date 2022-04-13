<template>
  <div class="text-neutral rounded-xl w-full">
    <div class="p-2 flex flex-wrap justify-between my-auto items-center mx-2">
          <label for="my-drawer" class="btn btn-sm drawer-button">  <svg viewBox="0 0 100 80" width="18" height="18" class="fill-current text-neutral-content">
          <rect width="100" height="20" />
          <rect y="30" width="100" height="20" />
          <rect y="60" width="100" height="20" />
        </svg></label>

      <div class>
        <nav :class="'flex flex-wrap my-auto'">
          <NuxtLink
            to="/"
            class="px-4 py-2 text-sm font-semibold rounded-lg focus:shadow-outline mx-1 md:mt-0 text-neutral-content hover:bg-neutral-focus focus:bg-neutral-focus"
          >Home</NuxtLink>
          <NuxtLink
            v-if="auth && !auth.token"
            to="/login"
            class="px-4 py-2 text-sm font-semibold rounded-lg focus:shadow-outline mx-1 md:mt-0 text-neutral-content hover:bg-neutral-focus focus:bg-neutral-focus"
          >Login</NuxtLink>
          <NuxtLink
            v-if="auth.token"
            to="/financeiro"
            class="px-4 py-2 text-sm font-semibold rounded-lg focus:shadow-outline mx-1 md:mt-0 text-neutral-content hover:bg-neutral-focus focus:bg-neutral-focus"
          >Financeiro</NuxtLink>
          <a
            v-if="auth.token"
            class="px-4 py-2 text-sm font-semibold rounded-lg focus:shadow-outline mx-1 md:mt-0 text-neutral-content focus:bg-neutral-focus hover:text-bg-gray-300"
            href="#"
            @click="Logout()"
          >Sair</a>
        </nav>
      </div>
      <!-- </div> -->
      <!--  -->
    </div>
  </div>
  <!-- </div> -->
</template>

<script setup>
const { auth, ola, Logout} = useAuth()
</script>