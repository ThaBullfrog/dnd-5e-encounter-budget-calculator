const animationElements = document.querySelectorAll('.animated');

if (animationElements.length > 0) {
  animationElements.forEach(e => e.classList.add('dont-animate-yet'));

  function checkIfInView() {
    animationElements.forEach(element => {
      let top = element.getBoundingClientRect().top;
      console.log(top);
      if (top + element.offsetHeight * 0.5 <= window.innerHeight) {
        element.classList.remove('dont-animate-yet');
      }
    });
  }

  checkIfInView();
  window.addEventListener('scroll', checkIfInView);
  window.addEventListener('resize', checkIfInView);
}
