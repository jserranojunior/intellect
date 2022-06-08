<template>
  <div>
    <form class="hover:cursor-pointer">
      <input
        v-model="selectedDate"
        type="date"
        name="calendario"
        class="input input-sm input-primary w-full text-primary-content max-w-xs bg-neutral hover:cursor-pointer"
      />
    </form>
  </div>
</template>
<script lang="ts">
import { watch, ref, defineComponent } from "vue";
export default defineComponent({
  setup() {
    const { setDataCalendario, Calendario } = useFinancial();
    let selectedDate = ref(Calendario.value.selectedDate);

    watch(selectedDate, () => {
      setDataCalendario(selectedDate.value);
    });


    return { selectedDate };
  },
});
</script>
