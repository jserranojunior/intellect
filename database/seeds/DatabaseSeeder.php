<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       DB::table('valores_contas_a_pagar')
       ->insert(['valor' => 13.56,
       'data_pagamento' => "2018-02-05",
       'contas_a_pagar_id' => 2
       ]);
        
/*
        DB::table('categoria_contas')
        ->insert(['nome' => 'Poupança',
        'tipo' => 'pagamento',        
        'cor' => 'categoria-poupanca']);

        DB::table('contas_a_pagar')
        ->insert(['nome' => 'Casa',
        'valor' => 1000.00,
        'data_pagamento' => '2018-01-04',
        'categoria' => 4]);

        DB::table('contas_a_pagar')
        ->insert(['nome' => 'Estudos',
        'valor' => 100.00,
        'data_pagamento' => '2018-01-04',
        'categoria' => 4]);


        DB::table('contas_a_pagar')
        ->insert(['nome' => 'Empresa',
        'valor' => 100.00,
        'data_pagamento' => '2018-01-04',
        'categoria' => 4]);
        

/* COMPRAS 
    DB::table('categoria_contas')
    ->insert(['nome' => 'Compras',
    'tipo' => 'pagamento',        
    'cor' => 'categoria-compras']);

    DB::table('contas_a_pagar')
    ->insert(['nome' => 'Tenis',
    'valor' => 100.00,
    'data_pagamento' => '2018-01-04',
    'categoria' => 3]);

    DB::table('contas_a_pagar')
    ->insert(['nome' => 'Bolsa Carteiro',
    'valor' => 80.00,
    'data_pagamento' => '2018-01-04',
    'categoria' => 3]);
*/


/* URGENCIA
    DB::table('categoria_contas')
    ->insert(['nome' => 'Urgencias',
    'tipo' => 'pagamento',        
    'cor' => 'categoria-urgencia']);

    DB::table('contas_a_pagar')
    ->insert(['nome' => 'Remédio',
    'valor' => 45.00,
    'data_pagamento' => '2018-01-04',
    'categoria' => 2]);

    DB::table('contas_a_pagar')
    ->insert(['nome' => 'Remédio Pai',
    'valor' => 35.00,
    'data_pagamento' => '2018-01-04',
    'categoria' => 2]);
*/


/* ESSENCIAIS
    DB::table('categoria_contas')
    ->insert(['nome' => 'Essenciais',
    'tipo' => 'pagamento',        
    'cor' => 'categoria-essenciais']);

    DB::table('contas_a_pagar')
    ->insert(['nome' => 'ACADEMIA',
    'valor' => 60.00,
    'data_pagamento' => '2018-01-04',
    'categoria' => 1]);

    DB::table('contas_a_pagar')
    ->insert(['nome' => 'CLARO INTERNET',
    'valor' => 40.00,
    'data_pagamento' => '2018-01-04',
    'categoria' => 1]);

    DB::table('contas_a_pagar')
    ->insert(['nome' => 'telefone',
    'valor' => 150.00,
    'data_pagamento' => '2018-01-15',
    'categoria' => 1]);

    DB::table('contas_a_pagar')
    ->insert(['nome' => 'Luz',
    'valor' => 100.00,
    'data_pagamento' => '2018-02-15',
    'categoria' => 1]);  
*/
    }
    
}
