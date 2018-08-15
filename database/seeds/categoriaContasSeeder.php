<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class categoriaContasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
           /* CATEGORIAS */

        //ESSENCIAIS
            DB::table('categoria_contas')
            ->insert(['nome' => 'Essenciais',
            'tipo' => 'pagamento',        
            'cor' => 'categoria-essenciais']);

        //COMPRAS 
            DB::table('categoria_contas')
            ->insert(['nome' => 'Compras',
            'tipo' => 'pagamento',        
            'cor' => 'categoria-compras']);

        //URGENCIA
            DB::table('categoria_contas')
            ->insert(['nome' => 'Urgencias',
            'tipo' => 'pagamento',        
            'cor' => 'categoria-urgencia']);    

        //Poupança   
            DB::table('categoria_contas')
            ->insert(['nome' => 'Poupança',
            'tipo' => 'pagamento',        
            'cor' => 'categoria-poupanca']);

        //Lazer   
            DB::table('categoria_contas')
            ->insert(['nome' => 'Lazer',
            'tipo' => 'pagamento',        
            'cor' => 'categoria-lazer']); 
            
        //Transporte   
            DB::table('categoria_contas')
            ->insert(['nome' => 'Transporte',
            'tipo' => 'pagamento',        
            'cor' => 'categoria-transporte']); 

        //Alimentação   
            DB::table('categoria_contas')
            ->insert(['nome' => 'Alimentação',
            'tipo' => 'pagamento',        
            'cor' => 'categoria-alimentacao']); 

        //Estudos   
            DB::table('categoria_contas')
            ->insert(['nome' => 'Estudos',
            'tipo' => 'pagamento',        
            'cor' => 'categoria-estudos']); 

        //Avulsos   
            DB::table('categoria_contas')
            ->insert(['nome' => 'Avulsos',
            'tipo' => 'pagamento',        
            'cor' => 'categoria-avulsos']);
    }
}
