@extends('layouts.header')
@section('content')


<div class="row justify-content-md-center">
    <div class="col-md-4 col-lg-4 col-12">

        <div class="card">
            <div class="card-header  text-center">
                <h5>Nova Conta</h5>
            </div>
            <div class="card-body">
                <div class="container">
                    <form action="{{Route('financeiro.pagar.adicionar')}}" method="post">
                        <div class="form-group">
                            <!-- <label for="favorecido">Favorecido</label> -->
                            <input type="text" class="form-control" name="favorecido" placeholder="Favorecido">
                            <!-- COLOCAR SELECT COM OPÇÃO DE ADICIONAR CONTA -->
                        </div>
    
                        <div class="form-group">
    
                            <input type="text" class="form-control" name="descricao" placeholder="Descrição">
                        </div>
    
                        <div class="form-group">
    
                            <input type="text" class="form-control" name="valor" placeholder="Valor" required>
                        </div>
                        <div class="form-group">
                            <label for="inicio_data_pagamento">Inicio Pagamento</label>
                            <input type="date" class="form-control" value="{{$dataAtual}}" placeholder="Inicio Pagamento"
                                name="inicio_data_pagamento">
                        </div>
    
                        <div class="form-group">
                            <label for="fim_data_pagamento">Fim Pagamento</label>
                            <input type="date" class="form-control" value="{{$dataAtual}}" name="fim_data_pagamento">
                        </div>
    
                        <div class="form-group">
                            <select name="categoria" id="" class="form-control" required>
    
                                @foreach($categorias as $categoria)
                                <option value="{{$categoria->id}}">{{$categoria->nome}}</option>
                                @endforeach
    
                            </select>
                        </div>
    
                        <div class="form-group">
                            <select name="tipo_conta" id="" class="form-control" required>
                                <option disabled selected value="Tipo de Conta">Tipo de Conta</option>
                                <option value="Extra">Extra</option>
                                <option value="Fixa">Fixa</option>
                                <option value="Parcelada">Parcelada</option>
                            </select>
                        </div>
    
                        <div class="form-group">
                            <select name="forma_pagamento" id="" class="form-control" required>
                                <option disabled selected value="Forma de Pagamento">Forma de Pagamento</option>
                                <option value="Cartão">Cartão</option>
                                <option value="Dinheiro">Dinheiro</option>
                                <option value="Débito">Débito</option>
                                <option value="Débito Automatico">Débito Automatico</option>
                                <option value="Terceiro">Terceiro</option>
                            </select>
                        </div>
    
    
                </div>
            </div>
            <div class="card-footer text-center">
                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                <input type="submit" value="Cadastrar" class="btn btn-primary">
            </div>
        </div>
        </form>




    </div>
    @endsection