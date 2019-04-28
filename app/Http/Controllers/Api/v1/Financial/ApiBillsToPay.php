<?php

namespace App\Http\Controllers\Api\v1\Financial;

use Illuminate\Http\Response;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Api\v1\Tables\contas_a_pagar;
use App\Models\Api\v1\Tables\valores_contas_a_pagar;
use App\Models\Api\v1\Tables\categoria_contas;

class ApiBillsToPay extends Controller
{

    
    public function __construct(contas_a_pagar $billsToPay, valores_contas_a_pagar $valores_contas_a_pagar, categoria_contas $categoria_contas){
        $this->billsToPay = $billsToPay;
        $this->categoria_contas = $categoria_contas;
        $this->valores_contas_a_pagar = $valores_contas_a_pagar;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $data = $this->billsToPay->index($request);
        return $data;

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $this->dataAtual = date('Y-m-d');
        $this->categoria_contas = $this->categoria_contas->all();
        $dados = array(
            'categorias' => $this->categoria_contas,
            'dataAtual' => $this->dataAtual,
        );
        
        return $dados;
    }


    public function store(Request $request)
    {
        $store = $this->billsToPay->store($request);
        return $store;
    }


    public function show($id)
    {
        //
    }

 
    public function edit($id, $date)
    {

       
        $this->billsToPay = $this->billsToPay->getBill($id, $date);

        //$this->billsToPay::where('id',$id)->get();
        
        if($this->billsToPay->isEmpty()){
            return response()->json(['response' => 'Valor não encontrado'], 400);           
        }

        

        $data = ['data' => $this->billsToPay, 
        'response' => 'Usuario Encontrado', 
        'meta' => ['path' => '/financeiro/api/v1/financeiro']];
        
        
        return response()->json($data, 200);        
     
    
}

    public function update(Request $request, $id)
    {       
        $this->billsToPay = $this->billsToPay->put($request, $id);

        $this->valores_contas_a_pagar = $this->valores_contas_a_pagar->put($request, $id);

        $data = ['contas' => $this->billsToPay, 'valor' => $this->valores_contas_a_pagar];
        return($data);
    }


    public function destroy($id)
    {
        //
    }
}
