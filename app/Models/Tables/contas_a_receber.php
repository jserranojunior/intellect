<?php

namespace App\Models\Tables;

use Illuminate\Database\Eloquent\Model;
use DB;

class contas_a_receber extends Model
{
    protected $table = "contas_a_receber";

    public function contasMensais($data, $categoriaId){

        $this->data = $data;
        $this->id = $categoriaId;

        $this->contas = DB::table($this->table)->where('categoria', $categoriaId)
        ->where(DB::raw("SUBSTRING(inicio_data_pagamento,1,7)"), '<=', $this->data) 
        ->where(DB::raw("SUBSTRING(fim_data_pagamento,1,7)"), '>=', $this->data)  
        ->orWhere('categoria', $categoriaId)   
        ->where(DB::raw("SUBSTRING(fim_data_pagamento,1,7)"), '=', null)                                
        ->where(DB::raw("SUBSTRING(inicio_data_pagamento,1,7)"), '<=', $this->data) 
        ->orWhere('categoria', $categoriaId)   
        ->where(DB::raw("SUBSTRING(fim_data_pagamento,1,7)"), '=', '')                                
        ->where(DB::raw("SUBSTRING(inicio_data_pagamento,1,7)"), '<=', $this->data) 
        ->get();
        
        return($this->contas);
            
    }
}
