<?php

namespace App\Http\Controllers\Api\v1\Financial;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Api\v1\Tables\categoria_contas;
use App\Models\Api\v1\Functions\dateFunction;

class ApiFinancial extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
        {
            if($request->data == '' or $request->data == null){
                $request['data'] = date('Y-m-d');
            }

            $this->date = new dateFunction;
            $this->date = $this->date->billsIndex($request->data,'01','31');
            

            $this->categoriesAndBillsToPay = new categoria_contas;
            $this->categoriesAndBillsToPay = $this->categoriesAndBillsToPay->categoriesToPayWithBills($request);
            
            $data = ['dates' => $this->date, 'data' => $this->categoriesAndBillsToPay];
            // dd($data);
            return($data);
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
        //
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
