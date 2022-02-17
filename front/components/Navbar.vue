<template>
  <!-- <div class="flex flex-wrap justify-between"> -->
  <div class="my-auto bg-neutral rounded-full w-auto">
    <div class="px-4">
      <a href="#" class="text-lg font-semibold uppercase text-neutral-content">Intellect</a>
    </div>
  </div>
  <div class="text-neutral rounded-xl w-11/12">
    <div class="p-2 flex flex-wrap justify-between my-auto items-center mx-2">
      <div class="p-2 cursor-pointer">
        <svg viewBox="0 0 100 80" width="18" height="18" class="fill-current text-neutral-content">
          <rect width="100" height="20" />
          <rect y="30" width="100" height="20" />
          <rect y="60" width="100" height="20" />
        </svg>
      </div>
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
            to="/cadastro"
            class="px-4 py-2 text-sm font-semibold rounded-lg focus:shadow-outline mx-1 md:mt-0 text-neutral-content hover:bg-neutral-focus focus:bg-neutral-focus"
          >Cadastro</NuxtLink>
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

<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    // const { open } = useLayouts()  

    const { Logout, auth, fields } = useAuth();
    const state = reactive({

      auth: { token: false },
      fields: {}
    })

    return { ...toRefs(state), Logout };
  },
});
</script>
