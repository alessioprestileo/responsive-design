document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('body').addEventListener('click', () => {
    const sidebar = document.querySelector('.mobile-sidebar')
    if (sidebar.classList.contains('expanded')) {
      sidebar.classList.toggle('expanded')
    }
  });
  
  document.querySelector('.mobile-menu-toggle').addEventListener('click', (event) => {
    event.stopPropagation();
    document.querySelector('.mobile-sidebar').classList.toggle('expanded')
  });
})
