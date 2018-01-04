

<!doctype html>
<html lang="en">
   <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <!-- Bootstrap CSS -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous">
      <link rel="stylesheet" href="{{url('/css/all.css')}}">
      <title>Financeiro</title>
   </head>
   <body>
      <div class="container-fluid">

    <div class="row justify-content-md-center">
        <div class="col-md-3">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                        <div class="col-md-6">
                            <ul class="nav nav-tabs">
                                    <div class="dropdown">
                                        <button class="btn btn-default dropdown-toggle widcem" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                            <a href="#">Janeiro
                                                    
                                                <span class="caret"></span>
                                            </a></button><a href="#">
                                            </a><ul class="dropdown-menu" aria-labelledby="dropdownMenu1"><a href="#">
                                                </a><li><a href="#">
                                                    </a><a href="#" onclick="enviar('favorecido',01,2018,'Todos','Todos');">Janeiro</a>
                                                </li>
                                                <li>
                                                    <a href="#" onclick="enviar('favorecido',02,2018,'Todos','Todos');">Fevereiro</a>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </ul>
                                </div>
                            
                                <div class="col-md-6">
                                    <ul class="nav nav-tabs">
                                        <div class="dropdown">
                                            <button class="btn btn-default dropdown-toggle widcem" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                <a href="#">2018
                                                    <span class="caret"></span>
                                                </a></button><a href="#">
                                                </a><ul class="dropdown-menu" aria-labelledby="dropdownMenu1"><a href="#">
                                                    </a>
                                                </ul>
                                            </div>
                                        </ul>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 text-center">
                                            <a class="btn btn-default btn-xs" href="#">
                                                <p class="glyphicon glyphicon-menu-left"></p> Anterior </a>
                                            <a class="btn btn-default btn-xs" href="#" >Atual</a>
                                            <a class="btn btn-default btn-xs" href="#" > Próximo
                                                <p class="glyphicon glyphicon-menu-right"></p>
                                            </a>
                                        </div>
                                    </div>                        
                                </div>
                            </div>    
        </div>
    </div>


         <div class="row">
            <div class="col-md-6">
               <div class="row">
                  @foreach($dados as $itens)
                  @foreach($itens as $item)   
                  <div class="col-md-4 col-painel">
                     <div class="card">
                        <div class="card-header text-center {{$item['categoria_cor']}}">
                           {{$item['categoria_nome']}}
                        </div>
                        <div class="card-body">
                           <table class="table table-condensed table-hover">
                              <thead  class="thead">
                                 <tr>
                                    <th>Conta</th>
                                    <th class="text-right">Valor</th>
                                 </tr>
                              </thead>
                              <tbody  class="tbody">
                                    @foreach($item['contas'] as $conta)                        
                                    <tr>
                                       <td>{{ $conta->nome }}</td>
                                       <td class="text-right">{{$conta->valor}}</td>
                                    </tr>
                                    @endforeach
                              </tbody>
                              
                              <tr>
                                 <th class="text-bold text-primary">TOTAL</th>
                                 <th class="text-right text-primary">{{$item['categoria_total']}}</th>
                              </tr>
                           </table>
                        </div>
                     </div>
                  </div>
                  @endforeach   
                  @endforeach
               </div>
               
            </div>
            <!-- COL-MD-8 -->
            <div class="col-md-6">
               <div class="row">

                   <div class="col-md-6 col-painel"><!-- A RECEBER -->
                   <!-- PAINEL 1 -->
                   <div class="col-md-12 col-painel">
                        <div class="card">
                           <div class="card-header text-center categoria-receber">
                              A RECEBER
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
                                    <tr>
                                        <td>teste</td>
                                    </tr>
                                    <tr>
                                        <td>teste</td>
                                    </tr>
                                    <tr>
                                        <td>teste</td>
                                    </tr>
                                    <tr>
                                        <td>teste</td>
                                    </tr>
                                    <tr>
                                        <td>teste</td>
                                    </tr>
                                    <tr>
                                        <td>teste</td>
                                    </tr>
                                    <tr>
                                        <td>teste</td>
                                    </tr>
                                    </tbody>
                                    <tfoot class="foot-total">
                                       <tr>
                                               <th><span class="text-bold text-primary">TOTAL</span></th>
                                               <th  class="text-right"> <span class="text-bold text-primary">1.700,00 </span>   </th>
                                       </tr>
                                    </tfoot>
                                    
                                 
                              </table>
                           </div>
                        </div>
                     </div><!-- FIM PAINEL 1 -->
                     

 <!-- PANEL 2 -->
 <div class="col-md-12 col-painel">
        <div class="card">
           <div class="card-header text-center categoria-somas">
              SOMAS E TOTAIS
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
     </div><!-- FIM PAINEL 2 -->
</div><!--fechamento  a receber -->

<div class="col-md-6 col-painel"><!-- POUPANCA -->
                     <!-- PAINEL POUPANCA -->
                     <div class="col-md-12 col-painel">
                            <div class="card">
                               <div class="card-header text-center categoria-poupanca">
                                  POUPANÇA
                               </div>
                               <div class="card-body">
                                  <table class="table table-condensed table-hover">
                                     <thead class="thead">
                                        <tr>
                                           <th>META</th>
                                           <th class="text-right">VALOR</th>
                                           <th class="text-right">FALTA</th>
                                        </tr>
                                     </thead>
                                     <tbody class="tbody">
                                        <tr>
                                           <td>EMPRESA</td>
                                           <td  class="text-right">750,00</td>
                                           <td  class="text-right">39.250,00</td>
                                        </tr>
                                        <tr>
                                                <td>1- CASA</td>
                                                <td  class="text-right">10.000,00</td>
                                                <td  class="text-right">7.000,00</td>
                                             </tr>
                                        <tr>
    
                                            <tr>
                                                <td>ROUPA / HIGIENE</td>
                                                <td  class="text-right">200,00</td>
                                                <td  class="text-right">300,00</td>
                                            </tr>
                                            <tr>
                                                <td>teste</td>
                                            </tr>
                                            <tr>
                                                <td>teste</td>
                                            </tr>
                                            <tr>
                                                <td>teste</td>
                                            </tr>
                                            <tr>
                                                <td>teste</td>
                                            </tr>
                                            <tr>
                                                <td>teste</td>
                                            </tr>
                                            <tr>
                                                <td>teste</td>
                                            </tr>
                                            <tr>
                                                <td>teste</td>
                                            </tr>
                                            <tr>
                                                <td>teste</td>
                                            </tr>
                                            <tr>
                                                <td>teste</td>
                                            </tr>
                                            
                                     </tbody>
                                     <tr>
                                            <th><span class="text-bold text-primary">TOTAL</span></th>
                                                 
                                            <th  class="text-right"> <span class="text-bold text-primary">10.750,00 </span>   </th>
                                                 <th  class="text-right"> <span class="text-bold text-primary">46.250,00 </span>   </th>
                                         
                                         </tr>
                                  </table>
                               </div>
                            </div>
                         </div><!-- FIM PAINEL POUPANCA -->
                        </div><!-- FECHAMENTO POUPANCA -->      
  


               </div>
            </div>
         </div>
      </div>
      </div>
      </div><!-- ROW -->
      </div><!-- container-fluid -->

