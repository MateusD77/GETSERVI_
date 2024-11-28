function abrirEmail() {
  const email = "matimdouradim@gmail.com";
  const assunto = "Contato - Envio de Currículo para a GESTSERVI";
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
    assunto
  )}`;

  // Tente abrir o Gmail
  const novaJanela = window.open(gmailUrl, "_blank");

  // Se a nova janela não abrir, use o mailto como fallback
  if (
    !novaJanela ||
    novaJanela.closed ||
    typeof novaJanela.closed === "undefined"
  ) {
    document.getElementById("fallbackMailto").click();
  }
}
