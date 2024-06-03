<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <script src="script/propuesta.js"></script>
    <link rel="stylesheet" href="css/responsive.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="contenedor col-6">
    <h1 class="centrado">Operaciones sobre arrays</h1>
    <h3>Generador de Múltiplos de 5</h3>
    <button class="btn-generar" onclick="generarArray()">Generar Array</button>
    <div id="resultado">
        <h2>Array generado:</h2>
        <p id="array"></p>
        <p id="requisitos"></p>
    </div>
</div> <!-- Cierre del contenedor -->
</body>
</html>

