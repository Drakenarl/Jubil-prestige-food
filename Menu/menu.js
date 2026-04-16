const WHATSAPP_NUMBER = "22969690704";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".btn-commander").forEach(button => {
    button.addEventListener("click", function () {
      // Récupère le nom du plat depuis le h3 le plus proche
      const carte = this.closest(".plat-carte");
      const nomPlat = carte ? carte.querySelector("h3").textContent.trim() : "";
      const prix = carte ? carte.querySelector(".prix").textContent.trim() : "";

      const message = `Bonjour Jubilée Prestige Food 👋\nJe souhaite commander : *${nomPlat}* (${prix})\nPouvez-vous confirmer la disponibilité ? Merci !`;
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    });
  });
});
