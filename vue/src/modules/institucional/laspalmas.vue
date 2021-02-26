<template>
  <div>
    <div class="flex flex-wrap justify-center shadow-lg my-2">
      <div class="w-full  p-2 mx-2">
        <h2 class="text-center text-blue-800 font-bold">Jardim Las Palmas</h2>
        <div class="text-center mt-2">
          <p>
            Obras finalizadas.<br />
            Projeto - Arq. Jair Correia de Souza.
          </p>
          <p>
            Rua José Ramos, 381 - Jardim Las Palmas - Astúrias <br />
            Guarujá - SP, CEP: 11420-490
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap mt-2 bg-gray-100 items-center ">
      <div class="sm:w-full md:w-1/2 lg:w-1/2 ">
        <video class="black" loop controls autoplay>
          <source :src="video" type="video/mp4" />
          Seu navegador não tem suporte.
        </video>
      </div>
      <div class="sm:w-full md:w-1/2 lg:w-1/2 p-1">
        <iframe :src="linkmapa" height="100%"></iframe>
      </div>
    </div>

    <!-- <div class="flex flex-wrap">
      <div class="w-full shadow-md p-4">
        <h3 class="font-bold">Casas à venda</h3>
        Rua Julio Pedro Pontes, 445 Jd Monteiro da Cruz, Vicente de Carvalho -
        Sp
      </div>
    </div>
      <div class="flex mt-2 mb-8">
        <div class="w-full">
          <div class="flex flex-wrap">
            <div class="w-full shadow-md p-4">
              <h4>
                Casa 2 e 3 -
                <span class="text-blue-800 font-bold">VENDIDO</span> |
                <span class="text-purple-800 font-bold"
                  >Características do imóvel:</span
                >
              </h4>

              Sobrado germinado frente, 2 quartos, lavabo, sacada, garagem
              privativa
            </div>

            <div class="w-full mt-2 shadow-md p-4">
              <h4>
                Casa 1 e 4 -
                <span class="text-blue-800 font-bold">VENDIDO</span> |
                <span class="text-purple-800 font-bold"
                  >Características do imóvel:</span
                >
              </h4>

              Sobrado geminado fundo, 2 quartos, lavabo, quintal, garagem
              privativa.
            </div>
          </div>
        </div>
      </div> -->
  </div>
</template>
<script>
  import { useState } from "./use/useState";
  export default {
    setup() {
      const { video, linkmapa } = useState();
      return { video, linkmapa };
    },
  };
</script>

<style>
  /* iframe {
    width: 100% !important;
    height: 100% !important;
  } */
</style>
