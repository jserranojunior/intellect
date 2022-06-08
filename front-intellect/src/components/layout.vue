<template>
  <div class="bg-neutral-content">
    <nav
      class="font-sans flex flex-wrap justify-between sm:text-left sm:justify-between py-0 px-0 bg-neutral sm:items-baseline w-full dark:bg-gray-800 dark:text-gray-100 shadow-md border-b border-neutral-focus dark:border-gray-700"
    >
      <slot name="header"></slot>
    </nav>
    <!-- <div
      class="flex w-full h-screen bg-neutral text-neutral-content dark:bg-gray-700 dark:text-gray-100"
    > -->

    <div class="drawer  bg-neutral-focus dark:bg-gray-700 dark:text-gray-100 min-h-screen">
  <input id="my-drawer" type="checkbox" class="drawer-toggle">
  <div class="drawer-content">

<slot name="mainpage"></slot>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
     <slot name="sidebar"></slot>
    <!-- <ul class="menu p-4 overflow-y-auto w-80 bg-neutral text-neutral-content">

      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    
    </ul> -->
  <!-- </div> -->
</div>


         
      <!-- <div class="w-full p-2 bg-neutral-focus dark:bg-gray-600 dark:text-gray-100">
        
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
};
</script>
