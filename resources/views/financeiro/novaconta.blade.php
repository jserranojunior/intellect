<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="{{url('/css/all.css')}}">
    <title>Financeiro</title>
  </head>
    <body>

        <div class="container-fluid">
                <h1 class="text-center">NOVA CONTA</h1>
   

        <div class="row justify-content-md-center">
            <div class="col-md-3 ">
                <form action="{{Route('financeiro.adicionar')}}" method="post">
                    <label for="nome">Nome da conta</label>
                    <input type="text" class="form-control" name="nome">

                    <label for="valor">Valor</label>
                    <input type="text" class="form-control" name="valor">

                    <label for="inicio_data_pagamento">Inicio Pagamento</label>
                    <input type="text" class="form-control" name="inicio_data_pagamento">

                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <input type="submit" value="Cadastrar" class="btn btn-primary">
                </form>
            </div>
        </div>

        </div>
    </body>
<html>