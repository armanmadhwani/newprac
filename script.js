// Intersection Observer for Scroll Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
});

// Apply Observer to all elements with the 'animate' class
document.querySelectorAll(".animate").forEach((element) => {
  observer.observe(element);
});
