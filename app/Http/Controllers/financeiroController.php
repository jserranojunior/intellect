<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

use App\Models\Tables\categoria_contas;
use App\Models\Tables\categorias_contas_receber;
use App\Http\Controllers\Api\v1\Financial\BillsToPay;
use App\Http\Controllers\Api\v1\Financial\ApiFinancial;

class financeiroController extends Controller
{
    public function __construct( 
        ApiFinancial $ApiFinancial,
        categoria_contas $categoria_contas, 
        categorias_contas_receber $categorias_contas_receber,
        BillsToPay $BillsToPay
        ){
   
        $this->ApiFinancial = $ApiFinancial;    
        $this->categoria_contas = $categoria_contas;
        $this->categorias_contas_receber = $categorias_contas_receber;
        $this->BillsToPay = $BillsToPay;
    }

    public function edit(Request $request){
        $data = $this->apiBillsToPay->edit($request->id, $request->data);
       
        return view('financeiro.editarconta')->with($data);
    }


    public function editBillPay($id){
        $editBills = $this->financeiro->editarContaPagar($id);
     


        $this->dataAtual = date('Y-m-d');
        $this->categoria_contas = $this->categoria_contas->all();
        $dados = array(
            'categorias' => $this->categoria_contas,
            'dataAtual' => $this->dataAtual,
            'conta' => $editBills,
        );


        return view('financeiro.editarconta')->with($dados);
    }

    public function allAccounts(Request $request){
             
        $this->ApiFinancial = $this->ApiFinancial->index($request);
        
        return view('Financial.index')->with($this->ApiFinancial);
    }

    public function apiBillsMonth(){
        $dados =  $this->financeiro->allAccounts();    
        return ($dados);
        //return view('financeiro')->with($dados); 
    }

    public function create(){
        $this->dataAtual = date('Y-m-d');
        $this->categoria_contas = $this->categoria_contas->all();
        $dados = array(
            'categorias' => $this->categoria_contas,
            'dataAtual' => $this->dataAtual,
        );
        
        return view('Financial.create')->with($dados);
    }

    public function novaContaReceber(){
        $this->dataAtual = date('Y-m-d');
        $this->categorias_contas_receber = $this->categorias_contas_receber->all();
        $dados = array(
            'categorias' => $this->categorias_contas_receber,
            'dataAtual' => $this->dataAtual,
        );
        
        return view('financeiro.novacontareceber')->with($dados);
    }


    public function store(Request $request){
        $request = $request->all();
        $cadastrar = $this->financeiro->cadastrar($request);
        return redirect('/financeiro/novo');
    }

    public function storeContasReceber(Request $request){
        $request = $request->all();
        $cadastrar = $this->financeiro->cadastrarContaReceber($request);
        return redirect('/financeiro');
    }
}
