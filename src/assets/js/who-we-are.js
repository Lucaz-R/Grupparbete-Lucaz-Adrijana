document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stat-value");
  const duration = 800; 
  const steps = 40; 

  const animateCounters = () => {
    counters.forEach((counter) => {
      const target = parseInt(counter.textContent.replace(/\D/g, ""));
      const suffix = counter.textContent.replace(/[0-9]/g, ""); 
      let count = 0;

      const increment = target / steps;
      const interval = duration / steps;

      counter.textContent = "0" + suffix;

      const updateCount = () => {
        count += increment;

        if (count < target) {
          counter.textContent = Math.ceil(count) + suffix;
          setTimeout(updateCount, interval);
        } else {
          counter.textContent = target + suffix; 
        }
      };

      updateCount();
    });
  };

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animateCounters();
      observer.disconnect(); 
    }
  });

  observer.observe(document.querySelector(".stats"));
});
