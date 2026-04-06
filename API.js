// Contenedor API
var contenedorAPI = document.getElementById("datos-api");

// Llamada a la API
fetch("https://api.thecatapi.com/v1/images/search?limit=5")
.then(function(respuesta) {
    return respuesta.json();//obtiene la respuesta de la api
})
.then(function(datos) {

    for (var i = 0; i < datos.length; i++) {

        var gato = datos[i];

        var img = document.createElement("img");
        img.src = gato.url;
        img.width = 200;

        contenedorAPI.appendChild(img);//ordena la informacion antes de mandarla al contenedor
    }

})
.catch(function(error) {
    console.log("Error API:", error);
});