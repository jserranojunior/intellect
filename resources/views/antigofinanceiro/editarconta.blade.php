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
        
        @foreach($conta as $item)
        
        

        <div class="container-fluid">
        <div class="row justify-content-md-center">
            <div class="col-md-3 ">

<div class="card">
    <div class="card-header  text-center">
        <h5>EDITAR {{$item->id}}</h5>
    </div>
    <div class="card-body">
    <form action="{{Route('financeiro.adicionar')}}" method="post">
        <div class="form-group">     
            <!-- <label for="favorecido">Favorecido</label> -->
            <input type="text" class="form-control" value="{{$item->favorecido}}" name="favorecido" placeholder="Favorecido">
            <!-- COLOCAR SELECT COM OPÇÃO DE ADICIONAR CONTA -->
        </div>

         <div class="form-group">     
            <label for="descricao">Descrição</label>
            <input type="text" class="form-control" value="{{$item->descricao}}" name="descricao" placeholder="Descrição">
        </div>

        <div class="form-group">     
            <label for="valor">Valor</label>
            <input type="text" class="form-control" value="{{$item->valor}}" name="valor">
        </div>
        <div class="form-group"> 
            <label for="data_pagamento">Data Pagamento</label>
            <input type="date" class="form-control" value="{{$item->data_pagamento}}" name="data_pagamento">
        </div>

    

        <div class="form-group"> 
            <label for="Categoria" class="label">Categoria</label>
            <select name="categoria" id="" class="form-control">               
                @foreach($categorias as $categoria)
                <option @if($item->categoria == $categoria->id) selected @endif value="{{$categoria->id}}">{{$categoria->nome}}</option>
                @endforeach
            </select>
        </div>

        <div class="form-group"> 
            <label for="tipo_conta" class="label">Tipo de Conta</label>
            <select name="tipo_conta" id="" class="form-control">
                <option @if($item->tipo == "Extra") selected @endif value="Extra">Extra</option>
                <option @if($item->tipo == "Fixa") selected @endif value="Fixa">Fixa</option>
                <option @if($item->tipo == "Parcelada") selected @endif value="Parcelada">Parcelada</option>
            </select>
        </div>

        <div class="form-group"> 
            <label for="forma_pagamento" class="label">Forma de Pagamento</label>
            <select name="forma_pagamento" id="" class="form-control">
                <option @if($item->forma_pagamento == "Cartão") selected @endif value="Cartão">Cartão</option>               
                <option @if($item->forma_pagamento == "Dinheiro") selected @endif value="Dinheiro">Dinheiro</option>
                <option @if($item->forma_pagamento == "Débito") selected @endif value="Débito">Débito</option>
                <option @if($item->forma_pagamento == "Débito Automatico") selected @endif value="Débito Automatico">Débito Automatico</option>
                <option @if($item->forma_pagamento == "Terceiro") selected @endif value="Terceiro">Terceiro</option>
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
        @endforeach
    </body>
<html>