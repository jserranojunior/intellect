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
        <div class="row justify-content-md-center">
            <div class="col-md-3 ">

<div class="card">
    <div class="card-header  text-center">
        <h5>Nova Conta</h5>
    </div>
    <div class="card-body">
    <form action="{{Route('financeiro.adicionar')}}" method="post">
        <div class="form-group">     
            <!-- <label for="favorecido">Favorecido</label> -->
            <input type="text" class="form-control" name="favorecido" placeholder="Favorecido">
            <!-- COLOCAR SELECT COM OPÇÃO DE ADICIONAR CONTA -->
        </div>

         <div class="form-group">     
            <label for="Descricao">Descrição</label>
            <input type="text" class="form-control" name="Descricao">
        </div>

        <div class="form-group">     
            <label for="valor">Valor</label>
            <input type="text" class="form-control" name="valor">
        </div>
        <div class="form-group"> 
            <label for="inicio_data_pagamento">Inicio Pagamento</label>
            <input type="date" class="form-control" name="inicio_data_pagamento">
        </div>

        <div class="form-group"> 
            <label for="fim_data_pagamento">Fim Pagamento</label>
            <input type="date" class="form-control" name="fim_data_pagamento">
        </div>

        <div class="form-group"> 
            <label for="Categoria" class="label">Categoria</label>
            <select name="categoria" id="" class="form-control">
                <option value="1">Essenciais</option>
                <option value="2">Urgencia</option>
            </select>
        </div>

        <div class="form-group"> 
            <label for="tipo_conta" class="label">Tipo de Conta</label>
            <select name="tipo_conta" id="" class="form-control">
                <option value="1">Extra</option>
                <option value="2">Fixa</option>
                <option value="2">Parcelada</option>
            </select>
        </div>

        <div class="form-group"> 
            <label for="forma_pagamento" class="label">Forma de Pagamento</label>
            <select name="forma_pagamento" id="" class="form-control">
                <option value="1">Terceiro</option>
                <option value="2">Cartão</option>
                <option value="3">Dinheiro</option>
                <option value="4">Débito</option>
                <option value="5">Débito Automatico</option>
            </select>
        </div>

    </form>
    </div>
    <div class="card-footer text-center">
        <input type="hidden" name="_token" value="{{ csrf_token() }}">
        <input type="submit" value="Cadastrar" class="btn btn-primary">
    </div>
</div>


     
                
            </div>
        </div>

        </div>
    </body>
<html>