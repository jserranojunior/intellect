<?php

namespace App\Models\Tables;

use Illuminate\Database\Eloquent\Model;
use DB;

class valor_contas_a_receber extends Model
{
    protected $table = "valores_contas_a_receber";

    public function valorParaReceber($data, $contaId){

        $this->data = $data;
        $this->id = $contaId;

        $this->valorParaPagar = DB::table($this->table)->where('contas_a_receber_id', $this->id)                
        ->where(DB::raw("SUBSTRING(data_pagamento,1,7)"), '=', $this->data) 
        ->orWhere('contas_a_receber_id', $this->id)
        ->where(DB::raw("SUBSTRING(data_pagamento,1,7)"), '<=', $this->data) 
        ->take(1)
        ->get();   


        foreach($this->valorParaPagar as $valor){
            return $valor->valor;
        }
   
    }
}
