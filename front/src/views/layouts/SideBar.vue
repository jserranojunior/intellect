<template>
<div>



    <aside class="main-sidebar sidebar-light-info elevation-4" id="sidebarlateral">
   <div class="sidebar">
        <a href="alvitre.net" class="brand-link text-center">
      <!-- <img src="alitre.net/img/logo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8"> -->
      <span class="text-center brand-text font-weight-light">Intellect</span>
    </a>

       <div class="user-panel mt-3 pb-3 d-flex">
        <div class="image">
          <img src="http://alvitre.net/alvitre/images/programador/jorge.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Jorge Serrano Junior</a>
        </div>
      </div>

     


         
             <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li class="nav-header">ADMIN</li>

                    
                    <li class="nav-item has-treeview">
                        <a href="#" class="nav-link">
                           <i class="nav-icon far fa-dot-circle"></i>
                            <p>
                                Financeiro
                                <i class="fas fa-angle-left right"></i>
                                <span class="badge badge-info right">1</span>
                            </p>
                        </a>
                         <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <router-link :to="{name:'financeiro'}" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Contas a pagar</p>
                                </router-link>
                            </li>                           
                        </ul>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <router-link :to="{name:'adicionarcontaapagar'}" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Nova Conta</p>
                                </router-link>
                            </li>                           
                        </ul>
                    </li>
                </ul>
             </nav>

        </div>

    </aside>
</div>
</template>

<script>

export default {
    name: "SideBar",
    data() {
        return {
        }
    },
    components:{
       
    },
    computed: {

    },
   
    methods: {
       
       
    },
    watch: {
       
       
     
    },
   
}
</script>
