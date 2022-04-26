<template>
  <div>
    <Layout>
      <template #header>
        <Navbar />
      </template>
      <template #sidebar>
        <Sidebar />
      </template>
      <template #mainpage>
        <slot />
      </template>
    </Layout>
  </div>
</template>




<script>
definePageMeta({
  layout: "custom",
});
</script>