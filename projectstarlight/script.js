document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav a'); // Select links within <nav>
  
    function setActiveNavLink(sectionId) {
      navLinks.forEach(link => {
        if (link.dataset.target === sectionId) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  
    sections.forEach(section => {
      section.addEventListener('click', function() {
        const sectionId = this.id;
        setActiveNavLink(sectionId);
      });
    });
  });