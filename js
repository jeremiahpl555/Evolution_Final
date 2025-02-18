window.onload = function() {
  const links = document.querySelectorAll("a")
  links.forEach(link => {
    const randomX = Math.floor(Math.random() * (window.innerWidth - link.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - link.offsetHeight));
    link.style.left = `${randomX}px`;
    link.style.top = `${randomY}px`;
  });
};




