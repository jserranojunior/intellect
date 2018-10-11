<?php

namespace App\Models\Api\v1\Tables;

use Illuminate\Database\Eloquent\Model;
use App\Models\Api\v1\Tables\contas_a_pagar;

class categoria_contas extends Model
{
    protected $table = "categoria_contas";

    public function categoriesToPayWithBills($request){

        $categorieTotalBillsToPay = 0;

        $this->all = self::all();

        $this->contas_a_pagar = new contas_a_pagar;

        foreach($this->all as $categorie){
            $request->categoria_conta_id = $categorie->id;
            $data = $this->contas_a_pagar->index($request);
            $categorieTotalBillsToPay += $data['total'];
           $categorie->bills = $data;
        }      

        $data = ['billsToPay' => $this->all, 'categorieTotalBillsToPay' => $categorieTotalBillsToPay];
        
        return $data;
    }
}
