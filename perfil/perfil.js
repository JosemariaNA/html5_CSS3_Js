// Botón Seguir -> cambia estado dinámico
document.addEventListener("DOMContentLoaded", () => {
  const followBtn = document.querySelector(".btn-primary");
  if (followBtn) {
    followBtn.addEventListener("click", () => {
      if (followBtn.innerText === "Seguir") {
        followBtn.innerText = "Siguiendo";
        followBtn.classList.remove("bg-blue-500", "hover:bg-blue-600");
        followBtn.classList.add("bg-green-500", "hover:bg-green-600");
      } else {
        followBtn.innerText = "Seguir";
        followBtn.classList.remove("bg-green-500", "hover:bg-green-600");
        followBtn.classList.add("bg-blue-500", "hover:bg-blue-600");
      }
    });
  }
});
