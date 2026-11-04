// Lógica para dinamismo y futura personalización de textos/fotos de Tyrone
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portal de la Municipalidad (Estilo Tyrone) cargado correctamente.");

  // Efecto dinámico interactivo opcional para las tarjetas de autoridades o zonas
  const cards = document.querySelectorAll(".auth-card, .zone-card, .school-card");
  
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
      card.style.boxShadow = "0 8px 20px rgba(230, 81, 0, 0.2)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = "0 4px 8px rgba(0,0,0,0.06)";
    });
  });
});