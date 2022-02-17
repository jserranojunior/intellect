<template>
  <div>
    <form class="hover:cursor-pointer">
      <input
        v-model="selectedDate"
        type="date"
        name="calendario"
        class="input input-primary w-full text-primary-content max-w-xs bg-neutral hover:cursor-pointer"
      />
    </form>
  </div>
</template>
<script lang="ts">
import { inject, watch, ref } from "vue";
export default {
  setup() {
    const useFinancial = inject("financial");
    const { setDataCalendario, Calendario } = useFinancial;
    let selectedDate = ref(Calendario.value.selectedDate);

    watch(selectedDate, () => {
      setDataCalendario(selectedDate.value);
    });

    function changeMonth(type) {
      console.log(type);
    }
    return { changeMonth, selectedDate };
  },
};
</script>
