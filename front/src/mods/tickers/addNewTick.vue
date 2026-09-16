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
        Novo Tick
      </h2>

      <div class="form-control">
        <label class="label">
          <span class="label-text font-medium">Banco</span>
        </label>
        <div class="relative">
          <select
            name="banco"
            id="banco"
            class="cursor-pointer select select-bordered w-full"
          >
            <option value="banco1">Banco 1</option>
            <option value="banco2">Banco 2</option>
            <option value="banco3">Banco 3</option>
          </select>
        </div>
      </div>

      <div class="form-control mt-4">
        <label class="label">
          <span class="label-text font-medium">Nome do Tick</span>
        </label>
        <div class="relative">
          <input
            type="text"
            class="input input-bordered w-full"
            min="1"
            placeholder="Nome do Tick"
          />
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
