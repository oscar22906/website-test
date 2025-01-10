$(function() {
  const d = new Date();
  const hours = d.getHours();
  const night = hours >= 19 || hours <= 7; // between 7pm and 7am
  const body = document.querySelector('body');
  const toggle = document.getElementById('toggle');
  const input = document.getElementById('switch');

  if (night) {
    input.checked = true;
    body.classList.add('night');
  }

  toggle.addEventListener('click', function() {
    const isChecked = input.checked;
    if (isChecked) {
      body.classList.remove('night');
    } else {
      body.classList.add('night');
    }
  });

  const introHeight = document.querySelector('.intro').offsetHeight;
  const topButton = document.getElementById('top-button');
  const $topButton = $('#top-button');

  window.addEventListener(
    'scroll',
    function() {
      if (window.scrollY > introHeight) {
        $topButton.fadeIn();
      } else {
        $topButton.fadeOut();
      }
    },
    false
  );

  topButton.addEventListener('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  const hand = document.querySelector('.emoji.wave-hand');

  function waveOnLoad() {
    hand.classList.add('wave');
    setTimeout(function() {
      hand.classList.remove('wave');
    }, 2000);
  }

  setTimeout(function() {
    waveOnLoad();
  }, 1000);

  hand.addEventListener('mouseover', function() {
    hand.classList.add('wave');
  });

  hand.addEventListener('mouseout', function() {
    hand.classList.remove('wave');
  });

  window.sr = ScrollReveal({
    reset: false,
    duration: 600,
    easing: 'cubic-bezier(.694,0,.335,1)',
    scale: 1,
    viewFactor: 0.3,
  });

  sr.reveal('.background');
  sr.reveal('.skills');
  sr.reveal('.experience', { viewFactor: 0.2 });
  sr.reveal('.featured-projects', { viewFactor: 0.1 });
  sr.reveal('.other-projects', { viewFactor: 0.05 });
});
let isAtBottom = false;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY; // Current scroll position from the top
    const windowHeight = window.innerHeight; // Height of the visible area
    const documentHeight = document.body.offsetHeight; // Total height of the document

    // Check if the user is fully scrolled to the bottom
    isAtBottom = scrollTop + windowHeight >= documentHeight - 10;
});

document.addEventListener('mousemove', (event) => {
    const proximityThreshold = 100; // Distance from the bottom to trigger the weasel
    const mouseY = event.clientY; // Mouse position from the top
    const screenHeight = window.innerHeight; // Height of the viewport
    const weasel = document.querySelector('.weasel');

    // Show the weasel only if the user is at the bottom and near the bottom of the screen
    if (isAtBottom && screenHeight - mouseY < proximityThreshold) {
        weasel.style.bottom = '0'; // Raise the weasel
    } else {
        weasel.style.bottom = '-100%'; // Lower the weasel
    }
});

