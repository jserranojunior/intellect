<template>
  <div>
    <form class="hover:cursor-pointer">
      <input
        v-model="Financial.store.Calendario.selectedDate"
        type="date"
        name="calendario"
        class="input input-sm w-full max-w-xs hover:cursor-pointer"
      />
    </form>
  </div>
</template>
<script lang="ts" setup>
import { watch } from "vue";
import Financial from "../mods/financeiro/composables/Financial"


/*     let selectedDate = ref(Calendario.value.selectedDate)

 */
    watch(() => Financial.store.Calendario.selectedDate, async () => {
      Financial.setDataCalendario(Financial.store.Calendario.selectedDate);
        await   Financial.getSetCategoriasContas()

    });

 

</script>
