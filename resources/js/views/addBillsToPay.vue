<template>
    <div>
        <div class="container">
            <div class="row row-space justify-content-center">
                <div class="col-md-6 col-sm-12 bg-light">
                    <form-create-bills></form-create-bills>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import formCreateBills from '../components/financial/form-create-bills'
    export default {
        name:"AddBillsToPay",
        components:{
          formCreateBills,       
        }
    }
</script>

<style>
.row-space{
    margin-top: 10px;
}
</style>


