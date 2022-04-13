<template>
  <div>
    <Layout>
      <template #header>
        <Navbar />
      </template>
      <template #sidebar>
        <Sidebar/>
      </template>
      <template #mainpage>
        <slot />
      </template>
    </Layout>
  </div>
</template>




<script>
// This will also work in `<script setup>`
definePageMeta({
  layout: "custom",
});
</script>