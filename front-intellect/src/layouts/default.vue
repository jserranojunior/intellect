<template>
  <div class="bg-base-100">
    <nav
      class="
        font-sans
        flex flex-wrap
        justify-between
        sm:text-left sm:justify-between
        py-0
        px-0
        bg-neutral
        sm:items-baseline
        w-full
        dark:bg-gray-800 dark:text-gray-100
        shadow-md
        border-b border-neutral-focus
        dark:border-gray-700
      "
    >
      <slot name="header"></slot>
    </nav>
    <div
      class="
        drawer
        min-h-screen
      "
    >
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
