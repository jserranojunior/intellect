<?php

namespace App\Models\Api\v1\Tables;

use Illuminate\Database\Eloquent\Model;
use App\Models\Api\v1\Tables\contas_a_pagar;

class categoria_contas extends Model
{
    protected $table = "categoria_contas";

    protected $fillable = ['nome', 'cor', 'tipo'];


    public function store($request){
        
        try{
            $categories = new categoria_contas;
        $categories->fill($request->input());
        $categories->save();
        return("$categories cadastrado");
        }catch(Error $e){
            return $e;
        }

        
    }

    public function categoriesToPayWithBills($request){

        $categorieTotalBillsToPay = 0;

        $this->all = self::all();
        

        $this->contas_a_pagar = new contas_a_pagar;

        foreach($this->all as $categorie){
            $request->categoria_conta_id = $categorie->id;
            $data = $this->contas_a_pagar->index($request);
            $categorieTotalBillsToPay += $data['total'];
           $categorie->categories = $data;
        }      

        // $this->all = $this->all->toJson(JSON_PRETTY_PRINT);
        
        $data = ['billsToPay' => $this->all, 'categorieTotalBillsToPay' => $categorieTotalBillsToPay];
        
        return($data);
    }
}
