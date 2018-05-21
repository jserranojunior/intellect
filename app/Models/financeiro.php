<?php

namespace App\Models;
use DB;
use Illuminate\Database\Eloquent\Model;


class financeiro extends Model
{

    public function __construct(categoria_contas $categoriaContas, contas_a_pagar $contasAPagar, valores_contas_a_pagar $valoresContasAPagar){
        $this->categoriaContas = $categoriaContas;
        $this->contas = $contasAPagar;
        $this->valoresContasAPagar = $valoresContasAPagar;
    }  

    public function allAccounts(){  
         $categoriaContas = $this->categoriaContas::all();       
        /* CORRIGIR MESES USANDO WHERE RAW */
        foreach($categoriaContas as $categoria){
            $contas = $this->contas::where('categoria', $categoria->id)
                                    ->whereMonth('inicio_data_pagamento','<=','01')
                                    ->whereMonth('fim_data_pagamento','>=','01')
                                    ->orWhere('fim_data_pagamento','=','')
                                    ->WhereMonth('inicio_data_pagamento','<=','01')    
                                    ->where('categoria', $categoria->id)                                
                                    ->get();
            
        foreach($contas as $conta){
            foreach($contas as $conta){
                $valoresContasAPagar = $this->valoresContasAPagar::whereMonth('data_pagamento', '=' ,'01')
                ->where('contas_a_pagar_id', $conta->id)                
                ->orWhere('contas_a_pagar_id', $conta->id)
                ->whereMonth('data_pagamento', '<=','01')
                ->take(1)
                ->get();
                
                foreach($valoresContasAPagar as $valores){
                    $conta->valor =  $valores->valor;
                }                
            }
        }
           // $contas = $contas->whereMounth('inicio_data_pagamento','02');           
             $contasCategoriaSoma = $contas->sum('valor');
            $categoria->contas = $contas;   
            $categoria->soma = $contasCategoriaSoma;        
        }
        $categoriaContasTotal = $categoriaContas->sum('soma');
        $dados = [
            "contasAPagar" => $categoriaContas,
            "totalContasAPagar" => $categoriaContasTotal
        ];        
        return( $dados );
    }

    public function cadastrar($request){
       return($request);
    }

}
