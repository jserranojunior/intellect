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
        /*
        DB::table('contas_a_pagar')
        ->insert(['nome' => 'telefone',
        'valor' => 150.00,
        'data_pagamento' => '2018-01-15',
        'categoria' => 1]);
        */
        /*
        DB::table('contas_a_pagar')
        ->insert(['nome' => 'Luz',
        'valor' => 100.00,
        'data_pagamento' => '2018-02-15',
        'categoria' => 1]);

        DB::table('contas_a_pagar')
        ->insert(['nome' => 'Celular',
        'valor' => 1000.00,
        'data_pagamento' => '2018-02-15',
        'categoria' => 2]);
*/


        DB::table('categoria_contas')
        ->insert(['nome' => 'GUARDAR NA POUPANÇA',
        'tipo' => 'pagamento',        
        'cor' => 'categoria-poupanca']);

        DB::table('contas_a_pagar')
        ->insert(['nome' => 'Casa',
        'valor' => 1000.00,
        'data_pagamento' => '2018-01-04',
        'categoria' => 6]);

        DB::table('contas_a_pagar')
        ->insert(['nome' => 'Estudos',
        'valor' => 100.00,
        'data_pagamento' => '2018-01-04',
        'categoria' => 6]);


        DB::table('contas_a_pagar')
        ->insert(['nome' => 'Empresa',
        'valor' => 100.00,
        'data_pagamento' => '2018-01-04',
        'categoria' => 6]);
        /*

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
        */

/*
DB::table('categoria_contas')
->insert(['nome' => 'Compras',
'tipo' => 'pagamento',        
'cor' => 'red']);
*/

    }
    
}
