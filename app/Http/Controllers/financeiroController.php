<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class financeiroController extends Controller
{
    public function index()
    {
        $categoria_contas = DB::table('categoria_contas')
        ->get();   

        $dados_contas = array();
        
       
        foreach($categoria_contas as $categoria){  

            $categoriaTotal = 0;
           $contas_a_pagar = DB::table('contas_a_pagar')
           ->where('categoria', $categoria->id)
           ->get();


           //$dados_categorias = array('nome_categorias' => $categoria->nome, 'contas' => $contas_a_pagar);
           foreach($contas_a_pagar as $conta){
           $contas = array(
               'id' => $conta->id,
               'nome' => $conta->nome,
               'data_pagamento' => $conta->data_pagamento,
               'valor' => $conta->valor,
           );

           $categoriaTotal += $conta->valor; 
           $conta->valor = number_format($conta->valor,2, ',','.');         
           }

           $categoriaTotal = number_format($categoriaTotal,2, ',','.');
           
           $dados_categorias[$categoria->nome]['contas'] = $contas_a_pagar;
           $dados_categorias[$categoria->nome]['categoria_nome'] = $categoria->nome;
           $dados_categorias[$categoria->nome]['categoria_total'] = $categoriaTotal;
           $dados_categorias[$categoria->nome]['categoria_cor'] = $categoria->cor;
           
           

          // $dados_contas['nome' => $categoria->nome]['contas'] = $contas_a_pagar; 
        }
        
        array_push($dados_contas, $dados_categorias);
    

        $dados = array('dados' => $dados_contas);

        

        return view('financeiro')->with($dados);
    }
}
