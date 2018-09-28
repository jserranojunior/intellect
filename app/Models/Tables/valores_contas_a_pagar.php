<?php

namespace App\Models\Tables;

use Illuminate\Database\Eloquent\Model;
use DB;

class valores_contas_a_pagar extends Model
{
    protected $table = "valores_contas_a_pagar";


    public function valorParaPagar($data, $contaId){
        $this->data = $data; // validar data
        $this->id = $contaId;

        $this->valorParaPagar = DB::table($this->table)->where('contas_a_pagar_id', $this->id)                
        ->where(DB::raw("SUBSTRING(data_pagamento,1,7)"), '=', $this->data) 
        ->orWhere('contas_a_pagar_id', $this->id)
        ->where(DB::raw("SUBSTRING(data_pagamento,1,7)"), '<=', $this->data) 
        ->take(1)
        ->get();         

        foreach($this->valorParaPagar as $item){
            return ['valor' => $item->valor, 'data_pagamento' => $item->data_pagamento];
        }   
    }

    public function store(){


       
    }


}
