document.querySelector('.main-banner').style.backgroundImage = "url(uploads/banner-001.jpg)";

addEventListener("DOMContentLoaded", function() {
  document.querySelector('.loading-overlay').style.display = "none";
});
// nav bar
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

// When the user scrolls down 600px from the top of the document, show the button
let mybutton = document.getElementById('myBtn');
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// portfolio features display
let featuresModal = document.querySelector('.features-modal'),
 name = document.querySelector('.project-name'),
 type = document.querySelector('.project-type'),
 mode = document.querySelector('.project-mode'),
 features = document.querySelector('.project-features');
function viewFeatures(x) {
  if (x == 1) {
    name.innerHTML = "Computer-based exam";
    type.innerHTML = "Web page";
    mode.innerHTML = "Client side";
    features.innerHTML = "<li>Light, simple, responsive</li> <li>Timer countdown</li> <li>Navigation buttons</li> <li>Progress indicators</li> <li>Adaptable and flexible</li>"
  } else if (x == 2) {
    name.innerHTML = "Gatonegro";
    type.innerHTML = "Mobile game";
    mode.innerHTML = "Interactive Number guessing game, puzzle";
    features.innerHTML = "<li>Interactive game UX with touch-swipe feature</li> <li>Rich UI</li> <li>Local storage</li> <li>Logical feedbacks</li> <li>Difficulty auto-adapt</li> <li>Level auto/manual set</li> <li>Dynamic progress bar</li> <li>Dynamic achievements &stats</li> <li>Power-ups</li> <li>in-game purchase</li> <li>Sound set-up</li>"
  } else if (x == 3) {
    name.innerHTML = "Castle Royal College";
    type.innerHTML = "Website";
    mode.innerHTML = "Client-side, responsive";
    features.innerHTML = "<li>Complete school site</li> <li>Portal login</li> <li>Student/parent/staff dashboard</li> <li>Video shows</li> <li>Like and comment function</li> <li>File download</li>"
  } else if (x == 4) {
    name.innerHTML = "Guess the Bible Name";
    type.innerHTML = "Mobile app";
    mode.innerHTML = "Study app, letter guessing game, puzzle";
    features.innerHTML = `<li>Bible study</li> 
    <li>Game mode</li> 
    <li>Biblical names</li> 
    <li>Names of God</li> 
    <li>Pagan gods and idols</li>
    <li>Places</li>
    <li>Search</li> 
    <li>High scores and Power-ups</li>`
  } else if (x == 5) {
    name.innerHTML = "Pick-a-card";
    type.innerHTML = "Web game";
    mode.innerHTML = "Card picking game, puzzle";
    features.innerHTML = `<li>Pick a random card</li> 
    <li>High scores </li>
    <li>Local storage</li>`
  } else if (x == 6) {
    name.innerHTML = "AbbeyCal 1.2";
    type.innerHTML = "Mobile app";
    mode.innerHTML = "Simple calculator";
    features.innerHTML = "<li>Neomorphism UI</li> <li>Responsive</li> <li>Scientific functions</li> <li>Complex mathematical expressions</li> <li>On-screen keys</li> <li>Light/dark theme </li> <li>Time and date</li> <li>Dynamic greeting slide</li>"
  } else if (x == 7) {
    name.innerHTML = "Quiz";
    type.innerHTML = "Website";
    mode.innerHTML = "Simple quiz page";
    features.innerHTML = "<li>Multiple choice</li> <li>Scores and grading</li> <li>Time limit</li> <li>Local storage</li>"
  } else if (x == 8) {
    name.innerHTML = "Word scramble";
    type.innerHTML = "Web game";
    mode.innerHTML = "Guess word from scrambled letters, puzzle";
    features.innerHTML = "<li>Brain training</li> <li>Prototype</li> <li>Time limit</li>"
  } else if (x == 9) {
    name.innerHTML = "Love-o-meter";
    type.innerHTML = "Web page";
    mode.innerHTML = "Simulate love percentage between two people, prank";
    features.innerHTML = "<li>Prank</li> <li>Fun</li> <li>Quotes</li>"
  } else if (x == 10) {
    name.innerHTML = "Eruobami Music Ministry";
    type.innerHTML = "Website";
    mode.innerHTML = "Client-side";
    features.innerHTML = "<li>Responsive</li> <li>Single page</li> <li>Slide show</li> <li>Accordion toggle</li> <li>File download</li>"
  }
  
  featuresModal.style.display = "block"
}

function viewMedia(x,y) {
  let mediaModal = document.querySelector('.show-media-modal'),
 mediaText = document.querySelector('.media-text');
 mediaImg = document.querySelector('.show-media-img');
 mediaText.textContent = y;
 mediaImg.src = x;
 document.location = "#media-modal";
 mediaModal.style.display = "block"
}

function scrollToItem(x) {
  location.replace(x)
}

// Create an Intersection Observer instance
let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
});

// Observe all sections with the 'fade-section' class
document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});