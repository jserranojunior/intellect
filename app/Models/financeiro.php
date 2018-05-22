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
        $this->data = "2018-06";
         $categoriaContas = $this->categoriaContas::all();  
   
        /* CORRIGIR MESES USANDO WHERE RAW */
        foreach($categoriaContas as $categoria){
            $contas = $this->contas::where('categoria', $categoria->id)
                                    ->where(DB::raw("SUBSTRING(inicio_data_pagamento,1,7)"), '<=', $this->data) 
                                    ->where(DB::raw("SUBSTRING(fim_data_pagamento,1,7)"), '>=', $this->data)  
                                    ->orWhere('categoria', $categoria->id)   
                                    ->where(DB::raw("SUBSTRING(fim_data_pagamento,1,7)"), '=', null)                                
                                    ->where(DB::raw("SUBSTRING(inicio_data_pagamento,1,7)"), '<=', $this->data) 
                                    ->orWhere('categoria', $categoria->id)   
                                    ->where(DB::raw("SUBSTRING(fim_data_pagamento,1,7)"), '=', '')                                
                                    ->where(DB::raw("SUBSTRING(inicio_data_pagamento,1,7)"), '<=', $this->data) 
                                    ->get();
            
        foreach($contas as $conta){
            foreach($contas as $conta){
                $valoresContasAPagar = $this->valoresContasAPagar::whereMonth('data_pagamento', '=' ,'01')
                ->where('contas_a_pagar_id', $conta->id)                
                ->orWhere('contas_a_pagar_id', $conta->id)
                ->where(DB::raw("SUBSTRING(data_pagamento,1,7)"), '<=', $this->data) 
                ->take(1)
                ->get();
                
                foreach($valoresContasAPagar as $valores){
                    $conta->valor =  $valores->valor;
                }                
            }
        }         
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
       
        $dados_contas_a_pagar = array(
            'favorecido' => $request['favorecido'],        
            'inicio_data_pagamento' => $request['inicio_data_pagamento'],
            'fim_data_pagamento' => $request['fim_data_pagamento'],
            'categoria' => $request['categoria'],
            'tipo_conta' => $request['tipo_conta'],
            'parcelas' => '',
            'forma_pagamento' => $request['forma_pagamento'],
            'descricao' => $request['descricao'],
        );

        DB::table('contas_a_pagar')->insert($dados_contas_a_pagar);

        $ultima_conta = DB::table('contas_a_pagar')
                        ->select('id')
                        ->orderBy('id', 'desc')
                        ->take(1)
                        ->get();

        foreach($ultima_conta as $item){
            $conta_a_pagar_id = $item->id;
        }
       

        $dados_valor_contas_a_pagar = array(
            'contas_a_pagar_id' => $conta_a_pagar_id,
            'data_pagamento' => $request['inicio_data_pagamento'],
            'valor' => $request['valor'],
        );

        DB::table('valores_contas_a_pagar')->insert($dados_valor_contas_a_pagar);
       
       return("Cadastrado");
       
    }

}
