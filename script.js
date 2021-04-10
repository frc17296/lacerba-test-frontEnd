var button = document.getElementById('btn');
var alertBox = document.getElementById('alert');
var closeButton = document.querySelector('#close');
var scroller = document.getElementById('scroller');
var newsletter = document.getElementById('newsletter');
var stickyNav = document.querySelector('.header');


button.addEventListener('click', function() { 
  alertBox.style.display = "block"
  alertBox.style.animation = "fadeFromTop .2s .5s forwards ease-in";
  closeButton.style.background = "";
}); 

function closeBox() {
  alertBox.style.animation = "fadeOut 1s ease-out";
}

closeButton.addEventListener('click', function() {      
  this.style.background = "rgb(145, 144, 144)";
  closeBox();
  setTimeout(function() {
    alertBox.style.display = "none";        
  }, 1000);
});    

scroller.addEventListener('click', function() {     
  newsletter.scrollIntoView({behavior: "smooth"});
  setTimeout(closeBox(), 1500);      
});

window.onscroll = function() {
  var y = window.scrollY;
  if (y > 0) {
    stickyNav.classList.add('is-stycky')
  } else {
    stickyNav.classList.remove('is-stycky')
  }
}