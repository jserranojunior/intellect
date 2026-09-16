<template>
  <div class="p-2 w-1/3">
    <div class="card bg-base-200 rounded-2xl p-4">
      <h2 class="text-md font-bold mb-6 text-primary flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        Novo Banco
      </h2>

      <!-- Nome -->
      <div class="form-control">
        <label class="label">
          <span class="label-text font-medium">Nome</span>
        </label>
        <div class="relative">
          <input
            type="text"
            class="input input-bordered w-full"
            min="1"
            placeholder="Nome do banco"
          />
        </div>
      </div>
      <!-- Data -->
      <div class="form-control mt-4">
        <label class="label">
          <span class="label-text font-medium">Data Abertura da Conta</span>
        </label>
        <div class="relative">
          <input
            type="date"
            class="input input-bordered w-full pl-10"
            required
          />
          <span class="absolute left-3 top-3 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </span>
        </div>
      </div>

      <div class="form-control mt-4">
        <label class="label">
          <span class="label-text font-medium">Informações Adicionais</span>
        </label>
        <div class="relative">
          <input
            type="text"
            class="input input-bordered w-full"
            min="1"
            placeholder="Informações Adicionais"
          />
        </div>
      </div>
    </div>
  </div>
</template>
