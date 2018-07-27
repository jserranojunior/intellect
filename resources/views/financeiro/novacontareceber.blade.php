<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="{{url('/css/all.css')}}">
    <link rel="shortcut icon" href="{{{ url('/img/favicon.png') }}}">
    <title>Financeiro</title>
  </head>
    <body>

        <div class="container-fluid">
        <div class="row justify-content-md-center">
            <div class="col-md-3 ">

<div class="card card-primary">
    <div class="card-header text-center">
        <h5>Nova Conta Receber</h5>
    </div>
    <div class="card-body">
    <form action="{{Route('financeiro.adicionar.receber')}}" method="post">
        <div class="form-group">     
           
            <input type="text" class="form-control" name="favorecedor" placeholder="Favorecedor">

        </div>

         <div class="form-group">     
            <label for="descricao">Descrição</label>
            <input type="text" class="form-control" name="descricao">
        </div>

        <div class="form-group">     
            <label for="valor">Valor</label>
            <input type="text" class="form-control" name="valor">
        </div>
        <div class="form-group"> 
            <label for="inicio_data_pagamento">Inicio Pagamento</label>
            <input type="date" class="form-control" value="{{$dataAtual}}" name="inicio_data_pagamento">
        </div>

        <div class="form-group"> 
            <label for="fim_data_pagamento">Fim Pagamento</label>
            <input type="date" class="form-control"  value="{{$dataAtual}}"  name="fim_data_pagamento">
        </div>

        <div class="form-group"> 
            <label for="Categoria" class="label">Categoria</label>
            <select name="categoria" id="" class="form-control">
                @foreach($categorias as $categoria)
                <option value="{{$categoria->id}}">{{$categoria->nome}}</option>
                @endforeach
            </select>
        </div>

        <div class="form-group"> 
            <label for="tipo_conta" class="label">Tipo de Conta</label>
            <select name="tipo_conta" id="" class="form-control">
                <option value="Extra">Extra</option>
                <option value="Fixa">Fixa</option>
                <option value="Parcelada">Parcelada</option>
            </select>
        </div>

        <div class="form-group"> 
            <label for="forma_pagamento" class="label">Forma de Pagamento</label>
            <select name="forma_pagamento" id="" class="form-control">           
                <option value="Dinheiro">Dinheiro</option>
                <option value="Débito">Débito</option>
                <option value="Credito">Credito</option>
            </select>
        </div>

   
    </div>
    <div class="card-footer text-center">
        <input type="hidden" name="_token" value="{{ csrf_token() }}">
        <input type="submit" value="Cadastrar" class="btn btn-primary">
    </div>
</div>
</form>


     
                
            </div>
        </div>

        </div>
    </body>
<html>