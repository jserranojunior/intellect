<?php

namespace App\Models\Api\v1\Tables;

use Illuminate\Database\Eloquent\Model;
use DB;
use App\Models\Api\v1\Functions\FormatValue;

class contas_a_pagar extends Model
{
    protected $table = "contas_a_pagar";
    protected $fillable = ['favorecido', 'inicio_data_pagamento', 'descricao', 'fim_data_pagamento', 'categoria', 'forma_pagamento', 'tipo_conta'];

    

    public function index($request){

          
        $this->data = date('Y-m', strtotime($request->data));
         
        $this->contas = self::where(DB::raw("SUBSTRING(inicio_data_pagamento,1,7)"), '<=', $this->data) 
        ->where(DB::raw("SUBSTRING(fim_data_pagamento,1,7)"), '>=', $this->data)  
        ->orWhere('id' ,'>', '0')  
        ->where(DB::raw("SUBSTRING(fim_data_pagamento,1,7)"), '=', null)                                    
        ->where(DB::raw("SUBSTRING(inicio_data_pagamento,1,7)"), '<=', $this->data) 
        ->orWhere(DB::raw("SUBSTRING(fim_data_pagamento,1,7)"), '=', '')                                
        ->where(DB::raw("SUBSTRING(inicio_data_pagamento,1,7)"), '<=', $this->data) 
        ->get();

        $amountPaid = new conta_paga;       
                
        $billsValue = new valores_contas_a_pagar;
       
        foreach($this->contas as $conta){
            
            
            

            $this->values = $billsValue->pegarValor($this->data, $conta->id);
            
            foreach($this->values as $value){ 
                $conta->valor = $value->valor;
                
                $valuePaid = $amountPaid->getAmountPaid($this->data, $value->id);

            if($valuePaid == ''){
                 $this->contas->valor_pago = 0;
            }else{
          
                foreach($valuePaid as $item){
                    $conta->valor_pago = $item->valor;
                }
            }

            }
            
        }
       
         
        // FILTRO
        if($request->categoria_conta_id !== "" ){
            $this->contas = $this->contas->where('categoria', '=' ,$request->categoria_conta_id);
        }

        $sumValuesPay = $this->contas->sum('valor');

        $data = ['total' => $sumValuesPay, 'bills' => $this->contas];
     
        return($data);       
    
    }
    
    public function store($request){         
        $request['valor'] = str_replace(',','.',str_replace('.', '', $request->valor));
 

        $billsToPay = new contas_a_pagar;
        $billsToPay->fill($request->input());      
        $billsToPay->save();

        $billsValue = new valores_contas_a_pagar; 
            
        $inputValueToPay = [
            'contas_a_pagar_id' => $billsToPay ['id'],
            'data_pagamento' => $billsToPay ['inicio_data_pagamento'],
            'valor' => $request['valor'],
            ];
             
            $this->value = $billsValue->newValue($inputValueToPay);
              
     
        $data = ['bills' => $billsToPay, 'value' =>  $this->value];

        return($data);
    }

    public function put($request, $id){
        $billsToPay = new contas_a_pagar;
        $billsToPay = $billsToPay::find($id);
        $billsToPay->fill($request->input());      
        $billsToPay->save();
        return($billsToPay);
    }

    public function getBill($id, $date){
        $this->data = $date;
        $this->conta = self::where('id',$id)->get();

        $billsValue = new valores_contas_a_pagar;

        foreach($this->conta as $conta){
            $this->values = $billsValue->pegarValor($this->data, $conta->id);
            
            foreach($this->values as $value){ 
                $conta->valor = $value->valor; 
                $conta->data_pagamento = $value->data_pagamento;               
            }
            
        }


        return($this->conta);
    }

}
