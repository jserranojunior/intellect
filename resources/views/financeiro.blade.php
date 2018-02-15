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
            <h1 class="text-center">Financeiro</h1>

    </div>

   

<div class="container-fluid">
    <div class="row">
       <div class="col-lg-6">
         <div class="row">

         @foreach($dados as $itens)
        
      @foreach($itens as $item)  
     
      <div class="col-4">
            <div class="card">
              <div class="card-header {{$item['categoria_cor']}} text-center">
              {{$item['categoria_nome']}}
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
                 

                  @foreach($item['contas'] as $conta)                        
                    <tr>
                        <td>{{ $conta->nome }}</td>
                        <td class="text-right">{{$conta->valor}}</td>
                    </tr>
                  @endforeach


                    <th><span class="text-bold text-primary">TOTAL</span></th>
                    <th  class="text-right"> <span class="text-bold text-primary">{{$item['categoria_total']}} </span>   </th>
                 </tr>
              </tbody>
           </table>
              </div>
            </div>
          </div>



      @endforeach
     
    @endforeach                
           
         
          </div>  <!-- ROW -->
          </div>  <!-- COL MEIO -->

          <div class="col-lg-6">
            <div class="row">
            <div class="col-6">
            <div class="card">
              <div class="card-header text-center">
              ESSENCIAIS
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
                    <td  class="text-right">4.475,00</td>
                 </tr>
                 <tr>
                     <td>TOTAL DE GASTOS</td>
                         <td  class="text-right">4.260,00</td>
                     </tr>
                 <tr>
                    <th><span class="text-bold text-primary">SOBRA - POUPANÇA</span></th>
                    <th  class="text-right"> <span class="text-bold text-primary">215,00</span>   </th>
                 </tr>
              </tbody>
           </table>
              </div>
            </div>
          </div>

          <div class="col-6">
            <div class="card">
              <div class="card-header text-center">
                COMPRAS
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
                 <tr>
                    <td>VD Lap</td>
                    <td  class="text-right">1.700,00</td>
                 </tr>
                 
                 </tbody>
                 <tfoot class="foot-total">
                 <tr>
                      <th>
                        <span class="text-bold text-success">TOTAL DE GANHOS</span>
                      </th>
                      <th  class="text-right"> 
                        <span class="text-bold text-success"> {{$total_a_ganhar}}</span>   
                      </th>
                    </tr>

                    <tr>
                      <th>
                        <span class="text-bold text-danger">TOTAL DE GASTOS</span>
                      </th>
                      <th  class="text-right"> 
                        <span class="text-bold text-danger"> {{$total_a_pagar}}</span>   
                      </th>
                    </tr>
                 </tfoot>
                 
              
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