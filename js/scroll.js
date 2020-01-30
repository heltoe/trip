const arrowTop = document.querySelector('.scroll-top')

arrowTop.onclick = () => {
  window.scrollTo({
    top : 0 ,
    behavior : "smooth",
    block : "start"
  });
};

window.addEventListener('scroll', () => {
  arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
  scrollFunction()
});

scrollFunction = () => {
  const opacity = arrowTop
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    opacity.style.opacity = "1"
  } else {
    opacity.style.opacity = "0"
  }
}
 
  
 