<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Propuesta 3.5</title>
    <script src="script/propuesta.js"></script>
    <link rel="stylesheet" href="css/responsive.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="contenedor col-8">
<h1>Operaciones sobre ARRAY 😉</h1>
<p>Crear un array de 10 elementos multiplo de 5, donde con Math.random() se insertan
    los valores,y se debe de cumplir que el primer elemento "mayor" que 50 y ultimo elemento "menor" que 50</p>
   <code>
       <pre>
    function crearArray(){
        let array=[];
        let aleatorio;
        //creamos un bucle para llenar el array con las condiciones que nos indican
        for (let i=1;i<10;i++){
        aleatorio=parseInt(Math.random()*21)*5;
        array.push(aleatorio);
               }
        while (array[0]<50){
            array[0]=parseInt(Math.random()*21)*5;

        }
        while (array[9]>50){
            array[9]=parseInt(Math.random()*21)*5;
        }
        console.log(array);
        return array;
       </pre>
   </code>
    <h2>Resultado</h2>
       <ul class="lista">

       </ul>
</div>
</body>
</html>