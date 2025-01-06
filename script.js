// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
});

// Observe all elements with the animate class
document.querySelectorAll(".animate").forEach((el) => {
  observer.observe(el);
});
