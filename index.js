window.addEventListener("DOMContentLoaded", function() {
  const nameElement = document.getElementById("name");
  const name = "Harris"; // Add your name here

  const descriptionStrings = ["CS Major", "Coder", "Gamer"]; // Update the strings here
  const descriptionElement = document.getElementById("description");
  const descriptionLine1 = document.getElementById("description-line-1");

  // Initialize Typed.js
  const typed = new Typed(descriptionElement, {
    strings: descriptionStrings,
    typeSpeed: 100, // Typing speed in milliseconds
    backSpeed: 100, // Backspacing speed in milliseconds
    loop: true, // Enable looping of the strings
    loopCount: Infinity, // Number of loops (Infinity for continuous looping)
    showCursor: false, // Hide the typing cursor
  });

  let charIndex = 0;
  const typingDelay = 200; // Delay between each character typing
  const newTextDelay = 200; // Delay before typing the next text

  function type() {
    if (charIndex < name.length) {
      nameElement.textContent += name[charIndex];
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(() => {
        descriptionLine1.style.opacity = "1";
        descriptionElement.style.opacity = "1";
      }, newTextDelay);
    }
  }

  setTimeout(type, newTextDelay);
});
