<?php

/*
CONTAS
    CONTA FIXA
    CONTA PARCELADA
    CONTA EXTRA

    Data Inicio
    Data Fim

Se a data da Inicio for maior que a data atual
E a data Fim for menor que a data atual

OU

Se a data Inicio for maior que a data atual 
E a data fim for vazio
   

MUDAR DATAS PARA UMA TABELA PRÓPRIA
*/

namespace App\Models;
use DB;

use Illuminate\Database\Eloquent\Model;
use App\Models\categoria_contas;
use App\Models\contas_a_pagar;
use App\Models\valores_contas_a_pagar;

class financeiro extends Model
{

    public function __construct(categoria_contas $categoriaContas, contas_a_pagar $contasAPagar, valores_contas_a_pagar $valoresContasAPagar){
        $this->categoriaContas = $categoriaContas;
        $this->contas = $contasAPagar;
        $this->valoresContasAPagar = $valoresContasAPagar;
    }  

    public function allAccounts(){  
         $categoriaContas = $this->categoriaContas::all();       

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
           
            // $contasCategoriaSoma = $contas->sum('valor');
            $categoria->contas = $contas;   
          //  $categoria->soma = $contasCategoriaSoma;        
        }
       // $categoriaContasTotal = $categoriaContas->sum('soma');
        
  

        $dados = [
            "contasAPagar" => $categoriaContas,
          //  "totalContasAPagar" => $categoriaContasTotal
        ];

        

        return( $dados );
    }


    public function index(){

       $dataAtual = "2018-01-04";  
       $dataMesAno = "2018-01";

        $select = DB::table('contas_a_pagar')
        ->where(DB::raw("SUBSTRING(data_pagamento,1,7)"), '>=', $dataMesAno)
        ->where(DB::raw("SUBSTRING(data_pagamento_final,1,7)"), '<=', $dataMesAno)  
        
        ->orwhere(DB::raw("SUBSTRING(data_pagamento, 1,7)"), '<=', $dataMesAno)
        ->where(DB::raw("SUBSTRING(data_pagamento,1,7)"), '=', '')

        ->get();

       // dd($select);
    }
}
