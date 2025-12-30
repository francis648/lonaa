<script>
  document.addEventListener("DOMContentLoaded", () => {
    // Start Screen Transition
    const startBtn = document.getElementById("start-btn");
    const startScreen = document.getElementById("start-screen");
    const mainContent = document.getElementById("main-content");
    const music = document.getElementById("bg-music");

    startBtn.addEventListener("click", () => {
      startScreen.style.display = "none";
      mainContent.style.display = "block";
      if (music) {
        music.play().catch(err => {
          console.warn("Autoplay blocked:", err);
        });
      }
    });

    // Slideshow
    const slides = document.querySelectorAll(".slides");
    let index = 0;

    function showSlides() {
      if (slides.length === 0) return; // Guard for empty slides

      // Remove active class from all slides
      slides.forEach(slide => slide.classList.remove("active"));

      // Show current slide
      slides[index].classList.add("active");

      // Move to next slide
      index = (index + 1) % slides.length;
    }

    // Initialize slideshow
    if (slides.length > 0) {
      showSlides(); // Show first slide immediately
      setInterval(showSlides, 3000); // Change every 3 seconds
    }
  });
</script>
