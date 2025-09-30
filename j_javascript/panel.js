// Sidebar
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleSidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('w-16'); // ancho reducido al colapsar
  sidebar.classList.toggle('p-1'); // padding reducido
  sidebar.querySelectorAll('.menu-text').forEach(el => el.classList.toggle('hidden'));
});

// Modal
const openBtn = document.getElementById("openAlert");
const closeBtn = document.getElementById("closeAlert");
const modal = document.getElementById("customAlert");

openBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});
