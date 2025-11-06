//   <!-- Toggle: change bars <-> X -->

  
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu  = document.getElementById("mobileMenu");
  const toggler     = document.querySelector(".navbar-toggler");
  const togglerIcon = toggler ? toggler.querySelector("i") : null;
  const header      = document.querySelector(".sticky-header");

  /* ===== Mobile menu toggle icon ===== */
  if (mobileMenu && togglerIcon) {
    mobileMenu.addEventListener("show.bs.collapse", function () {
      togglerIcon.classList.remove("fa-bars");
      togglerIcon.classList.add("fa-times");
    });

    mobileMenu.addEventListener("hide.bs.collapse", function () {
      togglerIcon.classList.remove("fa-times");
      togglerIcon.classList.add("fa-bars");
    });
  }

  /* ===== Sticky header on scroll ===== */
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("sticky-active");
    } else {
      header.classList.remove("sticky-active");
    }
  });
});


    //   <!-- Toggle: change bars <-> X -->


    // <!-- Custom JS for Testimonial section initializing Swiper -->
    
    

