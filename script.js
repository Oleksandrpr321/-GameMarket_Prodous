
document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll(".star");
  
    stars.forEach(function(star) {
      star.addEventListener("click", function() {
        const value = parseInt(star.getAttribute("data-value"));
        resetStars();
        for (let i = 0; i < value; i++) {
          stars[i].classList.add("active");
        }
      });
    });
  
    function resetStars() {
      stars.forEach(function(star) {
        star.classList.remove("active");
      });
    }
  });
  
