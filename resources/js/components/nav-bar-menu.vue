<template>
<div>
    <ul class="nav navbar-nav d-md-down-none">
        <li class="nav-item px-3">
            <a class="nav-link" href="/intellect">Home</a>
        </li>
        <li class="nav-item px-3">
            <a class="nav-link" href="/intellect/financeiro">Financeiro</a>
        </li>
    </ul>

    <input v-model="price" v-money="money" /> 
</div>


</template>

<script>
  import {VMoney} from 'v-money'
export default {
    name: "nav-bar-menu",
     data () {
      return {
        price: 123.45,
        money: {
          decimal: ',',
          thousands: '.',
          prefix: 'R$',
          suffix: '',
          precision: 2,
          masked: false
        }
      }
    },
    directives: {money: VMoney}
};
</script>