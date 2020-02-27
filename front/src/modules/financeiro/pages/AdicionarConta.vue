<template>
<div>
    <Main>
        <template v-slot:mainpage>
        <AddEditContas></AddEditContas>
        </template>
 </Main>
</div>
</template>
<script>
import Main from '@/views/layouts/Main'

import AddEditContas from '@/modules/financeiro/components/AddEditContas'
export default {
    name:"AdicionarConta",
    data(){
        return{
            
        }
    },
    components:{
        AddEditContas,
          Main,
    }
}
</script>