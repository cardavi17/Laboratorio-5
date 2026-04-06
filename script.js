document.getElementById("btn").addEventListener("click", () => {
  fetch("https://api.thedogapi.com/v1/images/search")
    .then(res => res.json())
    .then(data => {
      const dog = data[0]; // primer resultado
      const breed = dog.breeds[0]; // datos de la raza (si existen)

      const container = document.getElementById("dog-container");

      if (breed) {
        container.innerHTML = `
          <img src="${dog.url}" alt="${breed.name}">
          <h2>${breed.name}</h2>
          <p><strong>Peso:</strong> ${breed.weight.metric} kg</p>
          <p><strong>Altura:</strong> ${breed.height.metric} cm</p>
          <p><strong>Vida:</strong> ${breed.life_span}</p>
          <p><strong>Temperamento:</strong> ${breed.temperament}</p>
        `;
      } else {
        container.innerHTML = `<img src="${dog.url}" alt="dog image"><p>No hay datos de raza disponibles.</p>`;
      }
    })
    .catch(err => console.error("Error:", err));
});
