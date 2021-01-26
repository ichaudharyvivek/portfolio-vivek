/* ===============================
   Animation for splash screen
   =============================== */
const splash = document.querySelector(".splash");
const logo = document.querySelector(".splash #logo");
document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("fade-out");
    logo.classList.add("fade-out");
  }, 2500);
});

/* ===============================
   Animation for type writter effect
   =============================== */
// Initiailze class
class Typewriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.wait = parseInt(wait, 10);
    this.txt = "";
    this.wordIndex = 0;
    this.type();
    this.isDeleting = false;
  }

  // Defining Type Method
  type() {
    // Current index of word
    const currentIndex = this.wordIndex % this.words.length;

    // Get full text of current word
    const fullTxt = this.words[currentIndex];

    // Check if deleting
    if (this.isDeleting) {
      // Remove a character
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add a character
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make a pause at end
      typeSpeed = this.wait;

      // Set is Deleting to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;

      // Move to next word
      this.wordIndex += 1;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init method on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init type writter
  new Typewriter(txtElement, words, wait);
});
