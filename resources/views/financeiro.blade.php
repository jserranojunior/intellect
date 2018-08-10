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

      
        <div class="row">
        <div class="col-sm">
            <a href="{{Route('financeiro.novo.pagar')}}">
              <div class="btn btn-danger">pagar</div>
            </a>
           
            <a href="{{Route('financeiro.novo.receber')}}">
              <div class="btn btn-primary">Receber</div>
            </a>
        </div>
          <div class="col-sm">
              <div class="card" style="width: 18rem;">                 
                  <div class="#"> 
                      <div class="text-center">
                          <h6>DATA</h6>
                      </div>
                    <div class="row">
                      <div class="col-sm col-xs-6">                        
                        <div class="btn-group">
                            <button type="button" class="btn text-capitalize btn-sm btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {{$datas['mesAtualEscrito'] }}
                            </button>
                            <div class="dropdown-menu">
                              @foreach($datas['meses'] as $meses)
                                <a class="dropdown-item" href="?data={{$datas['anoAtual']}}-{{$meses['numero']}}">{{$meses['nome']}}</a>
                              @endforeach                                        
                            </div>
                          </div>
                      </div> 
                        <div class="col-sm col-xs-6 float-right">
                          <div class="btn-group  float-right">
                            <button type="button" class="float-right btn-sm btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              {{$datas['anoAtual']}}
                            </button>
                            <div class="dropdown-menu">
                              @foreach($datas['anos'] as $anos)
                                <a class="dropdown-item" href="?data={{$anos['numero']}}-{{$datas['mesAtual']}}">{{$anos['numero']}}</a>
                              @endforeach           
                            </div>                       
                          </div>
                        </div>    
                    </div>  
                    <div class="row row-space">
                      <div class="col-md">
                          <div class="input-group-sm">
                              <input type="text" class="form-control col-sm-5 float-left" placeholder="1">                        
                            </div>
                            
                            <div class="input-group-sm">
                                <input type="text" class="form-control col-sm-5 float-right" placeholder="30">                        
                            </div>
                      </div>
                    </div>
                    <div class="row row-space">
                      <div class="col-md text-center"> 
                        <a class="btn btn-default btn-xs " href="/financeiro/?data={{$datas['dataAnterior'] }}">Anterior</a>    
                        <a class="btn btn-default btn-xs float-center" href="/financeiro">Atual</a>
                        <a class="btn btn-default btn-xs " href="/financeiro/?data={{$datas['dataPosterior'] }}">Pŕoximo</a>
                      </div>  
                    </div>                                    
                  </div>                                   
                </div>
          </div>
        </div>
   

<div class="container-fluid">
    <div class="row">
       <div class="col-lg-6">
         <div class="row">

@foreach($contasAPagar as $item)
      <div class="col-4">
            <div class="card">
              <div class="card-header {{$item->cor}} text-center">
              {{$item->nome}}
              </div>
              <div class="card-body table-responsive">
              <table class="table table-sm table-striped  table-hover">
                <thead>
                </thead>
                <tbody>
                  @foreach($item['contas'] as $conta)
                    <tr>
                        <td>{{ $conta->favorecido }}</td>
                        <td class="text-right">{{number_format($conta->valor,2,',','.')}}</td>
                    </tr>
                  @endforeach
                    <th><span class="text-bold text-primary">TOTAL</span></th>
                    <th  class="text-right"> {{number_format($item->soma,2,',','.')}} <span class="text-bold text-primary"></span></th>
                 </tr>
              </tbody>
              </table>
            </div>
          </div>
        </div>
 @endforeach


<!-- não funciona -->

         
</div>  <!-- ROW -->
</div>  <!-- COL MEIO -->



<div class="col-lg-6">
  <div class="row">


@foreach($contasAReceber as $item)
      <div class="col-4">
            <div class="card">
              <div class="card-header {{$item->cor}} text-center">
              {{$item->nome}}
              </div>
              <div class="card-body table-responsive">
              <table class="table table-sm table-striped  table-hover">
                <thead>
                </thead>
                <tbody>
                  @foreach($item['contas'] as $conta)
                    <tr>
                        <td>{{ $conta->favorecedor }}</td>
                        <td class="text-right">{{number_format($conta->valor,2,',','.')}}</td>
                    </tr>
                  @endforeach
                    <th><span class="text-bold text-primary">TOTAL</span></th>
                    <th  class="text-right"> {{number_format($item->soma,2,',','.')}} <span class="text-bold text-primary"></span></th>
                 </tr>
              </tbody>
              </table>
            </div>
          </div>
        </div>
 @endforeach



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
            <th  class="text-right"> 
              <span class="text-bold text-primary">0</span>   
            </th>
          </tr>

          <tr>
            <th>
              <span class="text-bold text-warning">TOTAL PAGO</span>
            </th>
            <th  class="text-right"> 
              <span class="text-bold text-warning">0</span>   
            </th>
          </tr>

          <tr>
            <th>
              <span class="text-bold text-danger">FALTA PAGAR</span>
            </th>
            <th  class="text-right"> 
              <span class="text-bold text-danger">0</span>   
            </th>
          </tr>

                   <tr>
            <th>
              <span class="text-bold text-success">VALOR A RECEBER</span>
            </th>
            <th  class="text-right"> 
              <span class="text-bold text-success">{{number_format($totalContasAReceber, 2, ',', '.')}}</span>   
            </th>
          </tr>

          <tr>
            <th>
              <span class="text-bold text-danger">TOTAL DE GASTOS</span>
            </th>
            <th  class="text-right"> 
              <span class="text-bold text-danger">{{number_format($totalContasAPagar, 2, ',', '.')}}</span>   
            </th>
          </tr>

          <tr>
          <th>
              <span class="text-bold text-primary">SOBRA</span>
            </th>
            <th  class="text-right"> 
              <span class="text-bold text-primary">{{number_format($sobraDoPagamentoDeContas, 2, ',', '.')}}</span>   
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
          <td  class="text-right">0</td>
       </tr>
       <tr>
           <td>TOTAL DE GASTOS</td>
               <td  class="text-right">0</td>
           </tr>
       <tr>
          <th><span class="text-bold text-primary">SOBRA - POUPANÇA</span></th>
          <th  class="text-right"> <span class="text-bold text-primary">0</span>   </th>
       </tr>
    </tbody>
 </table>
    </div>
  </div>
</div>



  </div>  <!-- ROW -->
</div>  <!-- COL MEIO -->




</div> <!-- COL CONTAS -->       
</div> <!-- ROW -->
</div>    <!-- CONTAINER-->





<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/uxs/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>