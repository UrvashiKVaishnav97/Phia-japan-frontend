//   <!-- Toggle: change bars <-> X -->
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu  = document.getElementById("mobileMenu");
  const toggler     = document.querySelector(".navbar-toggler");
  const togglerIcon = toggler ? toggler.querySelector("i") : null;
  const header      = document.querySelector(".sticky-header");

  /* ===== Mobile menu toggle icon ===== */
  if (mobileMenu && togglerIcon) {
    mobileMenu.addEventListener("shown.bs.collapse", function () {
      togglerIcon.classList.remove("fa-bars");
      togglerIcon.classList.add("fa-times");
    });

    mobileMenu.addEventListener("hidden.bs.collapse", function () {
      togglerIcon.classList.remove("fa-times");
      togglerIcon.classList.add("fa-bars");
    });
    
    if (typeof MutationObserver !== 'undefined') {
      var mo = new MutationObserver(function (mutations) {
        mutations.forEach(function (m) {
          if (m.attributeName === 'class') {
            var nowOpen = mobileMenu.classList.contains('show');
            if (nowOpen) {
              togglerIcon.classList.remove('fa-bars');
              togglerIcon.classList.add('fa-times');
            } else {
              togglerIcon.classList.remove('fa-times');
              togglerIcon.classList.add('fa-bars');
            }
          }
        });
      });
      mo.observe(mobileMenu, { attributes: true, attributeFilter: ['class'] });
    }
  }

  /* ===== Sticky header on scroll ===== */
  window.addEventListener("scroll", function () {
    if (header && window.scrollY > 50) {
      header.classList.add("sticky-active");
    } else if (header) {
      header.classList.remove("sticky-active");
    }
  });
});


// --- START: Mobile Menu Accordion ---
const mobileMenuParents = document.querySelectorAll('.mobile-menu .menu-item-has-children > a.dropdown-toggle');
mobileMenuParents.forEach(function(parentLink) {
  parentLink.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    const parentLi = this.parentElement;
    const submenu = this.nextElementSibling;
    parentLi.classList.toggle('active');
    if (submenu.style.display === 'block') {
      submenu.style.display = 'none';
    } else {
      submenu.style.display = 'block';
    }
    mobileMenuParents.forEach(function(otherParentLink) {
      if (otherParentLink !== parentLink) {
        otherParentLink.parentElement.classList.remove('active');
        otherParentLink.nextElementSibling.style.display = 'none';
      }
    });
  });
});
// --- END: Mobile Menu Accordion ---
    
/* Swiper's JS Testimonial Section */
if (typeof Swiper === 'function' && document.querySelector('.swiper-container')) {
  var swiper = new Swiper(".swiper-container", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            768: { slidesPerView: 2, spaceBetween: 30 },
            1200: { slidesPerView: 3, spaceBetween: 30 }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}
  
// DATE PICKER INITIALIZATION
document.addEventListener('DOMContentLoaded', function () {
  function initFlatpickrs(context = document) {
    context.querySelectorAll('.datepicker').forEach(function (el) {
      if (el._flatpickr) return;
      flatpickr(el, {
        dateFormat: "Y-m-d",
        allowInput: true,
        onReady: function (selectedDates, dateStr, instance) {
          var modalDialog = el.closest('.modal-dialog');
          if (modalDialog) {
            instance.config.appendTo = modalDialog;
            instance.redraw();
          }
        }
      });
    });
  }

  if (typeof flatpickr === "function") initFlatpickrs();

  var advModal = document.getElementById('advancedSearchModal');
  if (advModal) {
    advModal.addEventListener('shown.bs.modal', function () {
      initFlatpickrs(advModal);
    });
  }

  const advancedSearchBtn = document.getElementById('advanced-search-icon-btn');
  const searchModalEl = document.getElementById('advancedSearchModal');
  if (advancedSearchBtn && searchModalEl && typeof bootstrap !== 'undefined') {
    try {
      new bootstrap.Tooltip(advancedSearchBtn, { title: 'Show Advanced Search', placement: 'top' });
    } catch (e) {}
    const searchModal = new bootstrap.Modal(searchModalEl);
    advancedSearchBtn.addEventListener('click', function () { searchModal.show(); });
  }
});

// Dynamic Star Rating Script
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('phia-testimonial-contact');
  if (!form) return;

  const stars = form.querySelectorAll('.star-rating i');
  let selectedRating = 0;

  stars.forEach(star => {
    star.addEventListener('click', () => {
      const value = parseInt(star.getAttribute('data-value'));
      selectedRating = (selectedRating === value) ? 0 : value;
      updateStars();
    });
    star.addEventListener('mouseover', () => {
      const hoverValue = parseInt(star.getAttribute('data-value'));
      updateStars(hoverValue);
    });
    star.addEventListener('mouseout', () => {
      updateStars();
    });
  });

  function updateStars(hoverValue = 0) {
    stars.forEach(star => {
      const value = parseInt(star.getAttribute('data-value'));
      if (hoverValue >= value || (!hoverValue && selectedRating >= value)) {
        star.classList.remove('fa-regular');
        star.classList.add('fa-solid', 'active');
      } else {
        star.classList.remove('fa-solid', 'active');
        star.classList.add('fa-regular');
      }
    });
  }
});

/* ========================================================================= */
/* === START: New Solution for Clickable Parent Links on Hover Dropdowns === */
/* ========================================================================= */
document.addEventListener('DOMContentLoaded', function() {
    
    // Select all dropdown toggle links within the main desktop navigation
    const desktopDropdownToggles = document.querySelectorAll('.navbar-nav .nav-item.dropdown > a.dropdown-toggle');

    desktopDropdownToggles.forEach(function(toggle) {
        // Check if the screen is desktop-sized (matching your CSS media query)
        if (window.innerWidth >= 1400) {
            
            // --- This is the key part ---
            // We prevent Bootstrap's default dropdown script from running on this link
            // by removing the attribute it looks for.
            toggle.removeAttribute('data-bs-toggle');
            
            // Now, we add our own simple click event listener.
            toggle.addEventListener('click', function(event) {
                // Prevent any other potential default behavior
                event.preventDefault();
                // Navigate to the link's URL
                window.location.href = this.href;
            });
        }
    });
});
/* ======================================================================= */
/* === END: New Solution for Clickable Parent Links on Hover Dropdowns === */
/* ======================================================================= */