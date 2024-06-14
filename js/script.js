const sections = document.querySelectorAll('section[data-background]');

window.addEventListener('scroll', () => {
  const currentSection = getCurrentSection();
  if (currentSection) {
    const backgroundImage = currentSection.getAttribute('data-background');
    document.body.style.backgroundImage = `url('images/${backgroundImage}')`;
    document.body.style.transition = 'background-image 0.5s ease-in-out';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
  }
});

function getCurrentSection() {
  const scrollPosition = window.scrollY + window.innerHeight / 2;
  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      return section;
    }
  }
  return null;
}

function openImage(imageUrl) {
  window.open(imageUrl, '_blank', 'fullscreen=yes');
}