<template>
  <div class="p-4">
    <h3 class="text-white text-center text-lg m-4">{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const msg = `Seja bem vindo ao sistema ${process.env.VUE_APP_NAME}`;
    return { msg };
  },
};
</script>
