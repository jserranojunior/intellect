<script>

import {mapState, mapActions} from 'vuex'

export default {
    name: "git-hub",    
    data() {
        return {    
            
            loading: false    
        };
    },
    methods:
         {
        ...mapActions([
            'userGit',
            'loadBillsToPay'
           
        ]),
    },
    mounted() {
        
      this.userGit("");
      this.loadBillsToPay("");

      
      
      
      console.log(this.loading)
    },
    filters: {
        money: function(value) {
            if (!value) return '0,00';
            let val = (value / 1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
    },
    computed: {
        ...mapState({
            github: state => state.github,
            financeiro: state => state.financeiro
        }),    
    }
};

</script>


<template>
    <div v-if="financeiro.data.data">
        <p>{{financeiro.data.data.categorieTotalBillsToPay}}</p>
         
      <p v-for="item in github.data">
          {{item.address.city}}
      </p>
    </div>
</template>