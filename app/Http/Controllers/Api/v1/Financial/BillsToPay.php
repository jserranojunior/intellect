<?php

namespace App\Http\Controllers\Api\v1\Financial;

use Illuminate\Http\Response;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Api\v1\Tables\contas_a_pagar;

class BillsToPay extends Controller
{

    
    public function __construct(contas_a_pagar $billsToPay){
        $this->billsToPay = $billsToPay;
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
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->billsToPay = $this->billsToPay->store($request);
        return($this->billsToPay);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $this->date = '2018-09-11';
        $this->billsToPay = $this->billsToPay->getBill($id, $this->date);

        //$this->billsToPay::where('id',$id)->get();
        
        if($this->billsToPay->isEmpty()){
            return response()->json(['response' => 'Usuario não encontrado'], 400);           
        }

        

        $data = ['data' => $this->billsToPay, 
        'response' => 'Usuario Encontrado', 
        'meta' => ['path' => '/financeiro/api/v1/financeiro']];
        
        
        return response()->json($data, 200);        
     
    
}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {       
        $this->billsToPay = $this->billsToPay->put($request, $id);
        return($this->billsToPay);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
