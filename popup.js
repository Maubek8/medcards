// Popup functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get elements
  const popupContainer = document.getElementById('popup-container');
  const closePopup = document.getElementById('close-popup');
  const mainCta = document.getElementById('main-cta');
  const floatCta = document.querySelector('.cta-float');
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  // Show popup when clicking any CTA
  function showPopup() {
    popupContainer.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
  
  // Hide popup
  function hidePopup() {
    popupContainer.style.display = 'none';
    document.body.style.overflow = '';
  }
  
  // Event listeners for CTAs
  if (mainCta) mainCta.addEventListener('click', function(e) {
    e.preventDefault();
    showPopup();
  });
  
  if (floatCta) floatCta.addEventListener('click', function(e) {
    e.preventDefault();
    showPopup();
  });
  
  // Close popup
  if (closePopup) closePopup.addEventListener('click', hidePopup);
  
  // Close when clicking outside popup content
  popupContainer.addEventListener('click', function(e) {
    if (e.target === popupContainer) {
      hidePopup();
    }
  });
  
  // FAQ functionality
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      this.classList.toggle('active');
      const answer = this.nextElementSibling;
      if (this.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = '0';
      }
    });
  });
  
  // Form submission
  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Here you would normally send the form data to your server
      alert('Cadastro realizado com sucesso! Redirecionando...');
      // Simulate form submission
      setTimeout(() => {
        window.location.href = 'https://seucheckout.com';
      }, 1500);
    });
  }
  
  // Auto-open popup after 30 seconds
  setTimeout(() => {
    const alreadyShown = localStorage.getItem('popupShown');
    if (!alreadyShown) {
      showPopup();
      localStorage.setItem('popupShown', 'true');
    }
  }, 30000);
});
