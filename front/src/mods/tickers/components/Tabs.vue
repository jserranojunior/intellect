<template>
  <div class="navbar bg-base-100 shadow-sm z-auto">
    <div class="navbar-center hidden lg:flex mx-auto">
      <ul class="menu-horizontal px-1">
        <router-link :to="'/dashboard'"
          ><li class="btn mx-1">Dashboard</li></router-link
        >
        <router-link :to="'/bancos'"
          ><li class="btn mx-1">Bancos</li></router-link
        >
        <router-link :to="'/diario'">
          <li class="btn mx-1">Diário</li></router-link
        ><router-link :to="'/contabilidade'">
          <li class="btn mx-1">Contabilidade</li></router-link
        >
      </ul>
    </div>
  </div>
</template>
