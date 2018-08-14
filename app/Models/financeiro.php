<?php

namespace App\Models;
use DB;
use Illuminate\Database\Eloquent\Model;
use App\Models\Functions\Data;
use App\Models\Tables\categorias_contas_receber;
use App\Models\Tables\contas_a_receber;
use App\Models\Tables\valor_contas_a_receber;
use App\Models\Tables\categoria_contas;
use App\Models\Tables\contas_a_pagar;
use App\Models\Tables\valores_contas_a_pagar;


class financeiro extends Model
{
   
    public function __construct( 
        Data $Datas,

        categorias_contas_receber $categoriaContasReceber, 
        contas_a_receber $contasAReceber,         
        valor_contas_a_receber $valoresContasAReceber,

        categoria_contas $categoriaContas, 
        contas_a_pagar $contasAPagar, 
        valores_contas_a_pagar $valoresContasAPagar
        ){
            /* RECEBER */
        $this->categoriaContasReceber = $categoriaContasReceber;
        $this->contasReceber = $contasAReceber;
        $this->valoresContasAReceber = $valoresContasAReceber;

            /* PAGAR*/
        $this->categoriaContas = $categoriaContas;
        $this->contas = $contasAPagar;
        $this->valoresContasAPagar = $valoresContasAPagar;

        $this->data = "2018-07";
        $this->datas = $Datas;
    }  

    public function allAccounts($request){
        
        if($request->data > ''){
            $this->data = $request->data;
        }else{
            $this->data = date('Y-m');
        }

        $datas = $this->datas->billsIndex($this->data, 1, 31);
        
              
        /* CONTAS A PAGAR */
        $categoriaContas = $this->categoriaContas::all(); 
        foreach($categoriaContas as $categoria){          
            $contas = $this->contas->contasMensais($this->data, $categoria->id);           
            foreach($contas as $conta){              
                $valoresContasAPagar = $this->valoresContasAPagar->valorParaPagar($this->data, $conta->id);
                $conta->valor =  $valoresContasAPagar;                                 
            }        
            $contasCategoriaSoma = $contas->sum('valor');
            $categoria->contas = $contas;   
            $categoria->soma = $contasCategoriaSoma;  
        }

        /* CONTAS A RECEBER */
        $categoriaContasReceber = $this->categoriaContasReceber::all();         

        foreach($categoriaContasReceber as $categoriaReceber){          
            $contasReceber = $this->contasReceber->contasMensais($this->data, $categoriaReceber->id);           
            foreach($contasReceber as $contaReceber){              
                $valoresContasAPagar = $this->valoresContasAReceber->valorParaReceber($this->data, $contaReceber->id);
                $contaReceber->valor =  $valoresContasAPagar;                                 
            }         

            $contasCategoriaReceberSoma = $contasReceber->sum('valor');
            $categoriaReceber->contas = $contasReceber;   
            $categoriaReceber->soma = $contasCategoriaReceberSoma;  
        }

        $TotalContasAPagar = $categoriaContas->sum('soma');
        $TotalContasAReceber = $categoriaContasReceber->sum('soma');

        $sobraDoPagamentoDeContas = $TotalContasAReceber - $TotalContasAPagar;

        $dados = [
            "contasAPagar" => $categoriaContas,
            "contasAReceber" => $categoriaContasReceber,
            "totalContasAPagar" => $TotalContasAPagar,
            "totalContasAReceber" => $TotalContasAReceber,
            "sobraDoPagamentoDeContas" => $sobraDoPagamentoDeContas,
            "datas" => $datas,
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


    public function cadastrarContaReceber($request){        
       
        $dados_contas_a_receber = array(
            'favorecedor' => $request['favorecedor'],        
            'inicio_data_pagamento' => $request['inicio_data_pagamento'],
            'fim_data_pagamento' => $request['fim_data_pagamento'],
            'categoria' => $request['categoria'],
            'tipo_conta' => $request['tipo_conta'],
            'parcelas' => '',
            'forma_pagamento' => $request['forma_pagamento'],
            'descricao' => $request['descricao'],
        );

        DB::table('contas_a_receber')->insert($dados_contas_a_receber);
        $ultima_conta = DB::table('contas_a_receber')
                        ->select('id')
                        ->orderBy('id', 'desc')
                        ->take(1)
                        ->get();
        foreach($ultima_conta as $item){
            $conta_a_receber_id = $item->id;
        }      

        $dados_valor_contas_a_receber = array(
            'contas_a_receber_id' => $conta_a_receber_id,
            'data_pagamento' => $request['inicio_data_pagamento'],
            'valor' => $request['valor'],
        );

        DB::table('valores_contas_a_receber')->insert($dados_valor_contas_a_receber);       
       return("Cadastrado");       
    }

    public function editarContaPagar($id, $data){
        $editBills = $this->contas::where('id',$id)->get();
        return $editBills; 
    }

}
