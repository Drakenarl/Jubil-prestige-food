function envoyerWhatsApp() {
  const numero = "22969690704";
  const nom = document.getElementById("nom").value.trim();
  const tel = document.getElementById("telephone").value.trim();
  const sujet = document.getElementById("sujet").value;
  const msg = document.getElementById("message").value.trim();

  if (!nom || !tel || !sujet) {
    alert("Veuillez remplir les champs obligatoires (nom, téléphone, sujet).");
    return;
  }

  const sujetLabel = {
    commande: "Passer une commande",
    evenement: "Organiser un événement",
    info: "Demande d'informations",
    autre: "Autre"
  }[sujet] || sujet;

  const texte = `Bonjour Jubilée Prestige Food 👋\nNom : ${nom}\nTéléphone : ${tel}\nSujet : ${sujetLabel}${msg ? "\nMessage : " + msg : ""}`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texte)}`;
  window.open(url, "_blank");
}
