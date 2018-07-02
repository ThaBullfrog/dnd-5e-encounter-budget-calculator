const navbarButton = document.querySelector('#navbar-button');

if(navbarButton != null) {
  function collapseSection(element) {
    element.style.height = null;
    navbarButton.setAttribute('data-collapsed', 'true');
  }

  function expandSection(element) {
    var sectionHeight = element.scrollHeight;
    element.style.height = sectionHeight + 'px';
    navbarButton.setAttribute('data-collapsed', 'false');
  }

  navbarButton.addEventListener('click', function(e) {
    var section = document.querySelector('#navbar-collapse');
    var isCollapsed = navbarButton.getAttribute('data-collapsed') === 'true';
    navbarButton.classList.toggle('close');
    if(isCollapsed) {
      expandSection(section);
    } else {
      collapseSection(section)
    }
    e.preventDefault();
  });
}
