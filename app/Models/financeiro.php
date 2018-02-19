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

class financeiro extends Model
{
    public function index(){

       $dataAtual = "2018-01-04";  
       $dataMesAno = "2018-01";

        $select = DB::table('contas_a_pagar')
        ->where(DB::raw("SUBSTRING(data_pagamento,1,7)"), '>=', $dataMesAno)
        ->where(DB::raw("SUBSTRING(data_pagamento_final,1,7)"), '<=', $dataMesAno)  
        
        ->orwhere(DB::raw("SUBSTRING(data_pagamento, 1,7)"), '<=', $dataMesAno)
        ->where(DB::raw("SUBSTRING(data_pagamento,1,7)"), '=', '')

        ->get();

        dd($select);
    }
}
