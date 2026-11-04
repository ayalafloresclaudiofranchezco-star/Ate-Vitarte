// Lógica interactiva para la página de Turismo inspirada en Tasha
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portal de Turismo (Estilo Tasha 🌻) cargado de manera dinámica.");

  // Efecto dinámico al hacer clic en los botones de ubicación
  const locationButtons = document.querySelectorAll(".location-btn");
  
  locationButtons.forEach(button => {
    button.addEventListener("click", () => {
      console.log("Abriendo la ruta del destino turístico seleccionado...");
    });
  });
});