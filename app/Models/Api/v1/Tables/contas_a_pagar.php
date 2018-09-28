<?php

namespace App\Models\Api\v1\Tables;

use Illuminate\Database\Eloquent\Model;

class contas_a_pagar extends Model
{
    protected $table = "contas_a_pagar";
    protected $fillable = ['favorecido', 'inicio_data_pagamento'];
    
    public function store($request){
        $billsToPay = new contas_a_pagar;
        $billsToPay->fill($request->input());      
        $billsToPay->save();
        return($billsToPay);
    }

    public function put($request, $id){
        $billsToPay = new contas_a_pagar;
        $billsToPay = $billsToPay::find($id);
        $billsToPay->fill($request->input());      
        $billsToPay->save();
        return($billsToPay);
    }


}
