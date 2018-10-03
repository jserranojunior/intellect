@extends('layouts.header')

@section('content')





<div class="container-fluid">

    <div class="row justify-content-center">
        <div class="col-3">
            <div class="card">
                <div class="card-header">
                    <h4 class="text-center">DATA</h4>
                </div>
                <div class="card-footer">
                    <a href="{{Route('financeiro.novo.pagar')}}">
                        <div class="btn btn-primary">
                            (+) NOVA CONTA
                        </div>
                    </a>
                    <div class="btn btn-primary btn-warning float-right">
                        (+) NOVO PAGAMENTO
                    </div>
                </div>
            </div>
        </div>
    </div>



    <div class="row">
        <div class="col-lg-6">
            <div class="row">
                @foreach($data as $categories)
                <div class="card-columns">
                    @foreach($categories as $categorie)

                    <div class="card">
                        <div class="card-header {{$categorie->cor}} text-center">
                            {{$categorie->nome}}
                        </div>
                        <div class="card-body table-responsive">
                            <table class="table table-sm table-striped  table-hover">
                                <thead>
                                </thead>
                                <tbody>
                                    @foreach($categorie->bills['bills'] as $bill)
                                    <tr>
                                        <td>{{ $bill->favorecido }}</td>
                                        <td class="text-right">{{number_format($bill->valor,2,',','.')}}</td>
                                    </tr>
                                    @endforeach
                                    <th><span class="text-bold text-primary">TOTAL</span></th>
                                    <th class="text-right">{{number_format($categorie->bills['total'],2,',','.')}}<span
                                            class="text-bold text-primary"></span></th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    @endforeach
                </div>
                @endforeach
                <!-- não funciona -->
            </div> <!-- ROW -->
        </div> <!-- COL MEIO -->

        <div class="col-lg-6">
            <div class="row">
                <div class="col-4">
                    <div class="card">
                        <div class="card-header text-center">
                            VALORES
                        </div>
                        <div class="card-body">
                            <table class="table table-condensed table-hover">
                                <thead>
                                    <tr>
                                        <th>CONTA </th>
                                        <th class="text-right">VALOR</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                                <tfoot class="foot-total">
                                    <tr>
                                        <th>
                                            <span class="text-bold text-primary">VALOR RECEBIDO</span>
                                        </th>
                                        <th class="text-right">
                                            <span class="text-bold text-primary">0</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            <span class="text-bold text-warning">TOTAL PAGO</span>
                                        </th>
                                        <th class="text-right">
                                            <span class="text-bold text-warning">0</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            <span class="text-bold text-danger">FALTA PAGAR</span>
                                        </th>
                                        <th class="text-right">
                                            <span class="text-bold text-danger">0</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            <span class="text-bold text-success">VALOR A RECEBER</span>
                                        </th>
                                        <th class="text-right">
                                            <span class="text-bold text-success"></span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            <span class="text-bold text-danger">TOTAL DE GASTOS</span>
                                        </th>
                                        <th class="text-right">
                                            <span class="text-bold text-danger"></span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            <span class="text-bold text-primary">SOBRA</span>
                                        </th>
                                        <th class="text-right">
                                            <span class="text-bold text-primary"></span>
                                        </th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <div class="card-header text-center">
                            POUPANÇA
                        </div>
                        <div class="card-body table-responsive">
                            <table class="table table-sm table-striped  table-hover">
                                <thead>
                                    <tr>
                                        <th>CONTA </th>
                                        <th class="text-right">VALOR</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>TOTAL DE GANHOS</td>
                                        <td class="text-right">0</td>
                                    </tr>
                                    <tr>
                                        <td>TOTAL DE GASTOS</td>
                                        <td class="text-right">0</td>
                                    </tr>
                                    <tr>
                                        <th><span class="text-bold text-primary">SOBRA - POUPANÇA</span></th>
                                        <th class="text-right"> <span class="text-bold text-primary">0</span> </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div> <!-- ROW -->
        </div> <!-- COL MEIO -->
    </div> <!-- COL CONTAS -->
</div> <!-- ROW -->


@endsection