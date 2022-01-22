<template>
  <div>
    <form>
      <input
        v-model="selectedDate"
        type="date"
        name="calendario"
        class="input input-bordered input-sm"
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
