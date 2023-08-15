<template>
  <div class="bg-base-100">

    <nav class="
      navbar  
       border-b border-neutral     
      ">
      <slot name="header"></slot>
    </nav>
    <div class="
        drawer
        min-h-screen
      ">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <slot name="mainpage"></slot>
      </div>
      <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay"></label>
        <slot name="sidebar"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
