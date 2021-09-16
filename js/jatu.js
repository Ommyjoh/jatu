const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}






var slideIndex = 0;
showSlides();
function showSlides() {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
for (i = 0; i < slides.length; i++) {
 slides[i].style.display = "none";  
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}    
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "flex";  
dots[slideIndex-1].className += " active";
setTimeout(showSlides, 8000); // Change image every 8 seconds
}



window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }


  const serviceA = document.querySelector('.serviceA');
  serviceA.addEventListener('click', event =>{
      const current = event.target;
      const isReadMore = current.className.includes('read_more_btn');
      if(!isReadMore) return;

      const currentTxt = event.target.parentNode.querySelector('.read_more_txt');
      currentTxt.classList.toggle('read_more_txt--show');
  })