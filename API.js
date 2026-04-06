// Contenedor API
var contenedorAPI = document.getElementById("datos-api");

// Llamada a la API
fetch("https://api.thecatapi.com/v1/images/search?limit=5")
.then(function(respuesta) {
    return respuesta.json();
})
.then(function(datos) {

    for (var i = 0; i < datos.length; i++) {

        var gato = datos[i];

        var img = document.createElement("img");
        img.src = gato.url;
        img.width = 200;

        contenedorAPI.appendChild(img);
    }

})
.catch(function(error) {
    console.log("Error API:", error);
});