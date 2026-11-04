// Lógica dinámica para la página de Contacto (Estilo Austin 🟪)
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portal de Contacto cargado correctamente.");

  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Recopilar datos del formulario
      const nombre = document.getElementById("nombre").value;
      const correo = document.getElementById("correo").value;
      const asunto = document.getElementById("asunto").value;
      const mensaje = document.getElementById("mensaje").value;

      // Simulación de envío de correo electrónico dinámico
      submitBtnAnimation(true);

      setTimeout(() => {
        submitBtnAnimation(false);
        formMessage.style.color = "#2e7d32";
        formMessage.innerHTML = `<i class="fa-solid fa-circle-check"></i> ¡Gracias, ${nombre}! Tu mensaje ha sido enviado con éxito al correo institucional (mesadepartes@muniate.gob.pe). Te responderemos pronto.`;
        
        contactForm.reset();

        // Ocultar mensaje después de 6 segundos
        setTimeout(() => {
          formMessage.innerHTML = "";
        }, 6000);
      }, 1500);
    });
  }
});

function submitBtnAnimation(isLoading) {
  const btn = document.querySelector(".submit-btn");
  if (isLoading) {
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Enviando mensaje...`;
    btn.disabled = true;
  } else {
    btn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Enviar Mensaje`;
    btn.disabled = false;
  }
}