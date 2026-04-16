document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const numero = "22969690704";
  const nom = document.getElementById("nom").value;
  const tel = document.getElementById("telephone").value;
  const sujet = document.getElementById("sujet").value;
  const msg = document.getElementById("message").value;

  const texte = `Nom: ${nom}%0ATéléphone: ${tel}%0ASujet: ${sujet}%0AMessage: ${msg}`;
  const url = `https://wa.me/${numero}?text=${texte}`;
  window.open(url, "_blank");
});
