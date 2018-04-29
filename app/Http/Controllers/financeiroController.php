<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Models\financeiro;

class financeiroController extends Controller
{
    public function __construct(Financeiro $financeiro){
        $this->financeiro = $financeiro;
    }

    public function allAccounts(){
        $dados =  $this->financeiro->allAccounts();    
        return view('financeiro')->with($dados); 
    }

    public function create(){
        return view('financeiro.novaconta');
    }

    public function store(Request $request){
        $request = $request->all();
        $cadastrar = $this->financeiro->cadastrar($request);
        return($cadastrar);
    }
}
