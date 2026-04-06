document.getElementById("btn").addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
      const dogContainer = document.getElementById("dog-container");
      dogContainer.innerHTML = `<img src="${data.message}" alt="dog image">`;
    })
    .catch(error => console.error("Error al cargar la imagen:", error));
});