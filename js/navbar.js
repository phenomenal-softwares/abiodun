let nav = document.querySelector('.nav');
let menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener("click", function(){
  nav.classList.toggle("mobile-nav");
  this.classList.toggle("is-active");
});
function closeBar() {
  nav.classList.toggle("mobile-nav");
  menuToggle.classList.toggle("is-active");
}