<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ContasAReceber extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contas_a_receber', function (Blueprint $table) {
            $table->increments('id');
            $table->string('favorecedor');
            $table->string('inicio_data_pagamento');
            $table->string('fim_data_pagamento');
            $table->string('categoria');    
            $table->string('tipo_conta');
            $table->string('forma_pagamento');
            $table->string('descricao');
            $table->string('parcelas');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
