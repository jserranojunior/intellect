<template>
  <div class="flex justify-center mt-1 mx-4">
    <div class="w-full sm:w-6/12 md:w-6/12 painel-tail my-4">
      <AddEditContas></AddEditContas>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import AddEditContas from "../components/AddEditContas";
export default {
  name: "AdicionarConta",
  data() {
    return {};
  },
  components: {
    AddEditContas,
  },
};
</script>