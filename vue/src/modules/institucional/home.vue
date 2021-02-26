<template>
  <div>
    <div class="flex flex-wrap justify-center items-center  mt-2">
      <div class="w-full">
        <img
          :src="logo"
          class="mx-auto shadow-md"
          alt="Ls Star Incorporadora"
        />
      </div>
    </div>
    <div class="flex flex-wrap justify-center mt-2 items-center  bg-gray-500">
      <div class="sm:w-full md:w-1/2 lg:w-1/2">
        <img
          :src="banner"
          class="mx-auto shadow-md"
          alt="Ls Star Incorporadora"
        />
      </div>
      <div class="sm:w-full md:w-1/2  lg:w-1/2 mt-2 p-1">
        <video class="black" loop controls autoplay>
          <source :src="video" type="video/mp4" />
          Seu navegador não tem suporte.
        </video>
      </div>
    </div>
  </div>
</template>

<script>
  import { useState } from "./use/useState";
  export default {
    setup() {
      const { logo, banner, video } = useState();
      return { logo, banner, video };
    },
  };
</script>
