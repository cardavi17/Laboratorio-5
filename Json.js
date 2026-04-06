// Obtener el contenedor
var contenedor = document.getElementById("datos-local");

// Leer el JSON local
fetch("gatos.json")
.then(function(respuesta) {
    return respuesta.json();
})
.then(function(datos) {

    // Recorrer con for normal
    for (var i = 0; i < datos.length; i++) {

        var gato = datos[i];

        var texto = document.createElement("p");

        texto.textContent = 
            "Nombre: " + gato.nombre + 
            " | Edad: " + gato.años + 
            " | Callejero: " + gato.callejero;

        contenedor.appendChild(texto);
    }

})
.catch(function(error) {
    console.log("Error:", error);
});