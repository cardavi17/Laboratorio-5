fetch("videojuegos.json")//Así es como JS lee el Json
    .then(function(response){
        return response.json();
    })
    .then(function(data)
    {
        var contenedor = document.getElementById("contenedor");//variable donde guarda los datos

        for (var i=0; i<data.length; i++)//Recorre 
        {
            var juego = data[i];//indice

            var div = document.createElement("div");

            div.innerHTML =
                "<h3>" + juego.nombre + "</h3>" +
                "<p>ID: " + juego.id + "</p>" +
                "<p>Plataforma: " + juego.plataforma + "</p>" +
                "<p>Año: " + juego.anio + "</p>";

            contenedor.appendChild(div);

        }
    })
    //[]: Significa que es un arreglo
    //{}: Significa que es un objeto
    //Qué es una clave? Nombre del dato
    //Qué es un valor? Contenido del dato
    //Porque se tiene guaradado en parentesis cuadrados unos objetos.