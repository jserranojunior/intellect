<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <link rel="stylesheet" href="../node_modules/gentelella/build/css/custom.css">
    
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">

</head>
<body>
    <pre>
<?php include("app.php"); 
    
    
    ?>
</pre>
    
    <div class="container-fluid">
        <?php foreach($dados['categorias'] as $item){ ?>
        <div class="col-md-2">
            <div class="panel <?php echo $item["cor"]; ?>">
                <div class="panel-heading text-center">
                   <?php echo $item["nome"]; ?>
                </div>
                <div class="panel-body">
                    <table class="table table-hover">
                        <tr>
                            <td><div class="">TELEFONE</div></td>
                            <td><div class="text-right">R$55,00</div></td>
                        </tr>
                        <tr>
                                <td><div class="">TOTAL</div></td>
                                <td><div class="text-right">R$55,00</div></td>
                        </tr>
                    </table>
                </div>                
            </div>
        </div>
        <?php } ?>
    </div>

 

 <!--   <script src="index.js"></script> -->
   
</body>
</html>