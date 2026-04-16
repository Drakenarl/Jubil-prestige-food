document.addEventListener("DOMContentLoaded", () => {
  const numero = "22969690704";

  document.querySelectorAll(".btn-commander").forEach(button => {
    button.addEventListener("click", function() {
      const plat = this.parentElement.querySelector(".nom-plat").textContent.trim();
      const message = `Bonjour, je voudrais commander: ${plat}`;
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    });
  });
});
