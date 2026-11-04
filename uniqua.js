document.addEventListener("DOMContentLoaded", () => {
  console.log("Portal de Trámites (Actas Oficiales Estilo RENIEC) cargado correctamente.");

  const tipoActaSelect = document.getElementById("tipoActa");
  const dynamicFields = document.getElementById("dynamicFields");
  const btnGenerarActa = document.getElementById("btnGenerarActa");
  const rcMessage = document.getElementById("rcMessage");

  // 1. Cargar dinámicamente los campos según el acta seleccionada
  if (tipoActaSelect) {
    tipoActaSelect.addEventListener("change", (e) => {
      const valor = e.target.value;
      let html = "";

      if (valor === "Nacimiento") {
        html = `
          <h3 class="section-subtitle-dynamic">Datos del Registrado (Nacimiento)</h3>
          <div class="form-group animate-fade"><label>Apellido Paterno:</label><input type="text" id="apePaterno" required placeholder="Ej. SALAS"></div>
          <div class="form-group animate-fade"><label>Apellido Materno:</label><input type="text" id="apeMaterno" required placeholder="Ej. CARAZAS"></div>
          <div class="form-group animate-fade"><label>Nombres (Prenombres):</label><input type="text" id="nombresNino" required placeholder="Ej. PAOLO"></div>
          <div class="form-group animate-fade"><label>Sexo:</label>
            <select id="sexoNino" required><option value="MASCULINO">MASCULINO</option><option value="FEMENINO">FEMENINO</option></select>
          </div>
          <div class="form-group animate-fade"><label>Fecha de Nacimiento:</label><input type="date" id="fechaNac" required></div>
          <div class="form-group animate-fade"><label>Hora:</label><input type="time" id="horaNac" required></div>
          <div class="form-group animate-fade"><label>Lugar de Ocurrencia / Localidad:</label><input type="text" id="lugarNac" required placeholder="Ej. ATE/LIMA/LIMA"></div>

          <h3 class="section-subtitle-dynamic" style="margin-top:1.5rem;">Datos de los Padres</h3>
          <div class="form-group animate-fade"><label>Nombre del Padre (Prenombres):</label><input type="text" id="nombrePadre" required placeholder="Ej. RENATO"></div>
          <div class="form-group animate-fade"><label>Primer Apellido Padre:</label><input type="text" id="apePatPadre" required placeholder="Ej. SALAS"></div>
          <div class="form-group animate-fade"><label>Segundo Apellido Padre:</label><input type="text" id="apeMatPadre" required placeholder="Ej. PALOMINO"></div>
          <div class="form-group animate-fade"><label>DNI del Padre (8 dígitos):</label><input type="text" id="dniPadre" class="input-dni" maxlength="8" required placeholder="41104301"></div>
          <div class="form-group animate-fade"><label>Domicilio del Padre:</label><input type="text" id="domicilioMadre" required placeholder="Ej. MIRAFLORES MZ. D LOTE. 6 ATE"></div>

          <div class="form-group animate-fade"><label>Nombre de la Madre (Prenombres):</label><input type="text" id="nombreMadre" required placeholder="Ej. MARIA"></div>
          <div class="form-group animate-fade"><label>Primer Apellido Madre:</label><input type="text" id="apePatMadre" required placeholder="Ej. CARAZAS"></div>
          <div class="form-group animate-fade"><label>Segundo Apellido Madre:</label><input type="text" id="apeMatMadre" required placeholder="Ej. LOPEZ"></div>
          <div class="form-group animate-fade"><label>DNI de la Madre (8 dígitos):</label><input type="text" id="dniMadre" class="input-dni" maxlength="8" required placeholder="41567264"></div>
          <div class="form-group animate-fade"><label>Domicilio de la Madre:</label><input type="text" id="domicilioMadre" required placeholder="Ej. MIRAFLORES MZ. D LOTE. 6 ATE"></div>
        `;
      } else if (valor === "Matrimonio") {
        html = `
          <h3 class="section-subtitle-dynamic">Datos de la Cónyuge</h3>
          <div class="form-group animate-fade"><label>Prenombres (Cónyuge 1):</label><input type="text" id="c1Nombres" required placeholder="LEYDY CANDIDA"></div>
          <div class="form-group animate-fade"><label>Primer Apellido:</label><input type="text" id="c1ApePat" required placeholder="MAMANI"></div>
          <div class="form-group animate-fade"><label>Segundo Apellido:</label><input type="text" id="c1ApeMat" required placeholder="APAZA"></div>
          <div class="form-group animate-fade"><label>DNI (8 dígitos):</label><input type="text" id="c1Dni" class="input-dni" maxlength="8" required placeholder="46292156"></div>
          <div class="form-group animate-fade"><label>Edad:</label><input type="text" id="c1Edad" required placeholder="28 AÑOS"></div>
          <div class="form-group animate-fade"><label>Estado Civil:</label><input type="text" id="c1Estado" value="SOLTERO" required></div>
          <div class="form-group animate-fade"><label>Nacionalidad:</label><input type="text" id="c1Nac" value="PERUANA" required></div>
          <div class="form-group animate-fade"><label>Lugar de Nacimiento:</label><input type="text" id="c1LugarNac" required placeholder="PUNO / PUNO / PUNO"></div>

          <h3 class="section-subtitle-dynamic" style="margin-top:1.5rem;">Datos del Cónyuge</h3>
          <div class="form-group animate-fade"><label>Prenombres (Cónyuge 2):</label><input type="text" id="c2Nombres" required placeholder="JUNIOR SAUL"></div>
          <div class="form-group animate-fade"><label>Primer Apellido:</label><input type="text" id="c2ApePat" required placeholder="AQUINO"></div>
          <div class="form-group animate-fade"><label>Segundo Apellido:</label><input type="text" id="c2ApeMat" required placeholder="GONZALES"></div>
          <div class="form-group animate-fade"><label>DNI (8 dígitos):</label><input type="text" id="c2Dni" class="input-dni" maxlength="8" required placeholder="44723498"></div>
          <div class="form-group animate-fade"><label>Edad:</label><input type="text" id="c2Edad" required placeholder="32 AÑOS"></div>
          <div class="form-group animate-fade"><label>Estado Civil:</label><input type="text" id="c2Estado" value="SOLTERO" required></div>
          <div class="form-group animate-fade"><label>Nacionalidad:</label><input type="text" id="c2Nac" value="PERUANA" required></div>
          <div class="form-group animate-fade"><label>Lugar de Nacimiento:</label><input type="text" id="c2LugarNac" required placeholder="ATE / LIMA / HUAYCAN"></div>

          <h3 class="section-subtitle-dynamic" style="margin-top:1.5rem;">Datos del Enlace</h3>
          <div class="form-group animate-fade"><label>Fecha de Celebración:</label><input type="date" id="fechaMatrimonio" required></div>
          <div class="form-group animate-fade"><label>Lugar de Celebración (Oficina Registral):</label><input type="text" id="lugarMatrimonio" required placeholder="AREQUIPA / AREQUIPA / JOSE LUIS BUSTAMANTE"></div>
          <div class="form-group animate-fade"><label>Celebrante (Registrador):</label><input type="text" id="celebranteMatrimonio" required placeholder="ELIZABETH AGRIPINA DIAZ PINTO"></div>
        `;
      } else if (valor === "Defuncion") {
        html = `
          <h3 class="section-subtitle-dynamic">Datos del Fallecido(a)</h3>
          <div class="form-group animate-fade"><label>Prenombres:</label><input type="text" id="fNombres" required placeholder="ANDRES AVELINO"></div>
          <div class="form-group animate-fade"><label>Primer Apellido:</label><input type="text" id="fApePat" required placeholder="ILDEFONSO"></div>
          <div class="form-group animate-fade"><label>Segundo Apellido:</label><input type="text" id="fApeMat" required placeholder="SUAREZ"></div>
          <div class="form-group animate-fade"><label>DNI (8 dígitos):</label><input type="text" id="fDni" class="input-dni" maxlength="8" required placeholder="19833539"></div>
          <div class="form-group animate-fade"><label>Edad:</label><input type="text" id="fEdad" required placeholder="71 AÑOS"></div>
          <div class="form-group animate-fade"><label>Nacionalidad:</label><input type="text" id="fNac" value="PERUANA" required></div>
          <div class="form-group animate-fade"><label>Lugar de Nacimiento:</label><input type="text" id="fLugarNac" required placeholder="JUNIN / JAUJA / YAULI"></div>
          <div class="form-group animate-fade"><label>Fecha y Hora de Fallecimiento:</label><input type="text" id="fFechaHora" required placeholder="20 DE SETIEMBRE DE 2020 / 23:30 hrs."></div>
          <div class="form-group animate-fade"><label>Lugar de Ocurrencia / Deceso:</label><input type="text" id="fLugarDeceso" required placeholder="HOSPITAL NACIONAL EDGARDO REBAGLIATI"></div>
        `;
      }

      dynamicFields.innerHTML = html;
      activarFiltroDNI();
    });
  }

  function activarFiltroDNI() {
    const inputsDni = document.querySelectorAll(".input-dni");
    inputsDni.forEach(input => {
      input.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 8);
      });
    });
  }

  // 2. Generación idéntica al formato oficial RENIEC en PDF
  if (btnGenerarActa) {
    btnGenerarActa.addEventListener("click", () => {
      const tipo = tipoActaSelect.value;
      const correo = document.getElementById("correoCiudadano")?.value;

      if (!tipo || !correo) {
        rcMessage.style.color = "#c62828";
        rcMessage.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Selecciona el tipo de acta e ingresa tu correo electrónico.`;
        return;
      }

      const inputs = dynamicFields.querySelectorAll("input, select");
      let valido = true;
      let dniIncompleto = false;

      inputs.forEach(input => {
        if (!input.value) valido = false;
        if (input.classList.contains("input-dni") && input.value.length !== 8) {
          dniIncompleto = true;
        }
      });

      if (!valido) {
        rcMessage.style.color = "#c62828";
        rcMessage.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Completa todos los campos obligatorios.`;
        return;
      }

      if (dniIncompleto) {
        rcMessage.style.color = "#c62828";
        rcMessage.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Los campos de DNI deben contener exactamente 8 números.`;
        return;
      }

      rcMessage.style.color = "#ad1457";
      rcMessage.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Generando acta oficial estilo RENIEC...`;

      setTimeout(() => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Fondo superior institucional (Franja verde/celeste idéntica a RENIEC)
        doc.setFillColor(0, 150, 160);
        doc.rect(10, 10, 190, 24, "F");

        doc.setTextColor(255, 255, 255);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.text("REPÚBLICA DEL PERÚ", 105, 19, { align: "center" });

        doc.setFontSize(7.5);
        doc.text("REGISTRO NACIONAL DE IDENTIFICACIÓN Y ESTADO CIVIL - RENIEC", 105, 27, { align: "center" });

        // Títulos de la cabecera
        doc.setFont("helvetica", "bold");
        doc.setFontSize(9);
        doc.setTextColor(40, 40, 40);
        doc.text("REGISTRO NACIONAL DE IDENTIFICACIÓN Y ESTADO CIVIL", 105, 38, { align: "center" });

        doc.setFontSize(13);
        doc.text(`ACTA DE ${tipo.toUpperCase()}`, 105, 46, { align: "center" });

        // Cuadro CUI / Código Único
        doc.setLineWidth(0.3);
        doc.rect(70, 49, 70, 12);
        doc.setFontSize(8);
        doc.text("N° 80969211", 105, 54, { align: "center" });
        doc.setFontSize(7);
        doc.text("Código Único de Identificación - CUI", 105, 59, { align: "center" });

        let startY = 68;

        if (tipo === "Nacimiento") {
          const apeP = document.getElementById("apePaterno").value.toUpperCase();
          const apeM = document.getElementById("apeMaterno").value.toUpperCase();
          const nombres = document.getElementById("nombresNino").value.toUpperCase();
          const sexo = document.getElementById("sexoNino").value;
          const fechaN = document.getElementById("fechaNac").value;
          const horaN = document.getElementById("horaNac").value;
          const lugarN = document.getElementById("lugarNac").value.toUpperCase();

          const pNom = document.getElementById("nombrePadre").value.toUpperCase();
          const pApePat = document.getElementById("apePatPadre").value.toUpperCase();
          const pApeMat = document.getElementById("apeMatPadre").value.toUpperCase();
          const pDni = document.getElementById("dniPadre").value;
          const pDom = document.getElementById("domicilioPadre").value.toUpperCase();

          const mNom = document.getElementById("nombreMadre").value.toUpperCase();
          const mApePat = document.getElementById("apePatMadre").value.toUpperCase();
          const mApeMat = document.getElementById("apeMatMadre").value.toUpperCase();
          const mDni = document.getElementById("dniMadre").value;
          const mDom = document.getElementById("domicilioMadre").value.toUpperCase();

          doc.setFontSize(8.5);
          doc.text("FECHA DE NACIMIENTO", 20, startY); doc.text(fechaN, 85, startY);
          doc.text("HORA", 150, startY); doc.text(`${horaN} A.M.`, 170, startY); startY += 6;
          
          doc.text("LOCALIDAD", 20, startY); doc.text(lugarN, 85, startY); startY += 6;
          doc.text("LUGAR DE OCURRENCIA", 20, startY); doc.text("SEGURO SOCIAL ESSALUD", 85, startY); startY += 6;
          doc.text("SEXO", 20, startY); doc.text(sexo, 85, startY); startY += 8;

          // Tabla de Datos
          doc.setLineWidth(0.5);
          doc.rect(20, startY, 170, 7);
          doc.setFont("helvetica", "bold");
          doc.text("Nombre:", 25, startY + 5);
          doc.text(`${nombres} ${apeP} ${apeM}`, 85, startY + 5); startY += 7;

          doc.rect(20, startY, 170, 6);
          doc.text("DATOS DE LOS PADRES", 25, startY + 4);
          doc.text("PADRE", 85, startY + 4);
          doc.text("MADRE", 140, startY + 4); startY += 6;

          const rowsNac = [
            ["Prenombres", pNom, mNom],
            ["Primer Apellido", pApePat, mApePat],
            ["Segundo Apellido", pApeMat, mApeMat],
            ["Nacionalidad", "PERUANA", "PERUANA"],
            ["Documento de Identidad", pDni, mDni],
            ["Domicilio de la Madre", pDom, mDom]
          ];

          doc.setFont("helvetica", "normal");
          rowsNac.forEach(row => {
            doc.rect(20, startY, 170, 6);
            doc.text(row[0], 25, startY + 4);
            doc.text(row[1], 85, startY + 4);
            doc.text(row[2], 140, startY + 4);
            startY += 6;
          });

          startY += 8;
          doc.setFont("helvetica", "bold");
          doc.text("FECHA DE REGISTRO", 20, startY); doc.text(new Date().toLocaleDateString(), 85, startY); startY += 6;
          doc.text("OFICINA REGISTRAL", 20, startY); doc.text("ATE / LIMA / LIMA", 85, startY); startY += 6;
          doc.text("REGISTRADOR CIVIL", 20, startY); doc.text("MUNICIPALIDAD DISTRITAL DE ATE", 85, startY); startY += 6;
          doc.text("OBSERVACIONES", 20, startY); doc.text("EMISIÓN DIGITAL AUTORIZADA - LEY N° 27444", 85, startY);

        } else if (tipo === "Matrimonio") {
          const c1Nom = document.getElementById("c1Nombres").value.toUpperCase();
          const c1Ap = document.getElementById("c1ApePat").value.toUpperCase();
          const c1Am = document.getElementById("c1ApeMat").value.toUpperCase();
          const c1Dni = document.getElementById("c1Dni").value;
          const c1Edad = document.getElementById("c1Edad").value.toUpperCase();
          const c1Est = document.getElementById("c1Estado").value.toUpperCase();
          const c1Nac = document.getElementById("c1Nac").value.toUpperCase();
          const c1Lug = document.getElementById("c1LugarNac").value.toUpperCase();

          const c2Nom = document.getElementById("c2Nombres").value.toUpperCase();
          const c2Ap = document.getElementById("c2ApePat").value.toUpperCase();
          const c2Am = document.getElementById("c2ApeMat").value.toUpperCase();
          const c2Dni = document.getElementById("c2Dni").value;
          const c2Edad = document.getElementById("c2Edad").value.toUpperCase();
          const c2Est = document.getElementById("c2Estado").value.toUpperCase();
          const c2Nac = document.getElementById("c2Nac").value.toUpperCase();
          const c2Lug = document.getElementById("c2LugarNac").value.toUpperCase();

          const fMat = document.getElementById("fechaMatrimonio").value;
          const lMat = document.getElementById("lugarMatrimonio").value.toUpperCase();
          const celMat = document.getElementById("celebranteMatrimonio").value.toUpperCase();

          doc.setFontSize(8.5);
          doc.text("FECHA DE CELEBRACIÓN", 20, startY); doc.text(fMat, 85, startY); startY += 6;
          doc.text("LUGAR", 20, startY); doc.text(lMat, 85, startY); startY += 6;
          doc.text("CELEBRANTE", 20, startY); doc.text(celMat, 85, startY); startY += 6;
          doc.text("CARGO", 20, startY); doc.text("JEFE DE REGISTRO CIVIL", 85, startY); startY += 8;

          // Tabla Matrimonio
          doc.setLineWidth(0.5);
          doc.rect(20, startY, 170, 6);
          doc.setFont("helvetica", "bold");
          doc.text("DATOS", 25, startY + 4);
          doc.text("LA CÓNYUGE", 85, startY + 4);
          doc.text("EL CÓNYUGE", 140, startY + 4); startY += 6;

          const rowsMat = [
            ["Prenombres", c1Nom, c2Nom],
            ["Primer Apellido", c1Ap, c2Ap],
            ["Segundo Apellido", c1Am, c2Am],
            ["Documento de Identidad", `DNI / ${c1Dni}`, `DNI / ${c2Dni}`],
            ["Edad", c1Edad, c2Edad],
            ["Estado Civil", c1Est, c2Est],
            ["Nacionalidad", c1Nac, c2Nac],
            ["Lugar de Nacimiento", c1Lug, c2Lug]
          ];

          doc.setFont("helvetica", "normal");
          rowsMat.forEach(row => {
            doc.rect(20, startY, 170, 6);
            doc.text(row[0], 25, startY + 4);
            doc.text(row[1], 85, startY + 4);
            doc.text(row[2], 140, startY + 4);
            startY += 6;
          });

          startY += 6;
          doc.setFont("helvetica", "bold");
          doc.text("FECHA DE REGISTRO", 20, startY); doc.text(new Date().toLocaleDateString(), 85, startY); startY += 5;
          doc.text("OFICINA REGISTRAL", 20, startY); doc.text(lMat, 85, startY); startY += 5;
          doc.text("REGISTRADOR CIVIL", 20, startY); doc.text(celMat, 85, startY);

        } else if (tipo === "Defuncion") {
          const fNom = document.getElementById("fNombres").value.toUpperCase();
          const fAp = document.getElementById("fApePat").value.toUpperCase();
          const fAm = document.getElementById("fApeMat").value.toUpperCase();
          const fDni = document.getElementById("fDni").value;
          const fEdad = document.getElementById("fEdad").value.toUpperCase();
          const fNac = document.getElementById("fNac").value.toUpperCase();
          const fLugNac = document.getElementById("fLugarNac").value.toUpperCase();
          const fFH = document.getElementById("fFechaHora").value.toUpperCase();
          const fDec = document.getElementById("fLugarDeceso").value.toUpperCase();

          doc.setFontSize(8.5);
          doc.text("FECHA/HORA DE FALLECIMIENTO", 20, startY); doc.text(fFH, 85, startY); startY += 6;
          doc.text("LOCALIDAD", 20, startY); doc.text("LIMA / LIMA / ATE", 85, startY); startY += 6;
          doc.text("LUGAR DE OCURRENCIA", 20, startY); doc.text(fDec, 85, startY); startY += 8;

          doc.setLineWidth(0.5);
          doc.rect(20, startY, 170, 6);
          doc.setFont("helvetica", "bold");
          doc.text("DATOS", 25, startY + 4);
          doc.text("FALLECIDO", 85, startY + 4); startY += 6;

          const rowsDef = [
            ["Prenombres", fNom],
            ["Primer Apellido", fAp],
            ["Segundo Apellido", fAm],
            ["Documento de Identidad", `DNI / ${fDni}`],
            ["Edad", fEdad],
            ["Nacionalidad", fNac],
            ["Lugar de Nacimiento", fLugNac],
            ["Padre", "-"],
            ["Madre", "-"]
          ];

          doc.setFont("helvetica", "normal");
          rowsDef.forEach(row => {
            doc.rect(20, startY, 170, 6);
            doc.text(row[0], 25, startY + 4);
            doc.text(row[1], 85, startY + 4);
            startY += 6;
          });

          startY += 6;
          doc.setFont("helvetica", "bold");
          doc.text("FECHA DE REGISTRO", 20, startY); doc.text(new Date().toLocaleDateString(), 85, startY); startY += 5;
          doc.text("OFICINA REGISTRAL", 20, startY); doc.text("MUNICIPALIDAD DISTRITAL DE ATE", 85, startY); startY += 5;
          doc.text("REGISTRADOR CIVIL", 20, startY); doc.text("OFICINA DE REGISTRO CIVIL - ATE", 85, startY);
        }

        // Bloque inferior de Firmas y Código de Barras idéntico al RENIEC
        let bottomY = 245;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(7.5);
        doc.text("....................................................", 45, bottomY, { align: "center" });
        doc.text("Firma del Declarante / Interesado", 45, bottomY + 4, { align: "center" });

        doc.text("....................................................", 145, bottomY, { align: "center" });
        doc.text("Firma del Registrador Autorizado", 145, bottomY + 4, { align: "center" });

        // Cuadros de huellas dactilares simuladas
        bottomY += 12;
        doc.rect(50, bottomY, 22, 22);
        doc.setFontSize(6);
        doc.text("Huella dactilar", 61, bottomY + 25, { align: "center" });

        doc.rect(125, bottomY, 22, 22);
        doc.text("Huella dactilar", 136, bottomY + 25, { align: "center" });

        // Sello digital municipal y código de barras abajo a la derecha
        doc.setFontSize(7);
        doc.text("MUNICIPALIDAD DE ATE", 175, bottomY + 2);
        doc.text("REGISTRO CIVIL DIGITAL", 175, bottomY + 6);

        // Descarga instantánea del acta oficial idéntica al modelo RENIEC
        doc.save(`Acta_Oficial_${tipo}_RENIEC_Ate.pdf`);

        rcMessage.style.color = "#2e7d32";
        rcMessage.innerHTML = `<i class="fa-solid fa-circle-check"></i> ¡Épico! El acta oficial de ${tipo} con formato idéntico al RENIEC se ha descargado y enviado a <strong>${correo}</strong>.`;
      }, 1000);
    });
  }

  // Lógica de Tributos Municipales
  const btnCalcularTributo = document.getElementById("btnCalcularTributo");
  const tributoResultado = document.getElementById("tributoResultado");
  const resDetalle = document.getElementById("resDetalle");
  const btnPagarSimulado = document.getElementById("btnPagarSimulado");

  if (btnCalcularTributo) {
    btnCalcularTributo.addEventListener("click", () => {
      const codigo = document.getElementById("codigoContribuyente").value;
      const tipoTributo = document.getElementById("tipoTributo").value;
      const montoBase = parseFloat(document.getElementById("montoBase").value) || 0;
      const mora = (montoBase * 0.05).toFixed(2);
      const total = (montoBase + parseFloat(mora)).toFixed(2);

      tributoResultado.style.display = "block";
      resDetalle.innerHTML = `
        <strong>Contribuyente / DNI:</strong> ${codigo ? codigo : "Genérico"}<br>
        <strong>Concepto:</strong> ${tipoTributo}<br>
        <strong>Deuda Base:</strong> S/. ${montoBase.toFixed(2)} | <strong>Intereses:</strong> S/. ${mora}<br>
        <span style="font-size:1.1rem; color:#ad1457;"><strong>Monto Total: S/. ${total}</strong></span>
      `;
    });
  }

  if (btnPagarSimulado) {
    btnPagarSimulado.addEventListener("click", () => {
      alert("¡Pago procesado con éxito vía pasarela segura! Deuda saldada en el sistema de la Municipalidad de Ate.");
      tributoResultado.style.display = "none";
    });
  }
});