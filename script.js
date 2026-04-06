fetch("videojuegos.json")
    .then(function(response){
        return response.json();
    })
    .then(function(data)
    {
        var contenedor = document.getElementById("contenedor");

        for (var i=0; i<data.length; i++)
        {
            var juego = data[i];

            var div = document.createElement("div");

            div.innerHTML =
                "<h3>" + juego.nombre + "</h3>" +
                "<p>ID: " + juego.id + "</p>" +
                "<p>Plataforma: " + juego.plataforma + "</p>" +
                "<p>Año: " + juego.anio + "</p>";

            contenedor.appendChild(div);

        }
    })