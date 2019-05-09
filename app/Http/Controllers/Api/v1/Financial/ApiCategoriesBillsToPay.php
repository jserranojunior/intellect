<?php

namespace App\Http\Controllers\Api\v1\Financial;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Api\v1\Tables\categoria_contas;

class ApiCategoriesBillsToPay extends Controller
{
    
    // FAZER UM CONSTRUCT

    public function index(Request $request)
    {
        $this->categoriesAndBillsToPay = new categoria_contas;
        $this->categoriesAndBillsToPay = $this->categoriesAndBillsToPay->categoriesToPayWithBills($request);
        
        $data = $this->categoriesAndBillsToPay;
        return($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
      
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->categoriesAndBillsToPay = new categoria_contas;
        $this->categoriesAndBillsToPay = $this->categoriesAndBillsToPay->store($request);
        return($this->categoriesAndBillsToPay);
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
        //
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
        //
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
