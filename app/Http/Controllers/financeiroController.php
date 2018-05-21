<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Models\financeiro;
use App\Models\categoria_contas;

class financeiroController extends Controller
{
    public function __construct(Financeiro $financeiro, categoria_contas $categoria_contas){
        $this->financeiro = $financeiro;
        $this->categoria_contas = $categoria_contas;
    }

    public function allAccounts(){
        $dados =  $this->financeiro->allAccounts();    
        return view('financeiro')->with($dados); 
    }

    public function apiBillsMonth(){
        $dados =  $this->financeiro->allAccounts();    
        return ($dados);
        //return view('financeiro')->with($dados); 
    }

    public function create(){
        $this->categoria_contas = $this->categoria_contas->all();
        $dados = array('categorias' => $this->categoria_contas);
        return view('financeiro.novaconta')->with($dados);
    }

    public function store(Request $request){
        $request = $request->all();
        $cadastrar = $this->financeiro->cadastrar($request);
       return($cadastrar);
    }
}
