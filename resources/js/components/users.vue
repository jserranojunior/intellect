<script>
import axios from 'axios';

export default {
    name:"users",
    data() {
    return {
      users: [],
      errors: []
    }
  },
    
        mounted(){
            
            //  this.$http.get('/api/usuarios/listar').then((req) => this.users = req.data);
            //  console.log(this.users);
        }     ,
        created() {
    axios.get(`/api/usuarios/listar`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.users = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })


  }
}

</script>

<template>
    <div>
      <ul>
     
          <li v-for="item in users.usuarios">
              {{item.nome}}
          </li>

      </ul>
    </div>
</template>
