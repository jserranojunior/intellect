<?php

namespace App\Models\Api\v1\Tables;

use Illuminate\Database\Eloquent\Model;
use DB;

class valores_contas_a_pagar extends Model
{
    protected $table = "valores_contas_a_pagar";
    protected $fillable = ['data_pagamento', 'contas_a_pagar_id', 'valor'];

    public function pegarValor($data, $id){

        $this->data = date('Y-m',strtotime($data));
        $this->id = $id;
        $this->valorParaPagar = self::where('contas_a_pagar_id', '=', $this->id)                
        ->where(DB::raw("SUBSTRING(data_pagamento,1,7)"), '=', $this->data)
        ->orWhere('contas_a_pagar_id', '=',  $this->id)
        ->where(DB::raw("SUBSTRING(data_pagamento,1,7)"), '<=', $this->data)
        ->orderBy('id', 'desc')
        ->take(1)
        ->get();     

        return $this->valorParaPagar;        
    }

    public function newValue($request){

        $newValueCad = new valores_contas_a_pagar;
        $newValueCad->fill($request);     
        $newValueCad->save();
        return $newValueCad;
    }


}

