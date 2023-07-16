<template>
  <div>
    <form class="hover:cursor-pointer">
      <input
        v-model="financeiro.Calendario.selectedDate"
        type="date"
        name="calendario"
        class="input input-sm w-full max-w-xs hover:cursor-pointer"
      />
    </form>
  </div>
</template>
<script lang="ts" setup>
import { watch } from "vue";

    import useStore from "../helpers/stores/store"
        let {financeiro} = useStore()
/*     let selectedDate = ref(Calendario.value.selectedDate)

 */
    watch(() => financeiro.Calendario.selectedDate, async () => {
      financeiro.setDataCalendario(financeiro.Calendario.selectedDate);
        await   financeiro.getSetCategoriasContas()

    });

 

</script>
