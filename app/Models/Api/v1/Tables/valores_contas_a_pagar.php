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

    public function put($request){

        // Primeiro ele procura o registro, caso tenha ele busca o ID na tabela valores,
        // em seguida ele busca se o id já está cadastrado se não tiver ele insere usando o first Create
        
        $data_pagamento_mes_ano = substr( $request->data_pagamento, 0,7);

        
        $this->valorParaPagar = self::where('contas_a_pagar_id', '=', $request->contas_a_pagar_id)                
        ->where(DB::raw("SUBSTRING(data_pagamento,1,7)"), '=', $data_pagamento_mes_ano)        
        ->orderBy('id', 'desc')
        ->take(1)
        ->get();  



        if($this->valorParaPagar->isNotEmpty()){
            
        foreach($this->valorParaPagar as $itemPagar){
            $idParaAtualizar = $itemPagar->id;                      
        }
        }else{        
            $idParaAtualizar = "";
        }


        $valuebillsToPay = new valores_contas_a_pagar;
        $valuebillsToPay = $valuebillsToPay::firstOrCreate(
            ['id' => $idParaAtualizar],
            [
                'contas_a_pagar_id' => $request->contas_a_pagar_id,
                'data_pagamento' => $request->data_pagamento,
                'valor' => $request->valor,
            ]  
        
        );
        $valuebillsToPay->fill($request->input());      
        $valuebillsToPay->save();

        return($valuebillsToPay);
    }


}

