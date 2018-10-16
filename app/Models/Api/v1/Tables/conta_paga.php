<?php

namespace App\Models\Api\v1\Tables;

use Illuminate\Database\Eloquent\Model;
use DB;
class conta_paga extends Model
{
    protected $table = "conta_paga";

    public function getAmountPaid($date, $id){       
        $data = DB::table($this->table)
        ->where('data_pagamento', $date)
        ->where('id_valor_conta_a_pagar', $id)
        ->take(1)
        ->get();
        
       // $data = $data->toJson();
       

        
            return $data;
        
  
    }
}
